import { Outlet } from "react-router"
import SideBar from "./SideBar"

const Body = () => {
  return (
    <div className="flex">
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body