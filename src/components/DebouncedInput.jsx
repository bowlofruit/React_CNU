import {useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce.js";
import useTitle from "../hooks/useTitle.js";

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState("");
  const {setTitle} = useTitle("Viktor's page");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setTitle(e.target.value);
  };

  const debouncedValue = useDebounce(inputValue, 2000);

  useEffect(() => {
    console.log(
      "Just for checking. This console must run after 2 seconds of inactivity"
    );
  }, [debouncedValue]);

  return (
    <>
      <h1 className="text-3xl font-bold">Debounced Input</h1>
      <input
        value={inputValue}
        onChange={handleChange}
        className="p-4 rounded-lg border border-red-300 focus:outline-red-500"
      />
      <h3>
        Debounced means that value should update only after the delay - 2s in
        our case, but you can set any
      </h3>
    </>
  );
};

export default DebouncedInput;
