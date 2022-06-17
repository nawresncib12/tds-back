import { useEffect } from "react";
import classes from "./customCursor.module.css";
import { useRef } from "react";
const CustomCursor = () => {
  //follows the cursor
  const customRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX,clientY,screenX, screenY } = e;
      const mouseX = clientX - customRef.current.clientWidth / 2;
      const mouseY = clientY - customRef.current.clientHeight /2;
      console.log(e);
      customRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px)`;
      console.log(customRef.current.style.transform);
    };
    // add the event listener
    window.addEventListener("mousemove", onMouseMove);
    // cleanup function
    return () => {
      // remove the event listener when the component unmounts
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className={classes.appCursor} ref={customRef} />;
};

export default CustomCursor;
