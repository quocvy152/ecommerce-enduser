import { FC } from "react";
import { Route, Routes as Router } from "react-router-dom";

import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
    </Router>
  );
};

export default Routes;
