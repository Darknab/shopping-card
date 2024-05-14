import Hero from "./Hero";
import Navigation from "./Navigation";
import Category from "./Category";
import { useEffect, useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [data, setData]  = useState(null);
  const [isLoading, setIsLoading]= useState(true);
  const [error, setError]  = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors'})
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  function addToCart(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setCart([
      ...cart,
      {
        id: id,
        quantity: formData.get('quantity'),
      }
    ]);
  }

  return (
    <>
      <Navigation />
      <Hero />
      { isLoading
        ? <p>Loading...</p>
        : error 
        ? <p>A network error was encoutred</p>
        : <>
            <Category id="men" addToCart={addToCart} products={data.filter(product => product.category === "men's clothing")}/>
            <Category id="women" addToCart={addToCart} products={data.filter(product => product.category === "women's clothing")}/>
            <Category id="jewelery" addToCart={addToCart} products={data.filter(product => product.category === "jewelery")}/>
            <Category id="electronics" addToCart={addToCart} products={data.filter(product => product.category === "electronics")}/>
          </>
      }
    </>
  );
}