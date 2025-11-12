import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";

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
    Alert.alert('Delete task?', 'This cannot be undone',
                [{text: 'Cancel', style: 'cancel'},
                 {text: 'Delete', style: 'Delete', onPress: ()=> setTask{prev => prev.filter(t=> t.id != id)}]
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
          <FlatList data={tasks} style={styles.list} />
          <Pressable>
            <Text>Done</Text>
          </Pressable>

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
    backgroundColor: "red",
  },
  list: {
    width: 100,
    backgroundColor: "green",
    height: 100,
  },
});
