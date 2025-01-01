import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message, captcha } = await request.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  const res = await fetch(verificationURL, { method: 'POST' });
  const data = await res.json();

  if (!data.success) {
    return new Response(JSON.stringify({ error: 'reCAPTCHA doğrulaması başarısız.' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // SMTP transportunu yapılandırın
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // E-posta içeriğini oluşturun
  const mailOptions = {
    from: `"${name}" <${email}>`, // Gönderenin adı ve e-posta adresi
    to: process.env.EMAIL_TO, // Alıcının e-posta adresi
    subject: 'Yeni İletişim Mesajı',
    text: message,
    html: `
      <h2>Yeni İletişim Mesajı</h2>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    // E-postayı gönder
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Mesajınız başarıyla gönderildi.' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    return new Response(JSON.stringify({ error: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
