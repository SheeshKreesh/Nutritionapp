import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { getPetState, evolvePet } from "../logic/petState";

export default function PetScreen() {
  const pet = getPetState();

  const petImage =
    pet.stage === "baby"
      ? require("../../assets/pet-baby.png")
      : pet.stage === "teen"
      ? require("../../assets/pet-teen.png")
      : require("../../assets/pet-adult.png");

  const handleEvolve = () => {
    const evolved = evolvePet();
    if (evolved) {
      alert("Your pet evolved! 🎉");
    } else {
      alert("Keep logging meals to evolve your pet!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Food Friend</Text>
      <Image source={petImage} style={styles.image} />
      <Text style={styles.stage}>Stage: {pet.stage}</Text>
      <Text style={styles.energy}>Energy: {pet.energy}</Text>
      <Button title="Try to evolve" onPress={handleEvolve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  image: { width: 180, height: 180, marginBottom: 16 },
  stage: { fontSize: 18, marginBottom: 8 },
  energy: { fontSize: 16, marginBottom: 16 },
});
