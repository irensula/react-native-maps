import { StyleSheet, View, Pressable } from "react-native";
import Sound from "./components/Sound";
import audioSources from "./components/sounds";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.window}>
        <Pressable>
          {audioSources.map((obj, index) => {
            const soundFile = Object.values(obj)[0];
            return <Sound key={index} audioSource={soundFile} />;
          })}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
