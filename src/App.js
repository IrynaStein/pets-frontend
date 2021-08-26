import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Petz</h1>
      <form>
      <input className="login-input" placeholder="user name..."></input>
      <br/>
      <input className="login-input" placeholder="password..."></input>
      <br/>
      <button>Login</button>
      <button>Signup</button>
      </form>
    </div>
  );
}

export default App;
