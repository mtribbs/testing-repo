import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
  const firstRender = useRef(true);

  const [subject, setSubject] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([
    {
      postSubject: subject,
      postImage: selectedImage,
      postCaption: caption,
      id: uuidv4(),
    },
  ]);

  const addPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        postSubject: subject,
        postImage: selectedImage,
        postCaption: caption,
        id: uuidv4(),
      },
    ]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // useEffect(() => {
  //   localStorage.setItem("Post", JSON.stringify([...posts]));
  // }, [posts]);

  // useEffect(() => {
  //   const newPosts = localStorage.getItem("Post");
  //   setPosts(JSON.parse([...posts, newPosts]));
  // }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("posts", [...posts]);
    }
  }, [posts]);

  useEffect(() => {
    if (localStorage.getItem(posts, "posts") !== null) {
      const newPosts = localStorage.getItem([...posts], "posts");
      setPosts(JSON.parse([...posts, newPosts]));
    }
  }, []);

  return (
    <div className="App">
      <div className="form-box">
        <PostForm
          subject={subject}
          setSubject={setSubject}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          caption={caption}
          setCaption={setCaption}
          addPost={addPost}
        />
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.postSubject}</h2>
          <img>{post.selectedImage}</img>
          <p>{post.postCaption}</p>
          <button onClick={() => removePost(post.id)}>Delete post</button>
        </div>
      ))}
    </div>
  );
}

export default App;
