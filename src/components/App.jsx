import Navigation from "./Navigation";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function App() {
  const [cart, setCart] = useState([]);


  return (
    <>
      <Navigation count={cart.length} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </>
  );
}