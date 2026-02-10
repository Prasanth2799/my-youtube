import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constants";

export const useGetVideos = () => {
    const [ytVideos, setYtVideos] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);
    useEffect(() => {
        getVideos();

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    const handleScroll = () => {
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            getVideos()
        }
    }
    const getVideos = async () => {
        try{
            setShowShimmer(true)
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setShowShimmer(false)
            setYtVideos((videos) => [...videos, ...json.items])
            
        }catch(err){
            console.error(err)
        }
    }
    return {ytVideos, showShimmer};
}