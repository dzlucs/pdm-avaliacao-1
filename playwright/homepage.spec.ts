import { test, expect } from "@playwright/test";

test("Home page exibe os itens principais", async ({ page }) => {
  await page.goto("http://localhost:8081");

  // Verifica se o texto 'Welcome' está presente
  await expect(page.getByText("Welcome")).toBeVisible();

  // Verifica se o botão 'Developer' está presente
  await expect(page.getByText("Developer")).toBeVisible();

  // Verifica se o botão 'Student' está presente
  await expect(page.getByText("Student")).toBeVisible();
});
