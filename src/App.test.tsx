import { App } from "./App";
import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

it("renders to the screen", () => {
  render(<App />);

  const div = screen.getByText("Hello world");

  expect(div).toBeInTheDocument();
});
