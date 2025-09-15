import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Order() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold mb-4">Confirm Your Order</Text>
      <Text className="text-lg text-gray-600 mb-6">1x Coffee Item</Text>

      <Link href="/delivery" asChild>
        <Pressable className="bg-green-600 px-6 py-3 rounded-xl">
          <Text className="text-white font-semibold">Proceed to Delivery</Text>
        </Pressable>
      </Link>
    </View>
  );
}
