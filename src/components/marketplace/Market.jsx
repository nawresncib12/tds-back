import classes from "./Market.module.css";
import ShopList from "./ShopList";
const Market = () => {
  return (
    <div className={classes.market}>
      <h1>Our market</h1>
      <ShopList></ShopList>
    </div>
  );
};

export default Market;
