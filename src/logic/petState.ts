type PetStage = "baby" | "teen" | "adult";

type PetState = {
  stage: PetStage;
  energy: number;
};

let petState: PetState = {
  stage: "baby",
  energy: 0,
};

export function getPetState(): PetState {
  return petState;
}

export function addEnergy(amount: number) {
  petState = { ...petState, energy: petState.energy + amount };
}

export function evolvePet(): boolean {
  if (petState.stage === "baby" && petState.energy >= 20) {
    petState = { ...petState, stage: "teen" };
    return true;
  }
  if (petState.stage === "teen" && petState.energy >= 50) {
    petState = { ...petState, stage: "adult" };
    return true;
  }
  return false;
}
