/// <reference types="vite/client" />

import es from 'platform/i18n/messages/es.json'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    es: typeof es
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en'
    // custom resources type
    resources: {
      es: typeof es
    }
  }
}
