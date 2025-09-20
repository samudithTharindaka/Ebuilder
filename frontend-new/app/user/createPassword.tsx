import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ThemedView className="flex-1 bg-white px-6 pt-12">
      {/* Title */}
      <ThemedText
        type="title"
        className="text-2xl font-bold mb-6 text-green-600"
      >
        Create Password
      </ThemedText>

      {/* Password */}
      <ThemedText className="mb-1 font-medium">Password</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Confirm Password */}
      <ThemedText className="mb-1 font-medium">Confirm Password</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Next Button */}
      <TouchableOpacity
        className="bg-green-400 py-3 rounded-xl items-center mb-6"
        onPress={() => router.push("../home")}
      >
        <Text className="text-black font-semibold">Next</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-400">
        Already registered?{" "}
        <Text
          className="text-green-500 underline"
          onPress={() => router.push("/user/login")}
        >
          log in
        </Text>
      </Text>
    </ThemedView>
  );
}
