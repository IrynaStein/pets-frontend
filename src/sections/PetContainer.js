export default function PetsContainer({pets}){
    console.log(pets)
    return (
        <div className='pet-container'>
        <img className="pet-window" src='https://i.imgur.com/HEZ30TE.gif' />
        <img className="pet-window" src="https://i.imgur.com/1wfdSmO.gif"/>
        <img className="pet-window" src="https://i.imgur.com/1wfdSmO.gif"/>
        </div>
    )
}