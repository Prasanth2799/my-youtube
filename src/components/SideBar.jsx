import { useSelector } from "react-redux"
import { Link } from "react-router"

const SideBar = () => {
  const isMenuBar = useSelector(store => store.app?.isMenuOpen)
  return (!isMenuBar) ? null : (
    <div className="h-screen bg-gray-200 w-48 m-1 shadow-lg">
        <ul>
            <Link to="/"><li>Home</li></Link>
        </ul>
    </div>
  )
}

export default SideBar