import { View } from "react-native";
import { DATA } from "@/assets/data/data";
import Lista from "@/components/Lista";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Lista data={DATA} />
    </View>
  );
}
