import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/navbar/Navbar";

export function AppPage() {
  return (
    <div className="contents">
      <Navbar />
      <div className="view">
        <Outlet />
      </div>
    </div>
  );
}
