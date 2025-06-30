import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function StudentRegister(
  {
    /* navigation */
  }
) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !email) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    // Simule cadastro (pode trocar por integração com API futuramente)
    Alert.alert("Cadastro realizado com sucesso!", `Bem-vindo(a), ${name}!`);
    setName("");
    setEmail("");
    /* navigation.goBack(); */
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Estudante</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Salvar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});
