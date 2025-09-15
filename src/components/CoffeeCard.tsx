import { View, Text, Image, Pressable } from "react-native";

type CoffeeCardProps = {
  title: string;
  price: string;
  image: any;
  onPress?: () => void;
};

export default function CoffeeCard({ title, price, image, onPress }: CoffeeCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl shadow p-3 m-2 w-40"
    >
      <Image source={image} className="w-full h-24 rounded-lg" resizeMode="cover" />
      <Text className="text-lg font-semibold mt-2">{title}</Text>
      <Text className="text-gray-500">{price}</Text>
    </Pressable>
  );
}
