const VideoCard = ({videoInfo}) => {
  const {snippet, statistics} = videoInfo;
  const{title, channelTitle, thumbnails} = snippet;
  const{likeCount} = statistics
  return (
    <div className="m-2 bg-white shadow-lg p-2 w-72 min-h-[300px]  rounded">
        <div>
            <img src={thumbnails?.medium?.url} className="rounded object-cover w-full" alt="youtube-thumbnail"/>
        </div>
        <ul>
            <li className="font-semibold my-1">{title}</li>
            <li className="text-sm line-clamp-2">{channelTitle}</li>
        </ul>
    </div>
  )
}
export default VideoCard

export const withMostLikedLabel = (VideoCard) => {
  return (props) => {
    return(
      <div className="relative">
        <span className="absolute bg-red-400 px-2 py-1 text-sm z-10 top-1 left-1 text-white rounded">MOST LIKED</span>
        <VideoCard {...props}/>
      </div>
    )
  }
}


