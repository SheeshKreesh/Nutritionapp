import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Quest = {
  id: string;
  title: string;
  description: string;
  rewardPoints: number;
  completed?: boolean;
};

export default function FoodQuestCard({ quest }: { quest: Quest }) {
  return (
    <View style={[styles.card, quest.completed && styles.completed]}>
      <Text style={styles.title}>{quest.title}</Text>
      <Text style={styles.description}>{quest.description}</Text>
      <Text style={styles.reward}>Reward: {quest.rewardPoints} pts</Text>
      {quest.completed && <Text style={styles.done}>Completed ✅</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginBottom: 8,
  },
  completed: {
    backgroundColor: "#d6f5d6",
  },
  title: { fontSize: 16, fontWeight: "600" },
  description: { fontSize: 14, marginTop: 4 },
  reward: { fontSize: 12, marginTop: 4, color: "#555" },
  done: { marginTop: 4, color: "#2e7d32", fontWeight: "600" },
});
