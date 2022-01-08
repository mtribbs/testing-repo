import { useState } from "react";
import PostForm from "./components/PostForm";
import Feed from "./components/Feed";
import "./App.css";

function App() {
  const [subject, setSubject] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([
    {
      postSubject: "Subject",
      postCaption: "Caption",
    },
  ]);

  const addPost = () => {
    setPosts([
      ...posts,
      {
        postSubject: subject,
        postCaption: caption,
      },
    ]);
  };

  const handleSubmit = (e) => {
    addPost();
  };

  return (
    <div className="App">
      <PostForm
        subject={subject}
        setSubject={setSubject}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        caption={caption}
        setCaption={setCaption}
        handleSubmit={handleSubmit}
      />
      <Feed />
    </div>
  );
}

export default App;
