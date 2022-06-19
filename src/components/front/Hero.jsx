import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import image from "../../assets/herowave.png";
import heroImg from "../../assets/homeHero.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
      {<img className={classes.wave} src={image} alt="waves" />}
      <div className={classes.heroInfo}>
        <h4 style={{margin:0,marginBottom:"5px"}}>
          Buy agricultural products
          directly from the producer.
        </h4>
        <h2>
          Sustainable Agriculture
          <br />For All
        </h2>
        <p>
          Sign up today to easily buy <strong>fresh </strong> products. Get
          started in minutes and help our <strong>tunisian</strong> market.
        </p>
        <div className={classes.button}>
          <Button
            color="#4daaaa
"
          >
            See How it works
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
