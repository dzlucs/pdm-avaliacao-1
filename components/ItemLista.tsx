// components/ItemLista.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ItemData } from "@/assets/data/data";

type ItemListaProps = {
  item: ItemData;
  isSelected: boolean;
  onPress: () => void;
  onOpenActions: () => void;
};

const ItemLista: React.FC<ItemListaProps> = ({
  item,
  isSelected,
  onPress,
  onOpenActions,
}) => {
  const backgroundColor = isSelected ? "#A4BFEB" : "#A4A8D1";
  const textColor = isSelected ? "#403F4C" : "#333";

  return (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor }]}
      onPress={onPress}
    >
      <Image source={{ uri: item.emoji }} style={styles.emoji} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        <Text style={[styles.description, { color: textColor }]}>
          {item.description}
        </Text>
        <TouchableOpacity style={styles.actionButton} onPress={onOpenActions}>
          <Text style={styles.actionButtonText}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    backgroundColor: "#F9DC5C",
    borderRadius: 6,
  },
  actionButtonText: {
    fontSize: 18,
  },
});

export default ItemLista;
