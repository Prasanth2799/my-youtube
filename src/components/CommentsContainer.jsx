import { CgProfile } from "react-icons/cg"
const commentsData = [
        {
            name : "Prasanth",
            comment : "This is the comment",
            replies : [
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                },
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                },
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                },
                    ]
                },
                        
                    ]
                },
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                },
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                }
            ]
        },
        {
            name : "Prasanth",
            comment : "This is the comment",
            replies : [
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                },
                {
                    name : "Prasanth",
                    comment : "This is nested comment",
                    replies : [
                        
                    ]
                }                
            ]
        },
        {
            name : "Prasanth",
            comment : "This is the comment",
            replies : [                
            ]
        }
    ]
    const Comment = ({data}) => {
        const {name, comment} = data
        return(
            <div className="flex gap-4 items-center bg-gray-200 rounded shadow p-2">
                <>
                <CgProfile size={30}/>
                </>
                <div>
                    <p>{name}</p>
                    <p>{comment}</p>
                </div>
            </div>
        )
    }
    const CommentsList = ({comments}) => {
        return comments.map((comment, index) => (
            <div>
                <Comment key={index} data={comment}/>
                <div className="border ml-5 pl-5 my-1">
                    <CommentsList key={index} comments={comment.replies} />
                </div>
            </div>
        ))
    }
const CommentsContainer = () => {
    return(
        <div className="p-2 m-5">
            <span className="font-bold">Comments:</span>
            <CommentsList comments={commentsData}/>
        </div>
    )
}
export default CommentsContainer;