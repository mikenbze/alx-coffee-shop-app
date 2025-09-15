import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Coffee Shop ☕
      </Text>

      <Link href="/home" asChild>
        <Pressable className="bg-amber-600 px-6 py-3 rounded-lg">
          <Text className="text-white font-semibold">Enter Shop</Text>
        </Pressable>
      </Link>
    </View>
  );
}
