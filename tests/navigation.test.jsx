import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navigation from "../src/components/Navigation";
import { BrowserRouter } from "react-router-dom";


describe("Navigation", () => {
  it("displays a nav menu", () => {
    render(
      <BrowserRouter>
        <Navigation count={0}/>
      </BrowserRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("contains a link to the home page", () => {
    render(
      <BrowserRouter>
        <Navigation count={0}/>
      </BrowserRouter>
    );
    expect(screen.getByText(/Awesome Shop/i)).toBeInTheDocument();
  });

  it("contains a link each category", () => {
    render(
      <BrowserRouter>
        <Navigation count={0}/>
      </BrowserRouter>
    );
    expect(screen.getByText("Men") && screen.getByText("Women") && screen.getByText("Jewelery") && screen.getByText("Electronics")).toBeInTheDocument();
  });

  it("containes a link to the cart", () => {
    render(
      <BrowserRouter>
        <Navigation count={0}/>
      </BrowserRouter>
    );
    const cartLink = document.querySelector('#cart-link'); 
    expect(cartLink.firstChild.getAttribute('href')).toBe('/cart');
  });
})