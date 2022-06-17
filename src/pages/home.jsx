import { useState } from "react";
import Dashboard from "../components/dashboard/Dashboard";
const Home = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
    <Dashboard></Dashboard>
    </>
  );
};

export default Home;
