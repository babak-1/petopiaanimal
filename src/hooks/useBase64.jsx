import { useState } from "react";

const useBase64 = () => {
  const [base64Array, setBase64Array] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const newBase64Array = base64Array;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newBase64Array.push(reader.result);
        setBase64Array([...newBase64Array]);
      };
    }
  };

  return {
    base64Array,
    handleFileSelect,
  };
};

export default useBase64;
