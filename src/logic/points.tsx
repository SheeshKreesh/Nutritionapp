import { addEnergy } from "./petState";

let totalPoints = 0;

export function getTotalPoints() {
  return totalPoints;
}

type MealInfo = {
  colors: string[];
  varietyScore: number;
};

export function awardPointsForMeal(meal: MealInfo) {
  const colorPoints = meal.colors.length * 2;
  const varietyPoints = meal.varietyScore * 3;
  const basePoints = 5;

  const earned = basePoints + colorPoints + varietyPoints;

  totalPoints += earned;
  addEnergy(Math.round(earned / 2));
}
