import NavbarHead from "../components/front/NavbarHead";
import Hero from "../components/marketplace/Hero";
import Market from "../components/marketplace/Market";
import Footer from "../components/front/Footer";
import { useState } from "react";
const Shop = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <NavbarHead></NavbarHead>
      <Hero scroll={scroll} setScroll={setScroll}></Hero>
      <Market scroll={scroll} setScroll={setScroll}></Market>
      <Footer></Footer>
    </>
  );
};

export default Shop;
