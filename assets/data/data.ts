export type ItemData = {
  id: string;
  title: string;
  emoji: string;
  description?: string;
};

export const DATA: ItemData[] = [
  {
    id: "1",
    title: "Remember to update the README",
    emoji: "https://em-content.zobj.net/source/apple/419/memo_1f4dd.png",
    description: "Write ir very clearly can be really helpful!",
  },
  {
    id: "2",
    title: "Refactor your code",
    emoji: "https://em-content.zobj.net/source/apple/419/star-struck_1f929.png",
    description: "Improve legibility and organization on your project.",
  },
  {
    id: "3",
    title: "How to plan sprints?",
    emoji:
      "https://em-content.zobj.net/source/apple/419/chequered-flag_1f3c1.png",
    description: "Make sure you have everything organized for the next sprint.",
  },
  {
    id: "4",
    title: "Resolve conflicts from merge",
    emoji: "https://em-content.zobj.net/source/apple/419/handshake_1f91d.png",
    description: "Correct it on your main repository.",
  },
  {
    id: "5",
    title: "Depoly-ing",
    emoji: "https://em-content.zobj.net/source/apple/419/rocket_1f680.png",
    description: "Publish it to prod.",
  },
  {
    id: "6",
    title: "Daily participation",
    emoji: "https://em-content.zobj.net/source/apple/419/calendar_1f4c5.png",
    description: "Share your progress.",
  },
  {
    id: "7",
    title: "Implement tests",
    emoji: "https://em-content.zobj.net/source/apple/419/test-tube_1f9ea.png",
    description: "Add unity tests for critical functions.",
  },
];
