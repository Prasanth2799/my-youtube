import { useEffect } from "react"
import Comment from "./Comment"
import { useDispatch, useSelector } from "react-redux"
import {addMessage} from "../store/chatSlice";
const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
    const poll = setInterval(() => {
        dispatch(
            addMessage({
                name : "Prasanth",
                comment : "This is the live chat",
                replies : []
            })
        )
    }, 2000)
    return () => {
        clearInterval(poll)
    }
},[])
  return (
    <div className="border border-black p-2 min-h-100 w-100 rounded overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((liveChat) => (
            <Comment key={liveChat?.id} data={liveChat}/>
        ))}
    </div>
  )
}

export default LiveChat