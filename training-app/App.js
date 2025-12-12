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

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => toggleTask(item.id)}
        onLongPress={() => removeTask(item.id)}
      >
        <Text>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Let's do it!</Text>
      <View>
        <TextInput
          placeholder="What to do?"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTask}
          style={styles.inputWrapper}
          returnKeyType="done"
        />
        <Pressable onPress={addTask} disabled={!canAdd}>
          <Text>Add task</Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.list}
          ListEmptyComponent={<Text>Not tasks yet</Text>}
        />
      </View>
    </View>
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
