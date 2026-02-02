import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const Header = () => {
  const[searchQuery, setSearchQuery] = useState("");
  const[suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleHamburger = () => {
    dispatch(toggleSideBar())
  }
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        console.log("CACHE "+ searchQuery)
        setSuggestions(searchCache[searchQuery])
      }else{
        fetchSearchResults()
      }
    }
      
      , 200);
    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])
  const fetchSearchResults = async () => {
    try{
      const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json = await data.json();
      setSuggestions(json[1])
      dispatch(cacheResults({
        [searchQuery] : json[1]
      }))
    }catch(err){
      console.error(err)
    }
  }
  if(!suggestions) return;
  return (
    <div className="flex justify-between p-2 items-center mx-2">
        <div className="flex items-center">
            <RxHamburgerMenu size={25} onClick={() => toggleHamburger()} className="cursor-pointer"/>
            <img alt="youtube-logo" className="h-20 ml-2" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"/>
        </div>
        <div>
          <div className="flex">
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border border-black w-96 h-8 rounded-l-2xl p-1"/>
            <CiSearch size={32} className="border border-black rounded-r-2xl p-1"/>
          </div>
          {suggestions.length > 0 && (
            <div className="fixed bg-white shadow-lg w-96 rounded p-3 my-1 z-20">
             <ul>
              {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-center gap-2">
                <CiSearch size={15}/>
                {suggestion}
              </li>
              ))}
             </ul>
            </div>
          )}
             
        </div>
        <div className="">
            <CgProfile size={30}/>
        </div>
    </div>
  )
}

export default Header