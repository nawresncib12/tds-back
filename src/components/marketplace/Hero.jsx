import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import heroImg from "../../assets/rent.svg";
import { useNavigate } from "react-router-dom";
const Hero = (props) => {
  const navigate= useNavigate();
  return (
    <div className={classes.hero}>
      <div className={classes.heroInfo}>
        <h2>
          Rent a tree
          <br />
          Invest & Help
        </h2>
        <p>
          Invest in a tree today and <strong>gain </strong> money. All while
          offering its whole environment a <strong>better </strong>life.
        </p>
        <div className={classes.button}>
          <Button
            onClick={() => {
              props.setScroll(true);
            }}
            color="#4daaaa
"
          >
            Start Now
          </Button>
          <Button
            onClick={() => {
             navigate("/cart");
            }}
            color="#fff
"
contentColor="#4daaaa"
border="1px solid #4daaaa"
          >
            See Shopping Cart
          </Button>
        </div>
      </div>
      <div className={classes.heroImage}>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
