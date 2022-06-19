import classes from "./Navbar.module.css";
import { logout, loggedIn } from "../../api/api.user";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCursor from "../../UI/customCursor/CustomCursor";
import { useSelector } from "react-redux";
const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        setLogged(false);
      } else {
        setLogged(true);
      }
    }
    log();
  }, [navigate]);

  const signout = async () => {
    const res = await logout();
    if (res) {
      navigate("/login");
    }
  };
  return (
    <div className={classes.navbar}>
      <CustomCursor></CustomCursor>
      <span
        onClick={() => {
          navigate("/home");
          document.body.style.overflow = "auto";
        }}
      >
        Home
      </span>
      <span
        onClick={() => {
          navigate("/profile");
          document.body.style.overflow = "auto";
        }}
      >
        About us
      </span>
      <span
        onClick={() => {
          navigate("/shop");
          document.body.style.overflow = "auto";
        }}
      >
        Market Place
      </span>
      <span
        onClick={() => {
          navigate("/cart");
          document.body.style.overflow = "auto";
        }}
      >
        Shopping cart
        {totalQuantity != 0 && (
          <p className={classes.number}> {totalQuantity} </p>
        )}
      </span>

      <span
        onClick={() => {
          if (logged) {
            signout();
          } else {
            navigate("/login");
            document.body.style.overflow = "auto";
          }
        }}
      >
        {logged ? "Log out" : "Log in"}
      </span>
    </div>
  );
};

export default Navbar;
