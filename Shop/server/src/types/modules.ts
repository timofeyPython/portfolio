export interface IAppOptions {
  port: number;
  middleware?: Array<() => void>;
}

export interface ILogWriteOptions {
  message: string;
  router: string;
  method?: string;
}

export interface IServiceLogWriteOptions extends ILogWriteOptions {}