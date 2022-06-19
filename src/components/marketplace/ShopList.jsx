import Item from "./Item";
import classes from "./ShopList.module.css";
import { Pagination } from "@mui/material";
const ShopList = () => {
  const items = [
    {
      id: 1,
      name: "Oranges",
      price: 2,
      description: "Fresh fruits,vegetables",
    },
    { id: 2, name: "Olives", price: 5, description: "Fresh fruits,vegetables" },
    { id: 3, name: "Degla", price: 12, description: "Fresh fruits,vegetables" },
    {
      id: 4,
      name: "Potatoes",
      price: 10,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 5,
      name: "Agrumes",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
  ];
  return (
    <div className={classes.itemList}>
      <div className={classes.items}>
        {items.map((item) => {
          return <Item key={item.id} item={item}></Item>;
        })}
      </div>
      {/* <Pagination count={10} style={{ background: "#4daaaa" }} />
       */}
    </div>
  );
};

export default ShopList;
