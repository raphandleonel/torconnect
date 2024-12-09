declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_BASE_URL: string;

    // Mailing Credentials
    readonly NEXT_SMTP_HOST: string;
    readonly NEXT_SMTP_PORT: string;
    readonly NEXT_SMTP_USER: string;
    readonly NEXT_SMTP_PASS: string;
    readonly NEXT_SMTP_RECIPIENT: string;
  }
}
