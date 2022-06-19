import classes from "./Market.module.css";
import ShopList from "./ShopList";
import { useRef,useEffect } from "react";
const Market = ({setScroll,scroll}) => {
  const marketP = useRef(null);
  const executeScroll = () =>
    marketP.current.scrollIntoView({ behavior: "smooth", block: "center" });
    useEffect(() => {
      if (scroll) {
        executeScroll();
        setScroll(false);
      }
    }, [scroll, setScroll]);
  return (
    <div className={classes.market}  ref={marketP}>
      <h1>Our market</h1>
      <ShopList></ShopList>
    </div>
  );
};

export default Market;
