import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout({ admin }) {
  return admin ? (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  ) : null;
}
