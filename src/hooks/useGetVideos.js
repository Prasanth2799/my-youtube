import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constants";

export const useGetVideos = () => {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        getVideos();
    },[])
    const getVideos = async () => {
        try{
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setVideos(json)
            
        }catch(err){
            console.log(err)
        }
    }
    return videos;
}