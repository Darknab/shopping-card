import Hero from "./Hero";
import Navigation from "./Navigation";
import Category from "./Category";
import { useEffect, useState } from "react";

export default function App() {
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

  return (
    <>
      <Navigation />
      <Hero />
      { isLoading
        ? <p>Loading...</p>
        : error 
        ? <p>A network error was encoutred</p>
        : <>
            <Category id="men" products={data.filter(product => product.category === "men's clothing")}/>
            <Category id="women" products={data.filter(product => product.category === "women's clothing")}/>
            <Category id="jewelery" products={data.filter(product => product.category === "jewelery")}/>
            <Category id="electronics" products={data.filter(product => product.category === "electronics")}/>
          </>
      }
    </>
  );
}