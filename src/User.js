import{useState, useEffect} from 'react'
import './User.css'

function User({user, onLogout}){
    const [pets, setPets] = useState([])
console.log('user component')
    useEffect(() => {
       fetch('/pets')
       .then(resp => resp.json())
       .then(data => setPets(data))
    }, [])


    function handleClick(){
        fetch('/logout', { method: 'DELETE' })
        .then(resp => {
            if (resp.ok){
                onLogout(null)
            }
        })
    }

    return (
        <div className="container">
        <p>Hello {user.user_name}</p>
        <button className="button" onClick={handleClick}>Logout</button>
        <p>{pets.greeting}</p>
        <img className="pet-container" src="https://i.imgur.com/1wfdSmO.gif"/>
        <img className="pet-container" src="https://i.imgur.com/1wfdSmO.gif"/>
        <img className="pet-container" src="https://i.imgur.com/1wfdSmO.gif"/>
        
        </div>
    )
}

export default User;