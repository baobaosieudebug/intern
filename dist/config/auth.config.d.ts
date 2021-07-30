export declare const authConfigSchema: {
    AUTH_PWD_PEPPER: any;
    JWT_ACCESS_SECRET_KEY: any;
    JWT_ACCESS_KEY_LIFE_TIME: any;
};
export declare function authConfig(): {
    auth: {
        pwd: {
            pepper: string;
        };
        jwt: {
            accessSecretKey: string;
            accessKeyLifeTime: string;
        };
    };
};
