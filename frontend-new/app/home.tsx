import React from "react";
import { StyleSheet, Button } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout logic
    router.push("/login");
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">🏠 Home</ThemedText>
      <ThemedText>Welcome back! You're logged in.</ThemedText>
      <Button title="Logout" onPress={handleLogout} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
