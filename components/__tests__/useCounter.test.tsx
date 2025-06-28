// TESTE DE UM HOOK CUSTOMIZADO

import { renderHook, act } from "@testing-library/react-native";
import useCounter from "@/hooks/useCounter";

it("deve incrementar o contador", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
