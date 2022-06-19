import classes from "./Footer.module.css"
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate();
    return ( <div className={classes.footer}>
        <div className={classes.navigation}>
            <h2 onClick={()=>{navigate("/home")}}>Home</h2>
            <h2  onClick={()=>{navigate("/about")}}>About us</h2>
        </div>
        <h3> 2022 Trees. All rights reserved.</h3>
    </div> );
}
 
export default Footer;