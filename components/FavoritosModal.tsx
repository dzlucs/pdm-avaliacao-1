import React from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//import { useFavoritos } from "@/context/FavoritosContext";
//import { useFavoritos } from "@/context/FavoritosContext";

type Props = {
  visible: boolean;
  onClose: () => void;
  data: ItemData[]; // Passe TODAS as listas aqui
};

export const FavoritosModal = ({ visible, onClose, data }: Props) => {
  const { favoritos } = useFavoritos();
  const favoritosData = data.filter((item) => favoritos.includes(item.id));

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={styles.header}>Favoritos</Text>
          <FlatList
            data={favoritosData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.title}</Text>
            )}
            ListEmptyComponent={<Text>Nenhum favorito ainda.</Text>}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{ color: "#fff" }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0008",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 12 },
  item: { padding: 8, fontSize: 16 },
  closeBtn: {
    marginTop: 16,
    backgroundColor: "#f55",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});
