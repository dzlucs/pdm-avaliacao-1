import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detalhes do item com id: {id}</Text>
    </View>
  );
}
