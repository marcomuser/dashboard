import { App } from "./App";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("General setup", () => {
  it("renders to the screen", () => {
    render(<App />);

    const div = screen.getByText("Hello world");

    expect(div).toBeInTheDocument();
  });
});
