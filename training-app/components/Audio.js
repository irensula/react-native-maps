import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Button } from "react-native";

export default function Audio() {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Misto.mp3")
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
  return <Button title="Play Sound" onPress={playSound} />;
}
