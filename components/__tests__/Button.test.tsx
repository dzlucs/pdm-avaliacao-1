// TESTE UNITÁRIO PARA BOTÃO TESTE
// UTILIDADE DESTE TESTE: é interessante garantir que o componente apresente
// o texto correto e execute a ação para a qual foi programado.
// Valida renderização e conteúdo.

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

describe("Button", () => {
  it("renderiza com o título correto e responde ao clique", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Clique aqui" onPress={onPressMock} />
    );
    const button = getByText("Clique aqui");
    expect(button).toBeDefined(); // verifica se o texto está na tela
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1); // verifica se, ao clicar, o handler é chamado
  });
});

/* describe("Button", () => {
  it("renders with correct title", () => {
    const { getByText } = render(
      <Button title="Clique aqui" onPress={() => {}} />
    );
    expect(getByText("Clique aqui")).toBeTruthy();
  });
}); */
