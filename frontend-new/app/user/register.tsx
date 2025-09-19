import React, { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, useRouter } from "expo-router";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    // TODO: Add registration logic
    if (email && password) {
      alert("Account created!");
      router.push("/login");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Register</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />

      <Link href="/login">
        <ThemedText style={styles.link}>Already have an account? Login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
  link: {
    marginTop: 12,
    color: "#0B638B",
    textAlign: "center",
  },
});
