import { DocsThemeConfig } from 'nextra-theme-docs'
import React from 'react'

const config: DocsThemeConfig = {
  logo: <span>Home</span>,
  chat: {
    link: 'https://facebook.com/lmqzzz',
    icon: <svg width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m16 32c-8.8375 0-16-7.1625-16-16s7.1625-16 16-16 16 7.1625 16 16-7.1625 16-16 16zm4.43125-23.884375c-.553125-.078125-1.334375-.115625-2.340625-.115625-1.184375 0-2.13125.328125-2.84375.984375s-1.06875 1.58125-1.06875 2.771875v2.09375h-2.615625v2.84375h2.61875v7.2875h3.140625v-7.29375h2.60625l.4-2.840625h-3.00625v-1.815625c0-.4625.103125-.80625.309375-1.0375.20625-.228125.6-.34375 1.1875-.34375h1.6125z"></path></svg>,
  },

  project: {
    link: 'https://codeforces.com/profile/lmqzzz',
    icon: <svg width="32" height="32" viewBox="-5 -5 32 32"><path fill="currentColor" d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"></path></svg>,
  },
}

export default config