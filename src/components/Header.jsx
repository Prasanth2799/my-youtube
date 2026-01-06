import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../store/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHamburger = () => {
    dispatch(toggleSideBar())
  }
  return (
    <div className="flex justify-between p-2 items-center mx-2">
        <div className="flex items-center">
            <RxHamburgerMenu size={25} onClick={() => toggleHamburger()} className="cursor-pointer"/>
            <img alt="youtube-logo" className="h-20 ml-2" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"/>
        </div>
        <div className="flex">
            <input className="border border-black w-72 h-8 rounded-l-2xl p-1"/>
            <CiSearch size={32} className="border border-black rounded-r-2xl p-1"/>
        </div>
        <div className="">
            <CgProfile size={30}/>
        </div>
    </div>
  )
}

export default Header