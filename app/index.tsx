import { StyleSheet, Button, TouchableOpacity, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)</Text>

      {/*       <View style={styles.separator} lightColor="lightgreen" />
       */}

      <TouchableOpacity
        style={styles.button1}
        onPress={() => router.push("/two")}
      >
        <Text style={styles.text}>SOU DEV</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => router.push("/three")}
      >
        <Text style={styles.text}>SOU ESTUDANTE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button1: {
    backgroundColor: "#F6511D",
    padding: 12,
    alignItems: "center",
    width: "40%",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button2: {
    backgroundColor: "#0D2C54",
    padding: 12,
    alignItems: "center",
    width: "40%",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
