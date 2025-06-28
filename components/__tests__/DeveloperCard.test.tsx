import React from "react";
import { render } from "@testing-library/react-native";
import DeveloperCard from "../details";

describe("DeveloperCard", () => {
  it("exibe o nome do dev", () => {
    const { getByText } = render(<DeveloperCard name="Maria" />);
    expect(getByText("Maria")).toBeTruthy();
  });
});
