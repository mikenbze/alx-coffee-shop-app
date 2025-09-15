import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Delivery() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-6">
      <Text className="text-3xl font-bold mb-4">🚚 Your Coffee is on the Way!</Text>
      <Text className="text-lg text-gray-600 mb-6">Estimated time: 15 minutes</Text>

      <Link href="/home" asChild>
        <Pressable className="bg-amber-600 px-6 py-3 rounded-xl">
          <Text className="text-white font-semibold">Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
