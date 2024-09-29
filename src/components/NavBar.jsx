import { Link } from "react-router-dom";


export default function NavBar({ user, logout }) {
  return (
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      {user ? (
        <>
          <li><Link to="/posts">Posts</Link></li>
          <li><button onClick={logout}>Logout</button></li>
        </>
      ) : (
        <li><Link to="/auth">Login</Link></li>
      )}
    </ul>
  </nav>
  )
}
