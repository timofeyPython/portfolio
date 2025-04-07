import { EDBNameTable } from "@lib/types/enum";
import { GroupConf } from "./group-conf.model";

export const groupConfProviders = [
  {
    provide: EDBNameTable.GROUP_CONF_TABLE,
    useValue: GroupConf,
  },
];
