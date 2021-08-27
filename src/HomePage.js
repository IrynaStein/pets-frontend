import{useState, useEffect} from 'react'
import Header from './sections/Header'
import './HomePage.css'
import User from './sections/User'
import PetsContainer from './sections/PetContainer'

export default function UserContainer({user, onLogout}){
    const [pets, setPets] = useState([])
console.log('user component')
    useEffect(() => {
       fetch('/pets')
       .then(resp => resp.json())
       .then(data => setPets(data))
    }, [])


    function handleLogout(){
        fetch('/logout', { method: 'DELETE' })
        .then(resp => {
            if (resp.ok){
                onLogout(null)
            }
        })
    }

    return (
        <div className="container">
            <Header handleLogout={handleLogout}/>
            <User user={user}/>
            <PetsContainer pets={pets}/>
        <p>{pets.greeting}</p>
        
        
        </div>
    )
}

