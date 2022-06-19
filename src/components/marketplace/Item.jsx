import classes from "./Item.module.css";
import fruit from "../../assets/orange.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { cartActions } from "../../store/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const itemExist = items.find((it) => it.id === item.id);
  const handleAdd = () => {
    dispatch(cartActions.addItemToCart(item));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };
  return (
    <div className={classes.shopItem}>
      <img src={fruit} alt="fruit" />
      <div className={classes.item}>
        <p>{item.description}</p>
        <div className={classes.itemDetail}>
          <div className={classes.info}>
            <h3>{item.name}</h3>
            <h4>{item.price} DT</h4>
          </div>
          {!itemExist && (
            <div className={classes.button}>
              <button
                onClick={() => {
                  handleAdd();
                }}
              >
                Add to cart
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
    </div>
  );
};

export default Item;
