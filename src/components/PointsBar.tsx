import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PointsBar({ points }: { points: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food Points: {points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffe0b2",
    marginBottom: 12,
  },
  label: { fontSize: 16, fontWeight: "600" },
});
