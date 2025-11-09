import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = "";

  const addTask = () => {
    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setText("");
    console.log("Add task");
  };
  return (
    <View style={styles.container}>
      <Text>Let's do it!</Text>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTask}
        />
        <Pressable onPress={() => addTask}>
          <Text onPress={setTasks}>Add task</Text>
        </Pressable>
      </View>

      <View>
        <View>
          <Pressable>
            <Text>Done</Text>
          </Pressable>

          <Text>Task</Text>

          <Pressable>
            <Text>Delete</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
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
