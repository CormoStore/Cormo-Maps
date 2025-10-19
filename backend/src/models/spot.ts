import { v4 as uuidv4 } from "uuid";

type Location = {
  latitude: number;
  longitude: number;
  description?: string;
  city?: string;
};

type Spot = {
  id: string;
  name: string;
  type: string;
  location: Location;
  regulations?: string;
  tips?: string;
  image?: string;
};

const SAMPLE_SPOTS: Spot[] = [
  {
    id: "1",
    name: "Lake Blue",
    type: "Freshwater - Lake",
    location: { latitude: 37.769, longitude: -122.446, city: "San Francisco" },
    regulations: "Catch & release recommended. Seasonal restrictions apply.",
    tips: "Early morning with live bait.",
    image: ""
  },
  {
    id: "2",
    name: "Rocky Shore",
    type: "Saltwater - Shore",
    location: { latitude: 37.804, longitude: -122.410, description: "North pier" },
    regulations: "Tide-dependent; check local tide charts.",
    tips: "Low tide exposes more rock pools.",
    image: ""
  }
];

class InMemorySpotStore {
  private spots: Spot[];

  constructor(seed: Spot[] = []) {
    this.spots = seed;
  }

  getAll() {
    return this.spots;
  }

  getById(id: string) {
    return this.spots.find(s => s.id === id) || null;
  }

  create(payload: Partial<Spot>) {
    if (!payload.name || !payload.location) throw new Error("name and location are required");
    const newSpot: Spot = {
      id: uuidv4(),
      name: payload.name,
      type: payload.type || "Unknown",
      location: payload.location as Location,
      regulations: payload.regulations || "",
      tips: payload.tips || "",
      image: payload.image || ""
    };
    this.spots.push(newSpot);
    return newSpot;
  }
}

export const SpotStore = new InMemorySpotStore(SAMPLE_SPOTS);