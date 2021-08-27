import '../sections/PetContainer.css'
import Pet from '../Pet'

export default function PetsContainer({pets}){
    console.log(pets)

    const renderPets = pets.map((pet) => (
    <Pet key={pet.id} pet={pet}/>))
    
    return (
        <div className='pet-container'>
            {renderPets}
        {/* <Pet/> */}
        {/* <img className="pet-window" src="https://live.staticflickr.com/65535/51406402486_950e578835_c.jpg"/>
        <img className="pet-window" src="https://live.staticflickr.com/65535/51406402486_950e578835_c.jpg"/> */}
        </div>
    )
}