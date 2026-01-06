import { useSelector } from "react-redux"

const SideBar = () => {
  const isMenuBar = useSelector(store => store.app?.isMenuOpen)
  return (!isMenuBar) ? null : (
    <div className="h-screen bg-gray-50 w-52 m-1 shadow-lg">
        <ul>
            <li>Hello</li>
        </ul>
    </div>
  )
}

export default SideBar