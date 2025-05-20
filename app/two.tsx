import { View, Text } from "react-native";
import { DATA2 } from "@/assets/data/data2";
import Lista from "@/components/Lista";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F9DC5C" }}>
      <Stack.Screen name="two" options={{ title: "Developer" }} />{" "}
      <Lista data={DATA2} />
    </View>
  );
}

const styles = StyleSheet.create({
  backg: {
    flex: 1,
  },
});
