/* import React from "react";
import { render } from "@testing-library/react-native";
import DeveloperCard from "../details";

describe("DeveloperCard", () => {
  it("mostra nome e skills do desenvolvedor", () => {
    const developer = { name: "Lucas", skills: ["React", "Node"] };
    const { getByText } = render(<DeveloperCard developer={developer} />);
    expect(getByText("Lucas")).toBeTruthy();
    expect(getByText("React")).toBeTruthy();
    expect(getByText("Node")).toBeTruthy();
  });
});

/* describe("DeveloperCard", () => {
  it("exibe o nome do dev", () => {
    const { getByText } = render(<DeveloperCard name="Maria" />);
    expect(getByText("Maria")).toBeTruthy();
  });
}); */
