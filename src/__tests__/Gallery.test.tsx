import React from "react";
import "intersection-observer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "../components/Gallery"; //

test("renders gallery images with buttons", () => {
  render(<Gallery />);

  const images = screen.getAllByRole("img");
  expect(images.length).toBe(5);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(5);
});

test("renders text content", () => {
  render(<Gallery />);

  // Check if text content is rendered
  const textElements = screen.getAllByText(/Best choice/i);
  expect(textElements.length).toBe(1);
});
