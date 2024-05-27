import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Shop from "../src/components/Shop";
import App from "../src/components/App";
import { act } from "react";

describe ('Shop', () => {
  it('displays all the categories', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="test" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
      );
    });

    expect(
      await screen.findByText('Men')
      && await screen.findByText('Women')
      && await screen.findByText('Jewelery')
      && await screen.findByText('Electronics')
    ).toBeInTheDocument();
  });
})