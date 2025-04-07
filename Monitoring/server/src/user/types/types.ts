// interface ISession {
//   id: string;
//   login: string;
//   grId: string;
//   info: any;
//   rights?: Array<string>;
// }

// declare module "express-session" {
//   interface SessionData {
//     user: ISession;
//   }
// }

export interface IGetHtmlMessage {
  title: string;
  userName: string;
  userName1: string;
  description: string;
  date1: Date;
  date2: Date;
  groupName: string;
}
