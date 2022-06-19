import Hero from "../components/front/Hero";
import Steps from "../components/front/Steps";
import Why from "../components/front/Why";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./front.module.css";
import NavbarHead from "../components/front/NavbarHead";
import Footer from "../components/front/Footer";
const Front = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarHead color="#d6f4f4"></NavbarHead>
      <Hero></Hero>
      <Steps></Steps>
      <Why></Why>
      <Footer></Footer>
    </>
  );
};

export default Front;
