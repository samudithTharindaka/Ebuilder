import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", emailOrUsername, password);
  };

  const handleCancel = () => {
    setEmailOrUsername("");
    setPassword("");
  };

  return (
    <ThemedView className="flex-1 bg-white px-6 pt-12">
      {/* Header Image */}
      <Image
        source={require("@/assets/images/image-1.png")}
        className="w-full h-40 mb-6"
        contentFit="contain"
      />

      {/* Title */}
      <ThemedText type="title" className="text-2xl font-bold mb-1">
        Constructions with Sustainable Development
      </ThemedText>
      <ThemedText className="text-gray-500 mb-6">
        For easily manage all constructions
      </ThemedText>
      <ThemedText className="text-gray-400 mb-4">Try new features</ThemedText>

      {/* Username / Email */}
      <ThemedText className="mb-1 font-medium">Username or email</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter username or email"
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
      />

      {/* Password */}
      <ThemedText className="mb-1 font-medium">Password</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Buttons */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity
          className="flex-1 bg-green-400 py-3 rounded-xl mr-2 items-center"
          onPress={handleLogin}
        >
          <Text className="text-black font-semibold">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 bg-green-400 py-3 rounded-xl ml-2 items-center"
          onPress={handleCancel}
        >
          <Text className="text-black font-semibold">Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <Text className="text-center text-gray-400">
        Not registered yet? go and{" "}
        <Text
          className="text-green-500 underline"
          onPress={() => router.push("/user/register")}
        >
          sign up
        </Text>
      </Text>
    </ThemedView>
  );
}
