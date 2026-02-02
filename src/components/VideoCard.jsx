const VideoCard = ({videoInfo}) => {
  const {snippet, statistics} = videoInfo;
  const{title, channelTitle, thumbnails} = snippet;
  const{likeCount} = statistics
  return (
    <div className="m-2 bg-white shadow-lg p-2 w-72 min-h-80  rounded">
        <div>
            <img src={thumbnails?.medium?.url} className="rounded object-cover w-full" alt="youtube-thumbnail"/>
        </div>
        <ul>
            <li className="font-semibold">{title}</li>
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
        <span className="bg-blue-500 px-2 text-sm z-10 top-1 left-1 text-white rounded">MOST LIKED</span>
        <VideoCard {...props}/>
      </div>
    )
  }
}


