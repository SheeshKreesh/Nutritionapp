import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FoodQuestCard from "../components/FoodQuestCard";
import { getTodayQuests } from "../logic/quests";

export default function QuestsScreen() {
  const quests = getTodayQuests();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today’s Food Quests</Text>
      {quests.map((q) => (
        <FoodQuestCard key={q.id} quest={q} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
