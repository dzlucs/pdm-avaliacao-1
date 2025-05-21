import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FavoritosModal } from "./FavoritosModal";
import { useFavoritos } from "@/context/FavoritosContext";
import { ItemData } from "@/data/data";

// Passe as listas combinadas como prop para o modal
export const HeaderWithHeart = ({ allItems }: { allItems: ItemData[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { favoritos } = useFavoritos();

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ marginRight: 18 }}
      >
        <Ionicons
          name={favoritos.length ? "heart" : "heart-outline"}
          size={28}
          color={favoritos.length ? "#f55" : "gray"}
        />
      </TouchableOpacity>
      <FavoritosModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={allItems}
      />
    </>
  );
};
