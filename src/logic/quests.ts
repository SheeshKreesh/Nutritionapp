type Quest = {
  id: string;
  title: string;
  description: string;
  rewardPoints: number;
  completed?: boolean;
};

const todayQuests: Quest[] = [
  {
    id: "q1",
    title: "Eat something colorful",
    description: "Include at least one bright color in your meal.",
    rewardPoints: 10,
  },
  {
    id: "q2",
    title: "Try a new food",
    description: "Taste a food you don’t usually eat.",
    rewardPoints: 15,
  }
];

export function getTodayQuests(): Quest[] {
  return todayQuests;
}
