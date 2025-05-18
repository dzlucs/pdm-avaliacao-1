import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack></Stack>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  stack: {
    color: "#456123",
  },
});
