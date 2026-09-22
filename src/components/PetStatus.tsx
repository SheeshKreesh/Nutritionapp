import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Pet = {
  stage: "baby" | "teen" | "adult";
  energy: number;
};

export default function PetStatus({ pet }: { pet: Pet }) {
  const petImage =
    pet.stage === "baby"
      ? require("../../assets/pet-baby.png")
      : pet.stage === "teen"
      ? require("../../assets/pet-teen.png")
      : require("../../assets/pet-adult.png");

  return (
    <View style={styles.container}>
      <Image source={petImage} style={styles.image} />
      <View>
        <Text style={styles.label}>Stage: {pet.stage}</Text>
        <Text style={styles.label}>Energy: {pet.energy}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  image: { width: 80, height: 80, marginRight: 12 },
  label: { fontSize: 16 },
});
