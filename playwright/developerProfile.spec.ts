// E2E -> PLAYWRIGHT
// UTILIDADE: garante que a navegação principal do app funciona e que as informações chave
// do modo dev estão sendo apresentadas ao user.

import { test, expect } from "@playwright/test";

test("Usuário navega para tela de perfil de desenvolvedor e vê informações", async ({
  page,
}) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Developer").click();

  // Verifica se foi para a tela correta
  await expect(page.getByText("bugs")).toBeVisible();

  // Verifica se informações essenciais aparecem
  await expect(page.getByText("bugs")).toBeVisible();
  //await expect(page.getByText("Skills")).toBeVisible();
});
