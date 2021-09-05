import './User.css'
import { useSelector } from 'react-redux'


export default function User(){
    const user = useSelector(state => state.user.user)
    const {user_name, email, avatar} = user
    const deleteUserHandler = () => {
        console.log(user.id)
    }
    return (
        <div className="user-container">
            <button>Edit profile</button>
            <button onClick={deleteUserHandler}> Delete profile</button>
            <img className="user-avatar" src={avatar} alt="user"/>
            <p>Hello {user_name} {email}!</p>
            
            <p>You can create or edit your profile here. Below is the list of pets you own. You can also create up to 3 pets if you dont have any yet. Good luck!!! </p>
           
           
        </div>
    )
}