import classes from "./Item.module.css";
import Oranges from "../../assets/orange.png";
import Dates from "../../assets/dates.png";
import Lemons from "../../assets/Lemons.png";
import Olives from "../../assets/olives.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { cartActions } from "../../store/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
const Item = ({ item }) => {
  const images = { Oranges, Dates, Lemons, Olives };
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemExist = items.find((it) => it.id === item.id);
  const [see,setSee]=useState(false);
  const handleAdd = () => {
    dispatch(cartActions.addItemToCart(item));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  return (
    <div className={classes.shopItem}>
      {see && <ItemDetail image={images[item.name]} item={item} setSee={setSee}></ItemDetail>}
      <img src={images[item.name]} alt="fruit" />
      <div className={classes.info}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>
          <p>1Kg x</p> {item.price} DT
        </h4>
        {!itemExist && (
          <div className={classes.button}>
            <button
              className={classes.buy}
              onClick={() => {
                handleAdd();
              }}
            >
              Add to cart
            </button>
            <button
              className={classes.see}
              onClick={()=>{setSee(true)}}
            >
              See details
            </button>
          </div>
        )}
        {itemExist && (
          <div className={classes.actions}>
            <RemoveIcon
              className={classes.icon}
              onClick={() => {
                handleRemove();
              }}
            ></RemoveIcon>
            <h5> {itemExist.quantity} </h5>
            <AddIcon
              className={classes.icon}
              onClick={() => {
                handleAdd();
              }}
            ></AddIcon>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
