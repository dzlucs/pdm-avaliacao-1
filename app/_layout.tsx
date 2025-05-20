import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <Stack />
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aabbcc",
  },
});
