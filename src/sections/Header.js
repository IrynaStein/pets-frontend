import '../sections/Header.css'

export default function Header(){
    return(
        <div className='header-container'>
        <div className="dropdown" style={{float:"right"}}>
            <div className='menu'>&#9776;</div>
            <div class="dropdown-content">
    <a href="#">Game rules</a>
    <a href="#">Visit Cemetery</a>
    <a href="#">Logout</a>
  </div>
            </div>
        </div>
    )
}

