import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Audio from "./components/Audio";

export default function App() {
  const [audioSource, setAudioSource] = useState(null);

  return (
    <View style={styles.container}>
      {/* window 1 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
        </Pressable>
      </View>
      {/* window 2 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
        </Pressable>
      </View>
      {/* window 3 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
        </Pressable>
      </View>
      {/* window 4 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
        </Pressable>
      </View>
      {/* window 5 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
        </Pressable>
      </View>
      {/* window 6 */}
      <View style={styles.window}>
        <Pressable>
          <Audio audioSource={audioSource} imageSource={imageSource} />
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
