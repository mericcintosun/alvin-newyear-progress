// app/providers.js
'use client';

import i18n from '@/i18n';
import { ThemeProvider } from './providers/ThemeProvider';
import { I18nextProvider } from 'react-i18next';

function Providers({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default Providers;
