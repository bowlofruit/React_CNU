import {useEffect} from "react";

const useTitle = (title) => {
    useEffect(() => document.title = title, [title]);

    return {
        setTitle: newTitle => document.title = newTitle
    };
}

export default useTitle;
