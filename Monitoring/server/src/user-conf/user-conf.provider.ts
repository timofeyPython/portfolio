import { EDBNameTable } from "@lib/types/enum";
import { UsersConf } from "./user-conf.model";

export const userConfProviders = [
  {
    provide: EDBNameTable.USER_CONF_TABLE,
    useValue: UsersConf,
  },
];
