import Item from "./Item";
import classes from "./ShopList.module.css";
const ShopList = () => {
  const items = [
    {
      id: 1,
      name: "Oranges",
      price: 2,
      description: "Fresh fruits,vegetables",
    },
    { id: 2, name: "Lemons", price: 5, description: "Fresh fruits,vegetables" },
    { id: 3, name: "Dates", price: 12, description: "Fresh fruits,vegetables" },
    {
      id: 4,
      name: "Olives",
      price: 10,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 5,
      name: "Lemons",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 6,
      name: "Olives",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 7,
      name: "Oranges",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 8,
      name: "Dates",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 9,
      name: "Lemons",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 10,
      name: "Olives",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
    {
      id: 11,
      name: "Oranges",
      price: 3,
      description: "Fresh fruits,vegetables",
    },
  ];
  return (
    <div className={classes.shopList}>
      <div className={classes.itemList}>
        <div className={classes.items}>
          {items.map((item) => {
            return <Item key={item.id} item={item}></Item>;
          })}
        </div>
        {/* <Pagination count={10} style={{ background: "#4daaaa" }} />
         */}
      </div>
    </div>
  );
};

export default ShopList;
