import { useState, useEffect } from "react";
import Category from "./Category";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [data, setData]  = useState(null);
  const [isLoading, setIsLoading]= useState(true);
  const [error, setError]  = useState(null);
  const [cart, setCart] = useOutletContext()

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

  function addToCart(e, image, title, price) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get('quantity') > 0) {
      setCart([
        ...cart,
        {
          image: image,
          title: title,
          price: price,
          quantity: formData.get('quantity'),
        }
      ]);
    }

  }

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>A network error was encoutred</p>

  return (
  <>
    <Category id="men" addToCart={addToCart} products={data.filter(product => product.category === "men's clothing")}/>
    <Category id="women" addToCart={addToCart} products={data.filter(product => product.category === "women's clothing")}/>
    <Category id="jewelery" addToCart={addToCart} products={data.filter(product => product.category === "jewelery")}/>
    <Category id="electronics" addToCart={addToCart} products={data.filter(product => product.category === "electronics")}/>
  </>
  );

}