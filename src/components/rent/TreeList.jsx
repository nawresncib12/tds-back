import classes from "./TreeList.module.css";
import TreeCard from "./TreeCard";
const TreeList = () => {
  return (
    <div className={classes.treeList}>
      <h1>Our Trees</h1>
      <div className={classes.list}>
        <TreeCard></TreeCard>
      </div>
    </div>
  );
};

export default TreeList;
