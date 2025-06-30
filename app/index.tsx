import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Button from "../components/Button";
//import { HeaderWithHeart } from "@/components/HeaderWithHeart";
//import { allItems } from "@/data/data";

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/tech-light.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => router.push("/two")}
        >
          <Text style={styles.text}>Developer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("/three")}
        >
          <Text style={styles.text}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("/StudentRegister")}
        >
          <Text style={styles.text}>Cadastrar Estudante</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Clique aqui"
            onPress={() => alert("Botão pressionado!")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    zIndex: 1, // para garantir que o conteúdo que acima do overlay
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
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
