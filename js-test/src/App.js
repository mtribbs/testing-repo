import { useState, useEffect, useRef } from "react";
import PostForm from "./components/PostForm";
import BioForm from "./components/BioForm";
import "./App.css";

function App() {

  const firstRender = useRef(true);

  const [subject, setSubject] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([
    {
      postSubject: "Subject",
      postImage: "Image",
      postCaption: "Caption",
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
      },
    ]);
  };




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
    </div>
  );
}

export default App;
