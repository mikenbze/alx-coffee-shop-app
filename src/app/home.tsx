import { View, FlatList, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

const coffees = [
  { id: "1", title: "Espresso", price: "Ksh 2,000", image: require("../assets/images/espresso.png") },
  { id: "2", title: "Caramel Latte", price: "Ksh 3,000", image: require("../assets/images/latte.png") },
  { id: "3", title: "Cappuccino", price: "Ksh 3,500", image: require("../assets/images/cappuccino.png") },
];

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Our Coffees</Text>
      <FlatList
        data={coffees}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Link href={`/item/${item.id}`} asChild>
            <Pressable className="bg-white m-2 p-3 rounded-xl w-[45%] shadow">
              <Image source={item.image} className="w-full h-28 rounded-lg" resizeMode="cover" />
              <Text className="text-lg font-semibold mt-2">{item.title}</Text>
              <Text className="text-gray-500">{item.price}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
