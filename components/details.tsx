import React from "react";
import { View, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Detalhes: { id: string; nome: string };
};

type DetalhesRouteProp = RouteProp<RootStackParamList, "Detalhes">;

const Detalhes: React.FC = () => {
  const route = useRoute<DetalhesRouteProp>();
  const { id, nome } = route.params;
  //use localseachparams
  //useglobalsearchparams
  //aqui tnto faz
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ID: {id}</Text>
      <Text>Nome: {nome}</Text>
    </View>
  );
};

export default Detalhes;

/* import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { DATA } from "@/data/data";
import { DATA2 } from "@/data/data2";

export default function DetailsScreen() {
  const { id, type } = useLocalSearchParams<{ id: string; type?: string }>();

  const data = type === "dev" ? DATA2 : DATA;
  const item = data.find((i) => i.id === id);

  if (!item) return <Text>Item não encontrado.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
});
 */
