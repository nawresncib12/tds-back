import classes from "./Why.module.css";
import Reason from "./Reason";
const Why = () => {
  return (
    <div className={classes.why}>
      <h1>Why AgriLine?</h1>
      <div className={classes.reasons}>
        <Reason name="Transparency" description="You can get all the information's about your product , its quality ,origin and journey with a simple click " ></Reason>
        <Reason name="Unbeatable prices" description="Beacause of the lower fees and the absence of a middle man , we  garantee to provide the best  market "></Reason>
        <Reason name="Yield predection" description="Provide the farmer with a machine learning solution to help him make the most optimized decisions"></Reason>
      </div>
    </div>
  );
};

export default Why;