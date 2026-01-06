import Button from "./Button"

const ButtonList = () => {
  const Buttons_List = [
    {buttonId : 1, name : "All"}, 
    {buttonId : 2, name : "Coding"},
    {buttonId : 3, name : "Gaming"},
    {buttonId : 4, name : "New Releases"}
]
  return (
    <div className="flex flex-wrap">
        {Buttons_List.map((button) => (
            <Button key={button.buttonId} buttonInfo={button.name}/>
        ))}
    </div>
)
}

export default ButtonList;