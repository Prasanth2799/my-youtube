import Comment from "./Comment"
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
    const CommentsList = ({comments}) => {
        return comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment}/>
                <div className="border ml-5 pl-5 my-1">
                    <CommentsList comments={comment.replies} />
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