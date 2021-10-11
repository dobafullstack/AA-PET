declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_SECRET_JWT: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}

export {};