import React from "react";
import "intersection-observer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Services from "../components/Services";

test("renders button", () => {
  render(<Services />);
  const button = screen.getByText(/Choose a fund/i);
  expect(button).toBeInTheDocument();
});

test("renders image", () => {
  render(<Services />);
  const image = screen.getByAltText("family");
  expect(image).toBeInTheDocument();
});
