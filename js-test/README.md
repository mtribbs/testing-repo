# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import PostForm from "./components/PostForm";
import "./App.css";

function App() {
const firstRender = useRef(true);

const [subject, setSubject] = useState("");
// const [selectedImage, setSelectedImage] = useState("");
const [caption, setCaption] = useState("");
const [posts, setPosts] = useState([
{
postSubject: subject,
// postImage: selectedImage,
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
// postImage: selectedImage,
postCaption: caption,
id: uuidv4(),
},
]);
};

const removePost = (id) => {
setPosts(posts.filter((post) => post.id !== id));
};

// useEffect(() => {
// localStorage.setItem("Post", JSON.stringify([...posts]));
// }, [posts]);

// useEffect(() => {
// const newPosts = localStorage.getItem("Post");
// setPosts(JSON.parse([...posts, newPosts]));
// }, []);

useEffect(() => {
if (firstRender.current) {
firstRender.current = false;
console.log("true");
} else {
localStorage.setItem("posts", [...posts]);
console.log("not first page load");
}
}, [posts]);

useEffect(() => {
if (localStorage.getItem([...posts], "posts") !== null) {
const newPosts = localStorage.getItem([...posts], "posts");
setPosts([...posts, newPosts]);
}
}, []);

return (

<div className="App">
<div className="form-box">
<PostForm
subject={subject}
setSubject={setSubject}
// selectedImage={selectedImage}
// setSelectedImage={setSelectedImage}
caption={caption}
setCaption={setCaption}
addPost={addPost}
/>
</div>
{posts.map((post) => (
<div key={post.id}>
<h2>{post.postSubject}</h2>
{/_ <img>{post.selectedImage}</img> _/}
<p>{post.postCaption}</p>
<button onClick={() => removePost(post.id)}>Delete post</button>
</div>
))}
</div>
);
}

export default App;

// import React, { useRef } from "react";

const PostForm = ({
subject,
setSubject,
// selectedImage,
// setSelectedImage,
caption,
setCaption,
addPost,
}) => {
// const fileInput = useRef(null);

return (

<form onSubmit={addPost} className="post-form">
<label>Post subject</label>
<input
className="subjectInput"
type="text"
placeholder="Enter post subject..."
value={subject}
onChange={(e) => setSubject(e.target.value)}
/>
{/_ <label>Image</label>
<input
type="file"
ref={fileInput}
value={selectedImage}
onChange={(e) => setSelectedImage(e.target.files[null])}
/> _/}

      <label className="captionLabel">Caption</label>
      <input
        className="captionInput"
        type="text"
        placeholder="Enter caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit" className="postBtn">
        Post
      </button>
    </form>

);
};

export default PostForm;

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
const firstRender = useRef(true);

const [subject, setSubject] = useState("");
const [caption, setCaption] = useState("");
const [posts, setPosts] = useState([]);

const addPost = (e) => {
e.preventDefault();
setPosts([
...posts,
{
postSubject: subject,
postCaption: caption,
id: uuidv4(),
},
]);
setSubject("");
setCaption("");
};

const removePost = (id) => {
setPosts(posts.filter((post) => post.id !== id));
};

useEffect(() => {
if (firstRender.current) {
console.log("true");
firstRender.current = false;
} else {
localStorage.setItem("Post", JSON.stringify([...posts]));
console.log("not first page load");
}
}, [posts]);

useEffect(() => {
if (localStorage.getItem("Post") !== null) {
const newPosts = localStorage.getItem("Post");
setPosts(JSON.parse([...posts, newPosts]));
}
}, []);

return (

<div className="App">
<div className="form-box">
<form onSubmit={addPost} className="post-form">
<label>Post subject</label>
<input
className="subjectInput"
type="text"
placeholder="Enter post subject..."
value={subject}
onChange={(e) => setSubject(e.target.value)}
/>
<label className="captionLabel">Caption</label>
<input
className="captionInput"
type="text"
placeholder="Enter caption..."
value={caption}
onChange={(e) => setCaption(e.target.value)}
/>
<button type="submit" className="postBtn">
Post
</button>
</form>
</div>
{posts.map((post) => (
<div key={post.id}>
<h2>{post.postSubject}</h2>
<p>{post.postCaption}</p>
<button onClick={() => removePost(post.id)}>Delete post</button>
</div>
))}
</div>
);
}

export default App;

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
const firstRender = useRef(true);

const [subject, setSubject] = useState("");
const [caption, setCaption] = useState("");
const [currentPostId, setCurrentPostId] = useState(null);
// const [image, setImage] = useState([]);
const [posts, setPosts] = useState([]);

const clearInputPost = () => {
setSubject("");
setCaption("");
};

