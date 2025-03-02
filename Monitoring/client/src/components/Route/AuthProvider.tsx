import { useAppDispatch } from "@store/hooks";
import { updateAuth, updateInfo } from "@store/user/actions";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(updateAuth());
    disptach(updateInfo());
  }, [disptach]);

  return children;
}
