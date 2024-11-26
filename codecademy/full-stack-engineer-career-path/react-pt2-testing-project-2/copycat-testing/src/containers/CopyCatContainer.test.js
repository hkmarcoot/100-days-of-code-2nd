import { CopyCatContainer } from "./CopyCatContainer";
import "regenerator-runtime";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

it("Should display copied text", async () => {
  render(<CopyCatContainer />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Hello World!");

  const par = await screen.findByText(/Hello World!/i);
  expect(par).toBeInTheDocument();
});

it("Should remove copied text after putting on tape", async () => {
  render(<CopyCatContainer />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "My mouth is shut");
  const par = await screen.findByText(/My mouth is shut/i);
  expect(par).toBeInTheDocument();

  const copyCatImage = screen.getByRole("button", { name: /copycat/i });
  userEvent.click(copyCatImage);
  await waitFor(() => {
    const text = screen.queryByText("My mouth is shut");
    expect(text).not.toBeInTheDocument();
  });
});

it("Should display copied text after removing tape", async () => {
  render(<CopyCatContainer />);
  const input = screen.getByRole("textbox");
  await userEvent.type(input, "Eventually this will appear");
  const copyCatImage = screen.getByRole("button", { name: /copycat/i });
  userEvent.click(copyCatImage);

  // Find and wait for the quiet cat image button to be displayed before moving on
  const quietCatImage = await screen.findByRole("button", {
    name: /quietcat/i,
  });
  // Simulate a click on the quiet cat image
  userEvent.click(quietCatImage);
  // Find and wait for "Eventually this will appear" to be displayed
  const copiedText = await screen.findByText("Eventually this will appear");
});