const addPost = () => {
setPosts([
...posts,
{
postSubject: subject,
postCaption: caption,
// postImage: image,
id: uuidv4(),
},
]);
clearInputPost();
};

const editPost = (post) => {
setSubject(post.postSubject);
setCaption(post.postCaption);
setCurrentPostId(post.postId);
};

const updatePost = () => {
setPosts(
posts.map((post) =>
post.postId === currentPostId
? { ...posts, postSubject: subject, postCaption: caption }
: post,
),
);
};

const handleSumbit = (e) => {
e.preventDefault();
clearInputPost();
setCurrentPostId(null);
!currentPostId ? addPost() : updatePost();
};

const removePost = (id) => {
setPosts(posts.filter((post) => post.id !== id));
};

useEffect(() => {
if (firstRender.current) {
firstRender.current = false;
} else {
localStorage.setItem("Post", JSON.stringify([...posts]));
}
}, [posts]);

useEffect(() => {
if (localStorage.getItem("Post") !== null) {
const newPosts = localStorage.getItem("Post");
setPosts(JSON.parse([...posts, newPosts]));
}
}, []);

// const uploadHandler = () => {};

return (

<div className="App">
<div className="form-box">
<form onSubmit={handleSumbit} className="post-form">
<label>Post subject</label>
<input
className="subjectInput"
type="text"
placeholder="Enter post subject..."
value={subject}
onChange={(e) => setSubject(e.target.value)}
/>
{/_ <label className="captionLabel">Image</label>
<input type="file" onChange={(e) => setImage(e.target.files[0])} />
<button>Upload</button> _/}
<label className="captionLabel">Caption</label>
<input
className="captionInput"
type="text"
placeholder="Enter caption..."
value={caption}
onChange={(e) => setCaption(e.target.value)}
/>
<button type="submit" className="postBtn">
{currentPostId !== null ? "Update" : "Post"}
</button>
</form>
</div>
{posts.map((post) => (
<div key={post.id}>
<h2>{post.postSubject}</h2>
<img>{post.postImage}</img>
<p>{post.postCaption}</p>
<button onClick={() => removePost(post.id)}>Delete post</button>
<button onClick={() => editPost(post)}>Edit post</button>
</div>
))}
</div>
);
}

export default App;

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
const firstRender = useRef(true);

const [subject, setSubject] = useState("");
const [caption, setCaption] = useState("");
const [currentPostId, setCurrentPostId] = useState(null);
const [selectedImage, setSelectedImage] = useState(null);
const [posts, setPosts] = useState([]);

const clearInputPost = () => {
setSubject("");
setCaption("");
};

const addPost = () => {
setPosts([
...posts,
{
postSubject: subject,
postCaption: caption,
postImage: selectedImage,
id: uuidv4(),
},
]);
clearInputPost();
};

const editPost = (post) => {
setSubject(post.postSubject);
setCaption(post.postCaption);
setSelectedImage(post.postImage);
setCurrentPostId(post.id);
console.log(post);
};

const updatePost = () => {
setPosts([
...posts.filter((x) => x.id !== currentPostId),
{
postSubject: subject,
postCaption: caption,
postImage: selectedImage,
id: currentPostId,
},
]);
};

const handleSumbit = (e) => {
e.preventDefault();
clearInputPost();
setCurrentPostId(null);
!currentPostId ? addPost() : updatePost(currentPostId);
};

const removePost = (id) => {
setPosts(posts.filter((post) => post.id !== id));
};

useEffect(() => {
if (firstRender.current) {
firstRender.current = false;
} else {
localStorage.setItem("Post", JSON.stringify([...posts]));
}
}, [posts]);

useEffect(() => {
if (localStorage.getItem("Post") !== null) {
const newPosts = localStorage.getItem("Post");
setPosts(JSON.parse([...posts, newPosts]));
}
}, []);

return (
<div>
<form onSubmit={handleSumbit}>
<label>Post subject</label>
<input
type="text"
placeholder="Enter post subject..."
value={subject}
onChange={(e) => setSubject(e.target.value)}
/>
<label className="captionLabel">Image</label>
<input
type="file"
onChange={(e) => setSelectedImage(e.target.files[0])}
/>
<button>Upload</button>
<label>Caption</label>
<input
type="text"
placeholder="Enter caption..."
value={caption}
onChange={(e) => setCaption(e.target.value)}
/>
<button type="submit">
{currentPostId !== null ? "Update" : "Post"}
</button>
</form>
{posts.map((post) => (
<div key={post.id}>
<h2>{post.postSubject}</h2>
<img>{post.postImage}</img>
<p>{post.postCaption}</p>
<button onClick={() => removePost(post.id)}>Delete post</button>
<button onClick={() => editPost(post)}>Edit post</button>
</div>
))}
</div>
);
}

export default App;
