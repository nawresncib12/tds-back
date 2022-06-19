import classes from "./TreeCard.module.css";
import Button from "../../UI/Button";
const TreeCard = () => {
  return (
    <div className={classes.treeCard}>
      <h1>Palm Tree</h1>
      <div className={classes.info}>
        <h2>Age:</h2>
        <h2>4 years old</h2>
      </div>
      <div className={classes.info}>
        <h2>Available trees:</h2>
        <h2>45</h2>
      </div>
      <Button color="#4daaaa">See more</Button>
    </div>
  );
};

export default TreeCard;
