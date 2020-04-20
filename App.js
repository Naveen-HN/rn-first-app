import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [output, current] = useState("Hello World!");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          placeholder="Enter text here"
          style={{ width: "70%", borderColor: "black", borderWidth: 1 }}
        />
        <Button title="Add" />
      </View>
      <Text>{output}</Text>
      <Button
        title="Click me to change"
        onPress={() => current("This is my first app")}
      />
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
