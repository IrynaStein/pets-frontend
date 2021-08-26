import{useState, useEffect} from 'react'

function User({user, onLogout}){
    const [pets, setPets] = useState([])

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
        <div>
        <p>Hello {user.user_name}</p>
        <button onClick={handleClick}>Logout</button>
        <p>{pets.greeting}</p>
        </div>
    )
}

export default User;