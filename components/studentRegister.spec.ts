// E2E -> PLAYWRIGHT
// UTILIDADE: simula o cadastro do usuário, garantindo que tudo esteja funcionando
// perfeitamente

import { test, expect } from "@playwright/test";

test("Usuário acessa tela de cadastro de estudante e realiza cadastro com sucesso", async ({
  page,
}) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Student").click();
  await page.getByText("Cadastrar").click();

  // Preenche formulário
  await page.getByPlaceholder("Nome completo").fill("João Estudante");
  await page.getByPlaceholder("E-mail").fill("joao@email.com");
  await page.getByText("Salvar").click();

  // Verifica se mensagem de sucesso apareceu
  await expect(page.getByText("Cadastro realizado com sucesso")).toBeVisible();
});
