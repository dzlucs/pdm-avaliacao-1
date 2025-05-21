import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { ItemData } from "@/data/data";
import ItemLista from "./ItemLista";
import { useRouter } from "expo-router";

type ListaProps = {
  data: ItemData[];
  type?: string;
};

const Lista = ({ data, type }: ListaProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const toggleFavorito = (id: string) => {
    setFavoritos((favs) =>
      favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id]
    );
  };

  useEffect(() => {
    if (selectedId) {
      console.log("Novo item selecionado:", selectedId);
    }
  }, [selectedId]);

  const handleOpenActions = (item: ItemData) => {
    const options = ["Favoritar", "Excluir", "Cancelar"];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: item.title,
      },
      /* (buttonIndex) => {
        if (buttonIndex === 0) {
          toggleFavorito(item.id);
          setMensagem(`Item ${item.title} favoritado!`);
          console.log("Favoritar", item.id);
        } else if (buttonIndex === 1) {
          setMensagem(`Item ${item.title} excluído!`);
          console.log("Excluir", item.id);
        }
      } */
      (buttonIndex) => {
        if (buttonIndex === 0) {
          toggleFavorito(item.id);
          setMensagem(
            favoritos.includes(item.id)
              ? `Item ${item.title} removido dos favoritos!`
              : `Item ${item.title} adicionado aos favoritos!`
          );
        } else if (buttonIndex === 1) {
          setMensagem(`Item ${item.title} excluído!`);
        }
      }
    );
  };

  const handleItemPress = (item: ItemData) => {
    setSelectedId(item.id);
    router.push({ pathname: "/details/[id]", params: { id: item.id } });
  };

  return (
    <View style={{ flex: 1 }}>
      {mensagem && (
        <View style={styles.mensagemContainer}>
          <Text style={styles.mensagemTexto}>{mensagem}</Text>
        </View>
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemLista
            item={item}
            isSelected={item.id === selectedId}
            isFavorito={favoritos.includes(item.id)}
            onPress={() => handleItemPress(item)}
            onOpenActions={() => handleOpenActions(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 16,
    margin: 12,
    borderRadius: 15,
    elevation: 2,
    alignItems: "flex-start",
  },
  emoji: {
    width: 75,
    height: 75,
    marginRight: 20,
    alignSelf: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 4,
    fontSize: 14,
  },
  actionButton: {
    alignSelf: "flex-end",
    marginTop: 8,
    padding: 6,
    backgroundColor: "#f5a32f",
    borderRadius: 6,
  },
  actionButtonText: {
    fontSize: 18,
  },
  mensagemContainer: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  mensagemTexto: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Lista;
