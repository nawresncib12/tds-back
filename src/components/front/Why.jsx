import classes from "./Why.module.css";
import Reason from "./Reason";
const Why = () => {
  return (
    <div className={classes.why}>
      <h1>Why Trees?</h1>
      <div className={classes.reasons}>
        <Reason></Reason>
        <Reason></Reason>
        <Reason></Reason>
      </div>
    </div>
  );
};

export default Why;
