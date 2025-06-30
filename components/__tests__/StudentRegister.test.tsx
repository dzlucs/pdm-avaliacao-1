import React from "react";
import { Alert } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import StudentRegister from "../../app/StudentRegister";

jest.spyOn(Alert, "alert").mockImplementation(() => {});

describe("StudentRegister", () => {
  it("exibe alerta se campos não preenchidos", () => {
    const { getByText } = render(<StudentRegister />);
    fireEvent.press(getByText("Salvar"));
    //const Alert = require("react-native/Libraries/Alert/Alert");
    expect(Alert.alert).toHaveBeenCalledWith(
      "Erro",
      "Preencha todos os campos!"
    );
  });
});
