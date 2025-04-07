import { EDBNameTable } from "@lib/types/enum";
import { RightsUsers } from "./rights-user.model";

export const rightsUsersProvider = [
  {
    provide: EDBNameTable.RIGHTS_USERS_TABLE,
    useValue: RightsUsers,
  },
];
