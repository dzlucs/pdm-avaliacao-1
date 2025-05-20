import { View } from "react-native";
import { DATA2 } from "@/assets/data/data2";
import Lista from "@/components/Lista";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Lista data={DATA2} />
    </View>
  );
}
