import {
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/tech-light.jpg")} // Coloque sua imagem na pasta assets
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={
            () => router.push("/two")
            /* useState aqui */
          }
        >
          <Text style={styles.text}>Developer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => router.push("/three")}
        >
          <Text style={styles.text}>Student</Text>
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
