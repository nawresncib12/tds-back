import classes from "./Navbar.module.css";
import { logout, loggedIn } from "../../api/api.user";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCursor from "../../UI/customCursor/CustomCursor";
const Navbar = () => {
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
        Offer a tree
      </span>
      <span
        onClick={() => {
          navigate("/rent");
          document.body.style.overflow = "auto";
        }}
      >
        Rent a tree
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
