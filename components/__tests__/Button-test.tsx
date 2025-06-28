// TESTE UNITÁRIO PARA BOTÃO TESTE

import React from "react";
import { render } from "@testing-library/react-native";
import Button from "../Button";

describe("Button", () => {
  it("renders with correct title", () => {
    const { getByText } = render(
      <Button title="Clique aqui" onPress={() => {}} />
    );
    expect(getByText("Clique aqui")).toBeTruthy();
  });
});
