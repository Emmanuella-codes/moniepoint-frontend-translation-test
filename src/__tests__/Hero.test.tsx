import React from "react";
import "intersection-observer";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

test("renders hero text", () => {
  render(<Hero />);
  const heroText = screen.getByText(/Darcy's insurance products/i);
  expect(heroText).toBeInTheDocument();
});
