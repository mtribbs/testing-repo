import { useRef } from "react";

const ImageUploader = () => {
  const fileInput = useRef(null);

  return (
    <div>
      <input
        ref={fileInput}
        type="file"
        onChange={(e) => e.target.value[null]}
      />
    </div>
  );
};

export default ImageUploader;
