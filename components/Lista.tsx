import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { ItemData } from "@/assets/data/data";

type ListaProps = {
  data: ItemData[];
};

const Lista = ({ data }: ListaProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { showActionSheetWithOptions } = useActionSheet();

  // Função para abrir o ActionSheet com opções
  const handleOpenActions = (item: ItemData) => {
    const options = ["Editar", "Excluir", "Cancelar"];
    const cancelButtonIndex = 2; // Índice da opção "Cancelar"

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: item.title, // Título do item
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // Ação de Editar
          console.log("Editar", item.id);
        } else if (buttonIndex === 1) {
          // Ação de Excluir
          console.log("Excluir", item.id);
        }
      }
    );
  };

  // Renderiza cada item da lista
  const renderItem = ({ item }: { item: ItemData }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? "#456123" : "#6EEB83";
    const textColor = isSelected ? "#fff" : "#333";

    return (
      <TouchableOpacity
        style={[styles.itemContainer, { backgroundColor }]}
        onPress={() => setSelectedId(item.id)} // Marcar item como selecionado ao clicar
      >
        <Image source={{ uri: item.emoji }} style={styles.emoji} />{" "}
        {/* Ícone ou emoji do item */}
        <View style={styles.content}>
          <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
          <Text style={[styles.description, { color: textColor }]}>
            {item.description}
          </Text>

          {/* Botão para abrir as ações do ActionSheet */}
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleOpenActions(item)} // Abrir as opções ao clicar
          >
            <Text style={styles.actionButtonText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
