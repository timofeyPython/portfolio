import { EDBNameTable } from "@lib/types/enum";
import { Users } from "./user.model";

export const userProviders = [
  {
    provide: EDBNameTable.USERS_TABLE,
    useValue: Users,
  },
];
