declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CITIES_API_KEY: string;
      CITIES_ENDPOINT: string;
      FIREBASE_API_KEY: string;
      FIREBASE_PROJECT: string;
      FIREBASE_SENDER: string;
      FIREBASE_APP_ID: string;
    }
  }
}

export {};
