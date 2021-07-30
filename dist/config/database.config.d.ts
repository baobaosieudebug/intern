export declare const databaseConfigSchema: {
    DATABASE_HOST: any;
    DATABASE_PORT: any;
    DATABASE_TYPE: any;
    DATABASE_USERNAME: any;
    DATABASE_PASSWORD: any;
    DATABASE_DB: any;
    DATABASE_LOGGING: any;
};
export declare function databaseConfig(): {
    db: {
        host: string;
        port: number;
        type: string;
        username: string;
        password: string;
        database: string;
        logging: boolean;
    };
};
