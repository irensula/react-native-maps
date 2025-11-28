import { useRef } from "react";
import { Pressable, Animated, Image } from "react-native";
import { useAudioPlayer } from "expo-audio";

const SoundImage = ({ img, sound }) => {
  const player = useAudioPlayer(sound);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotate = () => {
    Animated.sequence([
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: -1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-15deg", "15deg"], // rotate between -15° and 15°
  });

  return (
    <Pressable
      onPress={() => {
        player.seekTo(0);
        player.play();
        rotate();
      }}
    >
      <Animated.Image
        source={img}
        style={[
          {
            width: 100,
            height: 100,
            margin: 10,
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 15,
          },
          { transform: [{ rotate: rotateInterpolate }] },
        ]}
      />
    </Pressable>
  );
};

export default SoundImage;
