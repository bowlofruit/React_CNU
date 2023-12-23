import {useEffect, useState} from "react";

const useDebounce = (inputValue, timeout) => {
    const [value, setValue] = useState('');

    useEffect(() => {
       const timerId = setTimeout(() => setValue(inputValue), timeout);
       return () => {
           clearTimeout(timerId);
       }
    }, [inputValue, timeout]);

    return value;
}

export default useDebounce;
