import classes from "./Hero.module.css";
import Button from "../../UI/Button";
import image from "../../assets/herowave.png";
import heroImg from "../../assets/homeHero.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
          {
        <img className={classes.wave} src={image} alt="waves" />
      }
      <div className={classes.heroInfo}>
        <h2>Buy bitcoin 
            <br />
            & crypto</h2>
        <p>
          Sign up today to easily buy <strong>100+ </strong> cryptocurrencies.
          Get started in minutes with as little as <strong>$10</strong>.
        </p>
        <div className={classes.button}>
        <Button color="#4daaaa
">See How it works</Button>

        </div>
      </div>
      <div className={classes.heroImage}>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
