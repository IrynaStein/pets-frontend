import{useState, useEffect} from 'react'
import Header from './sections/Header'
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
            <Header/>
        <h1>Hello {user.user_name} !</h1>
      
        <button className="button" onClick={handleClick}>Logout</button>
        <p>{pets.greeting}</p>
        <div className='pet-container'>
        <img className="pet-window" src='https://i.imgur.com/HEZ30TE.gif' />
        <img className="pet-window" src="https://i.imgur.com/1wfdSmO.gif"/>
        <img className="pet-window" src="https://i.imgur.com/1wfdSmO.gif"/>
        </div>
        
        </div>
    )
}

export default User;