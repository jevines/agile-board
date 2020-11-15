import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("The App comonent", () => {
  it("should match the snapshot", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
