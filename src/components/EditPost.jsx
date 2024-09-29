import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


export default function EditPost({ posts, setPosts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === parseInt(id));
    const [content, setContent] = useState(post.content);
  
    const savePost = () => {
      const updatedPosts = posts.map((p) =>
        p.id === post.id ? { ...p, content } : p
      );
      setPosts(updatedPosts);
      navigate('/posts');
    };
  return (
    <div>
      <h2>Edit Post</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={savePost}>Guardar</button>
    </div>
  )
}
