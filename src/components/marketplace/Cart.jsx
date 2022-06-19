import classes from "./Cart.module.css";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "./CartModal";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const getTotal = () => {
    var total = 0;
    {
      items.map((item) => {
        total += item.quantity * item.price;
      });
    }
    return total;
  };
  return (
    <div className={classes.cartContainer}>
      {open && <CartModal items={items} total={getTotal()} setOpen={setOpen}></CartModal>}
      <div className={classes.cart}>
        <h1>Your Cart</h1>
        {totalQuantity != 0 && (
          <>
            <div className={classes.cartItems}>
              <div className={classes.item}>
                <h5>Name</h5>
                <h5>Quantity</h5>
                <h5>Price</h5>
                <h5>Total</h5>
              </div>
              {items.map((item, index) => {
                return (
                  <div key={index} className={classes.itemContent}>
                    <h5>{item.name}</h5>
                    <h5>x {item.quantity}</h5>
                    <h5>{item.price}</h5>
                    <h5>{item.price * item.quantity}</h5>
                  </div>
                );
              })}
              <div className={classes.line}></div>
              <div className={classes.itemContent}>
                <h5 style={{ color: "#4daaaa" }}>Total:</h5>
                <h5></h5>
                <h5></h5>
                <h5>{getTotal()}</h5>
              </div>
            </div>
            <div className={classes.button}>
              <Button
                color="#4daaaa"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Submit Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
