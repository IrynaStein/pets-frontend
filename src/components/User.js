import './User.css'
import { useSelector } from 'react-redux'


export default function User(){
    const user = useSelector(state => state.user.user)
    console.log(user)
    const {user_name, email, avatar} = user
    return (
        <div className="user-container">
            <img className="user-avatar" src={avatar} alt="user"/>
            <p>Hello {user_name} {email}!</p>
            
            <p>You can create or edit your profile here. You can also edit your pets or </p>
            <button>Edit profile</button>
            <button>Delete profile</button>
           
        </div>
    )
}