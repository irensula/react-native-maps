import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";

export default function Audio({ audioSource, imageSource }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/${audioSource}`)
    );
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
    <Pressable>
      <Image source={imageSource} title="Play Sound" onPress={playSound} />
    </Pressable>
  );
}
