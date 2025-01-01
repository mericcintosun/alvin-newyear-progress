// pages/api/contact.js

import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Basit input validation
    if (!name || !email || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({ error: 'Tüm alanları doldurduğunuzdan emin olun.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // reCAPTCHA doğrulama
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const verificationResponse = await fetch(verificationURL, { method: 'POST' });
    const verificationData = await verificationResponse.json();

    if (!verificationData.success) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA doğrulaması başarısız. Lütfen tekrar deneyin.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // SMTP transportunu yapılandırın
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: parseInt(process.env.EMAIL_PORT, 10) === 465, // 465 için true, diğer portlar için false
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-posta içeriğini oluşturun
    const mailOptions = {
      from: process.env.EMAIL_USER, // Gönderen, SMTP kimliği ile aynı olmalı
      replyTo: `"${name}" <${email}>`, // Kullanıcının e-posta adresi
      to: process.env.EMAIL_TO, // Alıcının e-posta adresi
      subject: 'Yeni İletişim Mesajı',
      text: `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
      html: `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Mesajınız başarıyla gönderildi.' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    return new Response(
      JSON.stringify({ error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
