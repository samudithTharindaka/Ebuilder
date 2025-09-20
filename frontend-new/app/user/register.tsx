import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"manager" | "worker" | "owner" | null>(null);

  // const handleRegister = () => {
  //   if (!name || !username || !email || !role) {
  //     alert("Please fill in all fields and select a role.");
  //     return;
  //   }
  //   alert(`Registered as ${role} ✅`);
  //   router.push("/login");
  // };

  return (
    <ThemedView className="flex-1 bg-white px-6 pt-12">
      {/* Title */}
      <ThemedText
        type="title"
        className="text-2xl font-bold mb-6 text-green-600"
      >
        Sign up
      </ThemedText>

      {/* Name */}
      <ThemedText className="mb-1 font-medium">Name</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Username */}
      <ThemedText className="mb-1 font-medium">Username</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Choose a username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email */}
      <ThemedText className="mb-1 font-medium">Email</ThemedText>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Role Selection */}
      <ThemedText className="mb-2 font-medium">You Are</ThemedText>
      <View className="gap-3 mb-6">
        {[
          { label: "Project Manager", value: "manager" },
          { label: "Worker", value: "worker" },
          { label: "Project Owner", value: "owner" },
        ].map((item) => (
          <TouchableOpacity
            key={item.value}
            onPress={() => setRole(item.value as any)}
            className="flex-row items-center"
          >
            {/* Checkbox circle */}
            <View
              className={`w-5 h-5 rounded-full border mr-3 ${
                role === item.value
                  ? "bg-green-400 border-green-500"
                  : "border-gray-400"
              }`}
            />
            {/* Label */}
            <Text
              className={
                role === item.value
                  ? "text-green-600 font-semibold"
                  : "text-gray-700"
              }
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        className="bg-green-400 py-3 rounded-xl items-center mb-6"
        onPress={() => router.push("/user/createPassword")}
      >
        <Text className="text-black font-semibold">Next</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
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
