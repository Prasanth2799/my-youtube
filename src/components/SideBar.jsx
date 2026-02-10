import { useSelector } from "react-redux"
import { Link } from "react-router"
const SideBar = () => {
  const isMenuBar = useSelector(store => store.app?.isMenuOpen)
  return (!isMenuBar) ? null : (
    <div className="h-screen bg-gray-200 w-48 m-1 shadow-lg">
        <ul className="mx-4 my-5">
            <Link to="/"><li>Home</li></Link>
            <li>Liked Videos</li>
            <li>Watch Later</li>
            <li>Saved Videos</li>
            <li>Most Watched Videos</li>
        </ul>
    </div>
  )
}

export default SideBar