import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router'
import { closeSideBar } from '../store/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  useEffect(() => {
    dispatch(closeSideBar())
  }, [])

  return (
    <div className="flex flex-col">
      <iframe
       width="560" height="315"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage