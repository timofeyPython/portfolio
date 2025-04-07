import { IRightsUser } from "@/components/forms/Group/types/types";
import { EApiPath } from "@/types/apiPath.enum";
import { clientAPI } from "@services/utils/clientApi";

export const getRightsGroups = clientAPI<IRightsUser[]>({
  method: "GET",
  path: EApiPath.RIGHTS_GROUPS,
});
