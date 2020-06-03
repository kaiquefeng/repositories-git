import React from 'react';
import App from 'next/app';

import './scss/global.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

export default MyApp;