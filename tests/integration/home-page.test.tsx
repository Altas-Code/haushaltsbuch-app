import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the dashboard placeholder", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: /grundarchitektur steht/i })).toBeInTheDocument();
  });
});
