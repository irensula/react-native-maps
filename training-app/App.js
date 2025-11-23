import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const canAdd = text.trim().length > 0;

  const addTask = () => {
    if (!canAdd) return;

    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setText("");
    console.log("Add task");
  };

  const removeTask = (id) => {
    const newList = tasks.filter((item) => item.id !== id);
    setTasks(newList);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable onLongPress={() => removeTask(item.id)}>
        <Text>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Let's do it!</Text>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTask}
          style={styles.inputWrapper}
        />
        <Pressable onPress={addTask}>
          <Text>Add task</Text>
        </Pressable>
      </View>

      <View>
        <View>
          <FlatList
            data={tasks}
            style={styles.list}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputWrapper: {
    borderWidth: 2,
    borderColor: "#000",
  },
  list: {
    width: 100,
    height: 100,
  },
});
