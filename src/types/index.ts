export interface SwaggerConfig {
  swaggerFile?: string;
  swaggerUrl?: string;
  apiBaseUrl: string;
  auth?: AuthConfig;
}

export interface ServerConfig {
  port: number;
  username?: string;
  password?: string;
  token?: string;
}

export interface AuthConfig {
  type: 'basic' | 'bearer' | 'apiKey' | 'oauth2';
  username?: string;
  password?: string;
  token?: string;
  apiKey?: string;
  apiKeyName?: string;
  apiKeyIn?: 'header' | 'query';
}

export interface SecurityScheme {
  type: string;
  description?: string;
  name?: string;
  in?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: any;
} 

export interface ToolInput {
  auth?: AuthConfig;
  [key: string]: any;
}