import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Tourist`;
  }, [title]);
};

export default UseTitle;
