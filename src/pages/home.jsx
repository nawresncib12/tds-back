import { useState ,useEffect} from "react";
import Dashboard from "../components/dashboard/Dashboard";
import { loggedIn } from "../api/api.user";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function log() {
      if (!(await loggedIn())) {
        navigate("/login");
      }
    }
    log();
  }, [navigate]);

  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

export default Home;
