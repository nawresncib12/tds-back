import classes from "./Steps.module.css";
import Button from "../../UI/Button";
import stepsImg from "../../assets/steps.svg";
const Steps = () => {
  return (
    <div className={classes.steps}>
      <div className={classes.stepImage}>
        <img src={stepsImg} alt="steps" />
      </div>
      <div></div>
      <div className={classes.stepInfo}>
        <h3>CRYPTO EXCHANGE</h3>
        <h1>Buy and sell crypto in minutes</h1>
        <div className={classes.stepList}>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>1</h2>
            <h2 className={classes.stepTitle}>
              Create you free Kraken account
            </h2>
          </div>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>2</h2>
            <h2 className={classes.stepTitle}>Connect your funding method</h2>
          </div>
          <div className={classes.step}>
            <h2 className={classes.stepNumber}>3</h2>
            <h2 className={classes.stepTitle}>
              Buy and sell 100+ cryptocurrencies
            </h2>
          </div>
        </div>
        <div className={classes.button}>
          <Button
            color="#4daaaa
"
          >
            See How it works
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
