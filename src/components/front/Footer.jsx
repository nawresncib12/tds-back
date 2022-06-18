import classes from "./Footer.module.css"
const Footer = () => {
    return ( <div className={classes.footer}>
        <div className={classes.navigation}>
            <h2>Home</h2>
            <h2>About us</h2>
            <h2>Offer a tree</h2>
            <h2>Rent a tree</h2>
        </div>
        <div className={classes.socials}>

        </div>
        <h3> 2022 Trees. All rights reserved.</h3>
    </div> );
}
 
export default Footer;