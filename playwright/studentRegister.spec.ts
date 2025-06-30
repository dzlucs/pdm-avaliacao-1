// É uma boa prática juntar todos os testes em um só arquivo?

import { test, expect } from "@playwright/test";

// 1. Cadastro de estudante com sucesso
test("Usuário acessa tela de cadastro de estudante e realiza cadastro com sucesso", async ({ page }) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Cadastrar Estudante").click();
  await page.getByPlaceholder("Nome completo").fill("Maria Teste");
  await page.getByPlaceholder("E-mail").fill("maria@teste.com");
  await page.getByText("Salvar").click();

  // Se for um alerta nativo:
  page.on("dialog", async dialog => {
    expect(dialog.message()).toContain("Cadastro realizado com sucesso");
    await dialog.accept();
  });

  // Se for feedback na tela, use:
  // await expect(page.getByText("Cadastro realizado com sucesso")).toBeVisible();
});

// 2. Validação: impede cadastro sem preencher campos obrigatórios
test("Usuário tenta cadastrar estudante sem preencher campos e recebe alerta de erro", async ({ page }) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Cadastrar Estudante").click();
  // Não preenche os campos
  await page.getByText("Salvar").click();

  // Se for um alerta nativo:
  page.on("dialog", async dialog => {
    expect(dialog.message()).toContain("Preencha todos os campos");
    await dialog.accept();
  });

  // Se for feedback na tela, use:
  // await expect(page.getByText("Preencha todos os campos")).toBeVisible();
});

// 3. Navegação: usuário acessa tela de desenvolvedor
test("Usuário acessa tela do desenvolvedor pela home", async ({ page }) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Developer").click();
  // Verifica se algum conteúdo específico da tela de desenvolvedor está presente
  await expect(page.getByText("Perfil do Desenvolvedor")).toBeVisible();
});

// 4. Visualização: usuário acessa tela de estudante e vê o título correto
test("Usuário acessa tela de estudante pela home", async ({ page }) => {
  await page.goto("http://localhost:8081");
  await page.getByText("Student").click();
  // Verifica se algum conteúdo específico da tela de estudante está presente
  await expect(page.getByText("Cadastro de Estudante")).toBeVisible();
});