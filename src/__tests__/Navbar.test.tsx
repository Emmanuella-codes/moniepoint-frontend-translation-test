import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { navigation } from "../components/types";

test("renders navbar", () => {
  render(<Navbar />);
  const logoElement = screen.getAllByAltText("logo")[0];
  expect(logoElement).toBeInTheDocument();
});

test("displays navigation list", () => {
  render(<Navbar />);
  navigation.forEach((item) => {
    const navItems = screen.getAllByText(item.name);
    navItems.forEach((navItem) => {
      expect(navItem).toBeInTheDocument();
    });
  });
});
