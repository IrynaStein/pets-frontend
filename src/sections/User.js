import '../sections/User.css'

export default function User({user}){
    console.log(user)
    const {user_name, email, avatar} = user
    return (
        <div className="user-container">
            <img className="user-avatar" src={avatar}/>
            <p>Hello {user_name} !</p>
            
            <p>You can create or edit your profile here. You can also edit your pets or </p>
            <button>Edit profile</button>
            <button>Delete profile</button>
        </div>
    )
}