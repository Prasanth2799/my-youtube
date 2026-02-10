import { Link } from "react-router";
import { useGetVideos } from "../hooks/useGetVideos"
import VideoCard, { withMostLikedLabel } from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
    const {ytVideos, showShimmer} = useGetVideos()
    const MostLikedVideoCard = withMostLikedLabel(VideoCard);
    if(showShimmer) return <Shimmer />
  return (
    <div className="flex flex-wrap">
      {ytVideos?.map((video,index) => {
        const likes = video?.statistics?.likeCount;
        return(
          <Link key={video?.id+Math.random()} to={"watch?v="+video?.id}>
            {likes > 50000 ? (<MostLikedVideoCard videoInfo={video} />) : (<VideoCard videoInfo={video}/>)}
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer