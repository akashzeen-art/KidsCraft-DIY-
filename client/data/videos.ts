export interface Video {
  id: number;
  title: string;
  categoryKey: string;
  emoji: string;
  tryThisNext: string;
  thumbnail: string;
  videoUrl: string;
}

export interface Category {
  key: string;
  label: string;
  emoji: string;
  description: string;
  pastelBg: string;
  headerBg: string;
  accentColor: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
}

export const categories: Category[] = [
  {
    key: "paper",
    label: "Paper Crafts & Origami",
    emoji: "🦋",
    description: "Fold, cut and create magical paper crafts!",
    pastelBg: "bg-yellow-50",
    headerBg: "from-yellow-300 to-amber-200",
    accentColor: "bg-yellow-400",
    borderColor: "border-yellow-300",
    tagBg: "bg-yellow-100",
    tagText: "text-yellow-800",
  },
  {
    key: "animals",
    label: "Animals & Fun Characters",
    emoji: "🐰",
    description: "Make adorable animals and fun characters!",
    pastelBg: "bg-orange-50",
    headerBg: "from-orange-300 to-amber-200",
    accentColor: "bg-orange-400",
    borderColor: "border-orange-300",
    tagBg: "bg-orange-100",
    tagText: "text-orange-800",
  },
  {
    key: "creative",
    label: "Creative & Best Out of Waste",
    emoji: "🎨",
    description: "Turn everyday things into amazing crafts!",
    pastelBg: "bg-green-50",
    headerBg: "from-green-300 to-emerald-200",
    accentColor: "bg-green-500",
    borderColor: "border-green-300",
    tagBg: "bg-green-100",
    tagText: "text-green-800",
  },
  {
    key: "fun",
    label: "Fun & Interactive Crafts",
    emoji: "🎮",
    description: "Play and create at the same time!",
    pastelBg: "bg-blue-50",
    headerBg: "from-blue-300 to-sky-200",
    accentColor: "bg-blue-500",
    borderColor: "border-blue-300",
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
  },
];

export const videos: Video[] = [
  // 🦋 Paper Crafts & Origami
  {
    id: 1,
    title: "Origami 6",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 7",
    thumbnail: "/thumbnail/origami 6.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/8a27b907-41f4-42af-a661-5b7cd29f86e9/play_480p.mp4",
  },
  {
    id: 2,
    title: "Origami 7",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 8",
    thumbnail: "/thumbnail/origami 7.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/ec2cdb50-27ce-42e9-bbfb-032052c7df1b/play_480p.mp4",
  },
  {
    id: 3,
    title: "Origami 8",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 9",
    thumbnail: "/thumbnail/origami 8.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/8cb046a2-acc8-4e0b-996f-5ac4356022e5/play_480p.mp4",
  },
  {
    id: 4,
    title: "Origami 9",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 10",
    thumbnail: "/thumbnail/origami 9.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/fb8211f7-c380-4b72-b240-e86497dc3cfc/play_480p.mp4",
  },
  {
    id: 5,
    title: "Origami 10",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 11",
    thumbnail: "/thumbnail/origami 10.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/b8d203e8-e57f-48ad-a9f6-b97a2fb7bc3a/play_480p.mp4",
  },
  {
    id: 6,
    title: "Origami 11",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 12",
    thumbnail: "/thumbnail/origami 11.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/64d5e3b6-9539-4635-bb8d-46b9fc303138/play_480p.mp4",
  },
  {
    id: 7,
    title: "Origami 12",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 14",
    thumbnail: "/thumbnail/origami 12.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/a9ba8905-1ef7-4bd0-954d-2a9884e67cdd/play_480p.mp4",
  },
  {
    id: 8,
    title: "Origami 14",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 17",
    thumbnail: "/thumbnail/origami 14.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/bc114fdc-0b28-4500-89ac-df79247d4b38/play_480p.mp4",
  },
  {
    id: 9,
    title: "Origami 17",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 20",
    thumbnail: "/thumbnail/origami 17.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/dc073cf6-720f-480e-80a2-07b439bb22cc/play_480p.mp4",
  },
  {
    id: 10,
    title: "Origami 20",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 21",
    thumbnail: "/thumbnail/origami 20.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/89064699-2c02-41b7-b098-0a86565480a1/play_480p.mp4",
  },
  {
    id: 11,
    title: "Origami 21",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 22",
    thumbnail: "/thumbnail/origami 21.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/702e796c-d886-451e-ac2a-3a02bc7742c9/play_480p.mp4",
  },
  {
    id: 12,
    title: "Origami 22",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami 23",
    thumbnail: "/thumbnail/origami 22.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/ef1cd1fc-907c-4342-be95-7f6861cfda95/play_480p.mp4",
  },
  {
    id: 13,
    title: "Origami 23",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami Eng 1",
    thumbnail: "/thumbnail/origami 23.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/4264b37b-a6a4-4daa-928a-72de69d839cf/play_480p.mp4",
  },
  {
    id: 14,
    title: "Origami Eng 1",
    categoryKey: "paper",
    emoji: "🦋",
    tryThisNext: "Origami Flower",
    thumbnail: "/thumbnail/origami eng 1.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/614518ae-2afc-4d10-a9d0-5203b09d95fe/play_480p.mp4",
  },
  {
    id: 15,
    title: "Origami Flower",
    categoryKey: "paper",
    emoji: "🌸",
    tryThisNext: "How To Make A Paper Fan For Kids",
    thumbnail: "/thumbnail/Origami Flower.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/d8627990-d9fe-4430-bafe-5ec7c11e5e61/play_480p.mp4",
  },
  {
    id: 16,
    title: "How To Make A Paper Fan For Kids",
    categoryKey: "paper",
    emoji: "🌀",
    tryThisNext: "Origami 6",
    thumbnail: "/thumbnail/How to Make a Paper Fan for Kids.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/66576b3b-8d2b-4cd3-b3be-1b9eb4c362bf/play_480p.mp4",
  },

  // 🐰 Animals & Fun Characters
  {
    id: 17,
    title: "Fun Elephant With Moving Trunk",
    categoryKey: "animals",
    emoji: "🐘",
    tryThisNext: "Candy Cane Reindeer",
    thumbnail: "/thumbnail/Fun Elephant with moving trunk.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/927f894e-bd0f-4d94-846f-688af39aa7e5/play_480p.mp4",
  },
  {
    id: 18,
    title: "Candy Cane Reindeer",
    categoryKey: "animals",
    emoji: "🦌",
    tryThisNext: "Easter Craft For Children",
    thumbnail: "/thumbnail/Candy Cane Reindeer.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/ae155f9a-7f86-4237-bc97-fc3e15d4d33a/play_480p.mp4",
  },
  {
    id: 19,
    title: "Easter Craft For Children",
    categoryKey: "animals",
    emoji: "🐰",
    tryThisNext: "Fun Elephant With Moving Trunk",
    thumbnail: "/thumbnail/Easter Craft for Children.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/f3a088bf-70f9-4334-a9f6-7e030c4f2b3d/play_480p.mp4",
  },

  // 🎨 Creative & Best Out of Waste
  {
    id: 20,
    title: "Bangles Wall Hanging (Best Out Of Waste)",
    categoryKey: "creative",
    emoji: "📿",
    tryThisNext: "How To Make A Rocking Horse",
    thumbnail: "/thumbnail/Bangles Wall Hanging_Best out of waste.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/14c74db4-dcb7-4ecd-a424-c41c75f9290c/play_480p.mp4",
  },
  {
    id: 21,
    title: "How To Make A Rocking Horse",
    categoryKey: "creative",
    emoji: "🐴",
    tryThisNext: "Bangles Wall Hanging (Best Out Of Waste)",
    thumbnail: "/thumbnail/How to make a rocking horse.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/4bbc4670-30a7-428c-9184-57539b0f3f08/play_480p.mp4",
  },

  // 🎮 Fun & Interactive Crafts
  {
    id: 22,
    title: "Marble Maze Game",
    categoryKey: "fun",
    emoji: "🎮",
    tryThisNext: "Origami Flower",
    thumbnail: "/thumbnail/How To Make This Fun And Easy Marble Maze.mp4.jpg.jpeg",
    videoUrl: "https://vz-82b72733-9f2.b-cdn.net/726254a7-eb0a-4dc7-9e0f-95ea6c56dedb/play_480p.mp4",
  },
];

export const getCategoryByKey = (key: string): Category | undefined =>
  categories.find((c) => c.key === key);

export const getVideosByCategory = (key: string): Video[] =>
  videos.filter((v) => v.categoryKey === key);

// One featured video per category
export const featuredVideos: Video[] = [
  videos[14], // Origami Flower — Paper
  videos[16], // Fun Elephant — Animals
  videos[19], // Bangles Wall Hanging — Creative
  videos[21], // Marble Maze — Fun
];

// Craft of the day (fixed pick)
export const craftOfTheDay: Video = videos[17]; // Candy Cane Reindeer
