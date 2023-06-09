import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Both username and password are required");
      return;
    }
    // Handle login logic here
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      <br />
        <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <br />
        <br />
      {errorMessage && <div id="errorMessage">{errorMessage}</div>}
<br />
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
