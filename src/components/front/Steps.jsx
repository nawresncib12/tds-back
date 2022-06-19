import classes from "./Steps.module.css";
import Button from "../../UI/Button";
import stepsImg from "../../assets/steps.svg";
import { Navigate, useNavigate } from "react-router-dom";
const Steps = () => {
  const navigate=useNavigate();
  return (
    <div className={classes.steps}>
      <div className={classes.stepImage}>
        <img src={stepsImg} alt="steps" />
      </div>
      <div></div>
      <div className={classes.stepInfo}>
        <h3>Agricultural Marketplace</h3>
        <h1>Buy and sell products in minutes</h1>
        <div className={classes.stepList}>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>1</h2>
            <h2 className={classes.stepTitle}>
              Create you free AgriLine account for farmer or buyer
            </h2>
          </div>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>2</h2>
            <h2 className={classes.stepTitle}>Visit our marketplace</h2>
          </div>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>3</h2>
            <h2 className={classes.stepTitle}>
              Buy or sell fruits and vegetables
            </h2>
          </div>
        </div>
        <div className={classes.button}>
          <Button
            color="#4daaaa
"
            onClick={() => {
              navigate("/shop");
            }}
          >
            Go to market
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
