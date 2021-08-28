import '../sections/PetContainer.css'
import Pet from '../Pet'

export default function PetsContainer({pets}){
    console.log(pets)

    const renderPets = pets.map((pet) => (
    <Pet key={pet.id} pet={pet}/>))

    return (
        <div className='pet-container'>
            {renderPets}
        </div>
    )
}