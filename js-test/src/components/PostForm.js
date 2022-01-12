import React, { useRef } from "react";

const PostForm = ({
  subject,
  setSubject,
  selectedImage,
  setSelectedImage,
  caption,
  setCaption,
  addPost,
}) => {
  const fileInput = useRef(null);

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
      <label>Image</label>
      <input
        type="file"
        ref={fileInput}
        value={selectedImage}
        onChange={(e) => setSelectedImage(e.target.files[null])}
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
  );
};

export default PostForm;
