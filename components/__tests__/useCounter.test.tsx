// TESTE DE UM HOOK CUSTOMIZADO
// UTILIDADE: valida a lógica de alteração de estado do hook customizado,
// garante que incrementos funcionem de acordo com o esperado

import { renderHook, act } from "@testing-library/react-native";
import useCounter from "@/hooks/useCounter";

describe("useCounter", () => {
  it("incrementa o contador corretamente", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });
});

/* it("deve incrementar o contador", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
}); */
