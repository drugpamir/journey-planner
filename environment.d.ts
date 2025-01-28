declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CITIES_API_KEY: string;
      CITIES_ENDPOINT: string;
    }
  }
}

export {};
