import { Link } from "react-router";
import { useGetVideos } from "../hooks/useGetVideos"
import VideoCard, { withMostLikedLabel } from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
    const ytVideos = useGetVideos()
    const MostLikedVideoCard = withMostLikedLabel(VideoCard);
    if(!ytVideos) return <Shimmer />;
  return (
    <div className="flex flex-wrap">
      {ytVideos?.items?.map((video) => {
        const likes = video?.statistics?.likeCount;
        return(
          <Link key={video?.id} to={"watch?v="+video?.id}>
            {likes > 50000 ? (<MostLikedVideoCard videoInfo={video} />) : (<VideoCard videoInfo={video}/>)}
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer