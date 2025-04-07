import { EDBNameTable } from "@src/lib/types/enum";
import { RightsGroups } from "./rights-group.model";

export const rightsGroupProvider = [
  {
    provide: EDBNameTable.RIGHTS_GROUPS_TABLE,
    useValue: RightsGroups,
  },
];
