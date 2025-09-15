import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";

const coffeeData: any = {
  "1": { title: "Espresso", price: "Ksh 2,000", image: require("../../assets/images/espresso.png") },
  "2": { title: "Caramel Latte", price: "Ksh 3,000", image: require("../../assets/images/latte.png") },
  "3": { title: "Cappuccino", price: "Ksh 3,500", image: require("../../assets/images/cappuccino.png") },
};

export default function CoffeeDetail() {
  const { id } = useLocalSearchParams();
  const coffee = coffeeData[id as string];

  if (!coffee) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Coffee not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Image source={coffee.image} className="w-full h-60 rounded-lg" resizeMode="cover" />
      <Text className="text-3xl font-bold mt-4">{coffee.title}</Text>
      <Text className="text-xl text-gray-500 mt-2">{coffee.price}</Text>

      <Link href="/order" asChild>
        <Pressable className="bg-amber-600 p-4 rounded-xl mt-6">
          <Text className="text-white text-center font-semibold">Order Now</Text>
        </Pressable>
      </Link>
    </View>
  );
}
