import { useState } from "react";


export default function Auth({ login }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };
  return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  )
}
