
import React from "react";
import './../styles/App.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
    } else {
      setErrorMessage('');
      // handle login logic here
    }
  };
  
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div id="errorMessage" className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
    </div>
  )
}

export default App
