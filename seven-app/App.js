import { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import images from "./components/images";
import SoundImage from "./components/SoundImage";
import sounds from "./components/sounds";

const { width } = Dimensions.get("window");
const CLOUD_WIDTH1 = 130;
const CLOUD_WIDTH2 = 100;

export default function App() {
  const cloudAnim1 = useRef(new Animated.Value(-CLOUD_WIDTH1)).current;
  const cloudAnim2 = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(cloudAnim1, {
        toValue: width + CLOUD_WIDTH1,
        duration: 12000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(cloudAnim2, {
        toValue: -CLOUD_WIDTH2,
        duration: 15000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Animated.Image
        source={require("./assets/cloud1.png")}
        style={[styles.cloud1, { transform: [{ translateX: cloudAnim1 }] }]}
      />
      <Animated.Image
        source={require("./assets/cloud2.png")}
        style={[styles.cloud2, { transform: [{ translateX: cloudAnim2 }] }]}
      />

      <View style={styles.house}>
        {images.map((img, index) => (
          <SoundImage key={index} img={img} sound={sounds[index]} />
        ))}
      </View>

      <View style={styles.grass}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
  },
  cloud1: {
    width: CLOUD_WIDTH1,
    zIndex: 10,
    height: 70,
    elevation: 10,
    overflow: "visible",
    position: "absolute",
    top: 50,
    left: 0,
  },
  cloud2: {
    width: CLOUD_WIDTH2,
    zIndex: 10,
    height: 55,
    elevation: 10,
    overflow: "visible",
    position: "absolute",
    top: 120,
    left: 0,
  },
  house: {
    backgroundColor: "#e1be9b",
    width: "70%",
    height: 500,
    borderColor: "#000",
    borderWidth: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 0,
    paddingTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  grass: {
    backgroundColor: "green",
    borderTopColor: "#000",
    borderTopWidth: 3,
    height: 100,
    width: "100%",
  },
});
