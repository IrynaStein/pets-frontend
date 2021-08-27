import '../sections/PetContainer.css'
import Pet from '../Pet'

export default function PetsContainer({pets}){
    console.log(pets)

    {/* map function for mapping pets*/}
    return (
        <div className='pet-container'>
        <Pet/>
        <img className="pet-window" src="https://live.staticflickr.com/65535/51406402486_950e578835_c.jpg"/>
        <img className="pet-window" src="https://live.staticflickr.com/65535/51406402486_950e578835_c.jpg"/>
        </div>
    )
}