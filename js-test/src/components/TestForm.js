import { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFileSlected, setIsFileSelected] = useState(false);

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFileSelected(true);
  };

  const handleSubmit = () => {};

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
