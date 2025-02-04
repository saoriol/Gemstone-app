const gemstones = [
  {
    name: "Agate",
    color: "Varied",
    hardness: "6.5-7",
    chakra: "Varies",
    description: "Promotes emotional balance and stability. Enhances mental function and clarity. Provides strength and protection.",
    image: process.env.PUBLIC_URL + "/images/agate.webp"
  },
  {
    name: "Amazonite",
    color: "Green, Blue",
    hardness: "6-6.5",
    chakra: "Heart, Throat",
    description: "Soothes anxiety and stress. Enhances communication and expression. Promotes balance and harmony.",
    image: process.env.PUBLIC_URL + "/images/amazonite.webp"
  },
  {
    name: "Amethyst",
    color: "Purple",
    hardness: "7",
    chakra: "Third Eye, Crown",
    description: "Promotes calm and relaxation. Enhances spiritual awareness and intuition. Aids in breaking addictive behaviors.",
    image: process.env.PUBLIC_URL + "/images/amethyst.webp"
  },
  {
    name: "Aquamarine",
    color: "Blue",
    hardness: "7.5-8",
    chakra: "Throat",
    description: "Promotes calm and relaxation. Enhances communication and self-expression. Provides protection and courage.",
    image: process.env.PUBLIC_URL + "/images/aquamarine.webp"
  },
  {
    name: "Aventurine",
    color: "Green",
    hardness: "6.5-7",
    chakra: "Heart",
    description: "Attracts luck and abundance. Promotes emotional healing. Enhances decision-making abilities.",
    image: process.env.PUBLIC_URL + "/images/aventurine.webp"
  },
  {
    name: "Black Tourmaline",
    color: "Black",
    hardness: "7-7.5",
    chakra: "Root",
    description: "Provides protection against negative energy. Grounds and balances the body. Enhances emotional stability.",
    image: process.env.PUBLIC_URL + "/images/black_tourmaline.webp"
  },
  {
    name: "Bloodstone",
    color: "Green with Red Spots",
    hardness: "6.5-7",
    chakra: "Root, Heart",
    description: "Boosts energy and vitality. Enhances courage and strength. Promotes healing and detoxification.",
    image: process.env.PUBLIC_URL + "/images/bloodstone.webp"
  },
  {
    name: "Carnelian",
    color: "Orange, Red",
    hardness: "6.5-7",
    chakra: "Sacral, Root",
    description: "Boosts energy and motivation. Enhances creativity and passion. Promotes courage and confidence.",
    image: process.env.PUBLIC_URL + "/images/carnelian.webp"
  },
  {
    name: "Chrysocolla",
    color: "Blue-Green",
    hardness: "2-4",
    chakra: "Throat, Heart",
    description: "Promotes communication and self-expression. Enhances emotional healing. Encourages compassion and forgiveness.",
    image: process.env.PUBLIC_URL + "/images/chrysocolla.webp"
  },
  {
    name: "Citrine",
    color: "Yellow, Gold",
    hardness: "7",
    chakra: "Solar Plexus",
    description: "Attracts wealth and prosperity. Promotes positivity and joy. Enhances creativity.",
    image: process.env.PUBLIC_URL + "/images/citrine.webp"
  },
  {
    name: "Clear Quartz",
    color: "Clear",
    hardness: "7",
    chakra: "All Chakras",
    description: "Amplifies energy and intentions. Enhances clarity and focus. Aids in spiritual growth.",
    image: process.env.PUBLIC_URL + "/images/clear_quartz.webp"
  },
  {
    name: "Fluorite",
    color: "Purple, Green, Blue",
    hardness: "4",
    chakra: "Third Eye, Heart",
    description: "Enhances mental clarity and focus. Promotes spiritual growth and intuition. Protects against negative energies.",
    image: process.env.PUBLIC_URL + "/images/fluorite.webp"
  },
  {
    name: "Garnet",
    color: "Red, Brown",
    hardness: "6.5-7.5",
    chakra: "Root",
    description: "Boosts energy and vitality. Promotes passion and love. Enhances confidence and courage.",
    image: process.env.PUBLIC_URL + "/images/garnet.webp"
  },
  {
    name: "Hematite",
    color: "Metallic Grey",
    hardness: "5.5-6.5",
    chakra: "Root",
    description: "Provides grounding and stability. Enhances focus and concentration. Protects against negative energy.",
    image: process.env.PUBLIC_URL + "/images/hematite.webp"
  },
  {
    name: "Jade",
    color: "Green, White",
    hardness: "6-7",
    chakra: "Heart",
    description: "Attracts luck and prosperity. Promotes emotional healing. Enhances serenity and purity.",
    image: process.env.PUBLIC_URL + "/images/jade.webp"
  },
  {
    name: "Labradorite",
    color: "Blue, Green, Grey",
    hardness: "6-6.5",
    chakra: "Third Eye, Crown",
    description: "Enhances intuition and psychic abilities. Protects against negative energies. Promotes transformation and change.",
    image: process.env.PUBLIC_URL + "/images/labradorite.webp"
  },
  {
    name: "Lapis Lazuli",
    color: "Blue with Gold Flecks",
    hardness: "5-5.5",
    chakra: "Throat, Third Eye",
    description: "Enhances communication and self-expression. Promotes truth and honesty. Boosts intellectual abilities.",
    image: process.env.PUBLIC_URL + "/images/lapis_lazuli.webp"
  },
  {
    name: "Lepidolite",
    color: "Soft Purple",
    hardness: "2.5-4",
    chakra: "Heart, Third Eye, Crown",
    description: "Reduces stress and anxiety. Promotes emotional healing. Encourages tranquility and balance.",
    image: process.env.PUBLIC_URL + "/images/lepidolite.webp"
  },
  {
    name: "Malachite",
    color: "Green",
    hardness: "3.5-4",
    chakra: "Heart, Solar Plexus",
    description: "Promotes transformation and personal growth. Provides protection and healing. Enhances emotional balance.",
    image: process.env.PUBLIC_URL + "/images/malachite.webp"
  },
  {
    name: "Moonstone",
    color: "White, Peach, Blue",
    hardness: "6-6.5",
    chakra: "Third Eye, Crown",
    description: "Enhances intuition and emotional balance. Promotes new beginnings and personal growth. Aids in calming and stress relief.",
    image: process.env.PUBLIC_URL + "/images/moonstone.webp"
  },
  {
    name: "Rose Quartz",
    color: "Pink",
    hardness: "7",
    chakra: "Heart",
    description: "Encourages love and compassion. Heals emotional wounds. Promotes self-love.",
    image: process.env.PUBLIC_URL + "/images/rose_quartz.webp"
  },
  {
    name: "Tiger Eye",
    color: "Golden Brown",
    hardness: "6.5-7",
    chakra: "Solar Plexus, Root",
    description: "Provides protection and grounding. Enhances willpower and courage. Attracts good luck and prosperity.",
    image: process.env.PUBLIC_URL + "/images/tiger_eye.webp"
  },
  {
    name: "Turquoise",
    color: "Blue-Green",
    hardness: "5-6",
    chakra: "Throat, Heart",
    description: "Promotes healing and well-being. Enhances communication and expression. Provides protection and strength.",
    image: process.env.PUBLIC_URL + "/images/turquoise.webp"
  }
];

export default gemstones;
