import { Request, Response } from "express";
import { SpotStore } from "../models/spot";

export function getAllSpots(_req: Request, res: Response) {
  res.json(SpotStore.getAll());
}

export function getSpotById(req: Request, res: Response) {
  const { id } = req.params;
  const spot = SpotStore.getById(id);
  if (!spot) return res.status(404).json({ message: "Spot not found" });
  return res.json(spot);
}

export function createSpot(req: Request, res: Response) {
  const data = req.body;
  try {
    const created = SpotStore.create(data);
    return res.status(201).json(created);
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
}