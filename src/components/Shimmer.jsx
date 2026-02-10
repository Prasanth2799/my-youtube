const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(50).fill("").map((data,index) => <div key={index} className="m-2 bg-gray-100 shadow-lg p-2 w-72 h-[320px]  rounded"></div>)}
    </div>
  )
}

export default Shimmer