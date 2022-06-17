import classes from "./FormSection.module.css";
import { SignInForm } from "../SignInForm";
import { ToggleBox } from "../ToggleBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../SignUpForm";
import { AnimatePresence, motion } from "framer-motion";
import waves from "../../../assets/waves2.png";
const formVariants = {
  initial: {
    opacity: 0,
    x: "200vw",
    transitionDelay: 5,
  },
  animate: {
    opacity: 1,
    x: 0,
    transitionDelay: 5,
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transitionDelay: 5,
  },
};
const FormSection = (props) => {
  
  const [isClicked, setIsClicked] = useState(props.auth);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      navigate("/login", { state: { toggle: true } });
    } else {
      navigate("/signup", { state: { toggle: true } });
    }
  };

  return (
    <div className={classes.formSection}>
      {/* <motion.div className={classes.smallWave}>
        <img src="assets/Vector.png" alt="whitewave" />
      </motion.div>
      <div className={classes.whiteWave}>
        <img src="assets/whitewave.png" alt="whitewave" />
      </div>*/}
      <div className={classes.waves}>
        <img src={waves} alt="waves" />
      </div>

      <div className={classes.formContainer}>
        <div className={classes.close} onClick={props.onHide}>
          x
        </div>
        <AnimatePresence>
          {isClicked === false ? (
            <motion.div variants={formVariants} exit="exit" initial="intitial">
              <SignInForm
                resetPass={props.resetPass}
                token={props.token}
                onSubmitForm={props.onSubmitForm}
              />
            </motion.div>
          ) : (
            <SignUpForm
              onSubmitForm={props.onSubmitForm}
              submitted={props.submitted}
            />
          )}
        </AnimatePresence>

        <div className={classes.toggleSection}>
          <ToggleBox
            isClicked={isClicked}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
