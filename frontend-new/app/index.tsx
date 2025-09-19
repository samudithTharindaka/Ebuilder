import React from "react";
import { View, Button, Platform } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 items-center justify-center px-6 gap-5">
      {/* Logo */}
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        className="h-36 w-60 mb-3"
        contentFit="contain"
      />

      {/* Title */}
      <ThemedText type="title" className="text-center">
        👋 Welcome to Ebuilder!
      </ThemedText>
      <ThemedText className="text-center mb-2">
        Build, explore, and get started quickly.
      </ThemedText>

      {/* Steps */}
      <ThemedView className="w-full mb-3 gap-2">
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/welcome.tsx</ThemedText> to
          see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <ThemedView className="w-full mb-3 gap-2">
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Discover features in the Explore tab and play around with components.
        </ThemedText>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText className="text-[#0B638B] mt-1">Open Modal →</ThemedText>
          </Link.Trigger>
        </Link>
      </ThemedView>

      <ThemedView className="w-full mb-3 gap-2">
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          Run <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to reset the app and start clean.
        </ThemedText>
      </ThemedView>

      {/* Auth Buttons */}
      <View className="flex-row mt-6 space-x-3">
        <Button title="Login" onPress={() => router.push("/user/login")} />
        <Button title="Register" onPress={() => router.push("/user/register")} />
      </View>
    </ThemedView>
  );
}
