import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { DATA } from "@/data/data";
import { DATA2 } from "@/data/data2";

export default function DetailsScreen() {
  const { id, type } = useLocalSearchParams<{ id: string; type?: string }>();

  // Decide qual lista usar
  const data = type === "dev" ? DATA2 : DATA;
  const item = data.find((i) => i.id === id);

  if (!item) return <Text>Item não encontrado.</Text>;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.emoji }}
        style={styles.emoji}
        resizeMode="contain"
      />
      <Text style={styles.title}>{item.title}</Text>
      {item.description && (
        <Text style={styles.description}>{item.description}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emoji: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  description: { fontSize: 16, color: "#333" },
});
