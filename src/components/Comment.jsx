import { CgProfile } from "react-icons/cg"

const Comment = ({data}) => {
        const {name, comment} = data
        return(
            <div className="flex gap-4 items-center my-1 bg-gray-200 rounded shadow p-2">
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
export default Comment;