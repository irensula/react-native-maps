import { View, Text } from "react-native";
import users from "../db/db";

const HomeScreen = () => {
  console.log("Users: ", users);
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
