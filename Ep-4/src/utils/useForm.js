import { useState } from "react";

const useForm = function (initialData) {
  const [input, setInput] = useState(initialData);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetForm = () => {
    setInput(initialData);
  };

  return { input, handlerChange, resetForm };
};

export default useForm;
