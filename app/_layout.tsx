import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FavoritosProvider } from "@/context/FavoritosContext";

export default function _layout() {
  return (
    <FavoritosProvider>
      <ActionSheetProvider>
        <View style={styles.container}>
          <Stack />
        </View>
      </ActionSheetProvider>
    </FavoritosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aabbcc",
  },
});
