import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PetStatus from "../components/PetStatus";
import PointsBar from "../components/PointsBar";
import FoodQuestCard from "../components/FoodQuestCard";
import { getTodayQuests } from "../logic/quests";
import { getTotalPoints } from "../logic/points";
import { getPetState } from "../logic/petState";

export default function HomeScreen() {
  const pet = getPetState();
  const points = getTotalPoints();
  const quests = getTodayQuests();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Friends</Text>
      <PetStatus pet={pet} />
      <PointsBar points={points} />
      <Text style={styles.subtitle}>Today’s Food Quests</Text>
      {quests.map((q) => (
        <FoodQuestCard key={q.id} quest={q} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: "600", marginTop: 16, marginBottom: 8 },
});
