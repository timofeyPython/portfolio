export interface IUserTemplate {
  id: string;
  name: string;
}

export interface TLdapInfo {
  samaccountname: string;
  displayname: string;
  company: string;
  mail: string;
  department: string;
  title: string;
  telephoneNumber: string;
}

export interface IRestAPI {
  findAll(arg1: unknown, arg2: unknown): void;
  findOne(args: unknown): void;
  create(arg1: unknown, arg2: unknown): void;
  update(args: unknown): void;
  delete(args: unknown): void;
}

export interface IReqUser {
  id: string;
  login: string;
  grId: string;
  rights: Array<string>;
}
