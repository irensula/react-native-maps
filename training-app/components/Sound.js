import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";

export default function Sound({ audioSource, imageSource }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audioSource);
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <Pressable onPress={playSound}>
      <Image source={imageSource} title="Play Sound" />
    </Pressable>
  );
}
