import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const canAdd = text.trim().length > 0;
  const stats = useMemo(() => {
    const done = todos.filter((t) => t.done).length;
    return { total: todos.length, done };
  }, [todos]);

  const addTodo = () => {
    if (!canAdd) return;
    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const removeTodo = (id) => {
    Alert.alert("Delete todo?", "This cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setTodos((prev) => prev.filter((t) => t.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => toggleTodo(item.id)}
      onLongPress={() => removeTodo(item.id)}
      style={styles.todoRow}
    >
      <Text style={[styles.todoText, item.done && styles.todoDone]}>
        {item.text}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mini Todo</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="What to do?"
          value={text}
          onChangeText={setText}
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={addTodo}
        />
        <Pressable
          onPress={addTodo}
          disabled={!canAdd}
          style={[styles.addBtn, !canAdd && styles.addBtnDisabled]}
        >
          <Text style={styles.addBtnText}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.counter}>
        {stats.total} total • {stats.done} done
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>No todos yet</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 12 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  addBtn: {
    paddingHorizontal: 16,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a84ff",
  },
  addBtnDisabled: { opacity: 0.5 },
  addBtnText: { color: "white", fontWeight: "600" },
  counter: { marginBottom: 8, color: "#666" },
  list: { paddingVertical: 8 },
  todoRow: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#eee",
  },
  todoText: { fontSize: 16 },
  todoDone: { textDecorationLine: "line-through", color: "#999" },
  empty: { textAlign: "center", color: "#999", marginTop: 24 },
});
