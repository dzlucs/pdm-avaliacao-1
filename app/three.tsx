import { View } from "react-native";
import { DATA } from "@/assets/data/data";
import Lista from "@/components/Lista";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#8CFBDE" }}>
      <Stack.Screen name="two" options={{ title: "Student" }} />{" "}
      <Lista data={DATA} />
    </View>
  );
}
