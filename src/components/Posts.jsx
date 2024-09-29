import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Posts({ posts, setPosts, user }) {
    const [newPost, setNewPost] = useState('');

    const addPost = () => {
      const post = {
        id: posts.length + 1,
        user,
        content: newPost,
      };
      setPosts([...posts, post]);
      setNewPost('');
    };
  
    const deletePost = (id) => {
      setPosts(posts.filter((post) => post.id !== id));
    };
  return (
 <div>
    <h2>Posts de {user}</h2>
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`}>Editar</Link>
          <button onClick={() => deletePost(post.id)}>Eliminar</button>
        </div>
      ))}
    </div>
    <div>
      <h3>Crear nuevo post</h3>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <button onClick={addPost}>Añadir</button>
    </div>
 </div>
  )
}


