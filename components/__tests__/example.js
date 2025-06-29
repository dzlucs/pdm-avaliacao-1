import { Selector } from "testcafe";

fixture`Minha página`.page("http://localhost:8081");

test("Título da página", async (t) => {
  await t.expect(Selector("title").innerText).contains("Seu Título");
});
