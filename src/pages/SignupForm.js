import { useState } from 'react'
import { Link } from 'react-router-dom'

function SignupForm({onLogin}){
  const defaultForm = {
    username: "",
    password: "",
    pass_conf: "",
    email: ""
  }
  const [formData, setFormdData] = useState(defaultForm)

  function handleChange(e){
    console.log(e.target.value)
    setFormdData({...formData, [e.target.name]: e.target.value})
  }
    
  function handleSubmit(e){
    e.preventDefault()
    const configObg = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: formData.username,
        password: formData.password,
        password_confirmation: formData.pass_conf,
        email: formData.email
      })
    }
    fetch('/signup', configObg)
    .then(resp=> resp.json())
    .then(data=> console.log(data))
  }
    return (
        <div className="App">
          <Link to='login'><button className="button">&#8592;Back to Login</button></Link>
      <form className="centered-form" onSubmit={handleSubmit}>
      <input className="input-field" name="username" value={formData.user_name} onChange={(e)=>handleChange(e)} placeholder="user name..."></input>
      <br/>
      <input className="input-field" name="password" value={formData.password} onChange={(e)=>handleChange(e)} placeholder="password..."></input>
      <br/>
      <input className="input-field" name="pass_conf" value={formData.pass_conf} onChange={(e)=>handleChange(e)} placeholder="confirm password..."></input>
      <br/>
      <input className="input-field" name="email" value={formData.email} onChange={(e)=>handleChange(e)} placeholder="email..."></input>
      <br/>
      <button className="button" type="submit">Signup</button>
      </form>
      
    </div>
    )
}
export default SignupForm;