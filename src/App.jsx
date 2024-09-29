
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Auth from './components/Auth';
import Posts from './components/Posts';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const login = (username) => {
    setUser(username);
    
  };

  const logout = () => {
    setUser(null);
  };
 

  return (
    <>
     <Router>
      <div className="App">
        
        <NavBar user={user} logout={logout} />

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth login={login} />} />
          <Route path="/posts" element={user ? <Posts posts={posts} setPosts={setPosts} user={user} /> : <Auth login={login} />} />
          <Route path="/edit/:id" element={user ? <EditPost posts={posts} setPosts={setPosts} /> : <Auth login={login} />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
