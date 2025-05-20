import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { ItemData } from "@/assets/data/data";
import ItemLista from "./ItemLista";
import { useRouter } from "expo-router";

type ListaProps = {
  data: ItemData[];
  type?: string;
};

const Lista = ({ data, type }: ListaProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  useEffect(() => {
    if (selectedId) {
      console.log("Novo item selecionado:", selectedId);
    }
  }, [selectedId]);

  // Função para abrir o ActionSheet com opções
  const handleOpenActions = (item: ItemData) => {
    const options = ["Editar", "Excluir", "Cancelar"];
    const cancelButtonIndex = 2; // Índice da opção "Cancelar"

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: item.title,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log("Editar", item.id);
        } else if (buttonIndex === 1) {
          console.log("Excluir", item.id);
        }
      }
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemLista
          item={item}
          isSelected={item.id === selectedId}
          /* onPress={() =>
            router.push({ pathname: "/details/[id]", params: { id: item.id } })
          } */
          onPress={() => setSelectedId(item.id)}
          onOpenActions={() => handleOpenActions(item)}
        />
      )}
    />
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
});

export default Lista;
