import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import Front from "./pages/front";
import Rent from "./pages/rent";
import Shop from "./pages/shop";
import Cart from "./components/marketplace/Cart";
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/home" element={<Front></Front>} />
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="/signup" element={<SignUp></SignUp>} />
          <Route exact path="/dashboard" element={<Home></Home>} /> 
          <Route exact path="/rent" element={<Rent></Rent>} /> 
          <Route exact path="/shop" element={<Shop></Shop>} /> 
          <Route exact path="/cart" element={<Cart></Cart>} /> 
          <Route exact path="/resetPassword/:token" element={<ResetPassword></ResetPassword>} />
          <Route exact path="/*" element={<NotFound/>} />
        </Routes>
      </Router>

  );
}

export default App;
