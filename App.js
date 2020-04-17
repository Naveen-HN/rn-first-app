import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [output, current] = useState("Hello World!");
  return (
    <View style={styles.container}>
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
