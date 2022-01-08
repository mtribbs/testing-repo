import { useRef } from "react";

const ImageUploader = (onFileSelect) => {
  const handleImageInput = useRef(null);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
  };

  return (
    <div className="img-uploader">
      <input type="file" onChange={handleImageInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="img-btn"
      ></button>
    </div>
  );
};

//if (file.size > 1024) {
//    onFileSelectError({ error: "Image size cannot exceed more than 1MB" });
//} else onFileSelectSuccess(file);
