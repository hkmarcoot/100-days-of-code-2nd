import React from "react";
import { Thought } from "./Thought.js";
import { AddThoughtForm } from "./AddThoughtForm.js";
import { App } from "./App.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it('"Oreos are delicious" should not appear', () => {
  render(<App />);
  // Add testing logic here
  const emptyThought = screen.queryByText("Oreos are delicious");
  expect(emptyThought).toBeNull();
});
