import { EDBNameTable } from "@lib/types/enum";
import { Groups } from "./groups.model";

export const groupsProvider = [
  {
    provide: EDBNameTable.GROUPS_TABLE,
    useValue: Groups,
  },
];
