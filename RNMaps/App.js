import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Map from "./components/Map";
import Push from "./components/Push";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 100 }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Map />
      <Push />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
