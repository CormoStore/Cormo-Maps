import { Router } from "express";
import { getAllSpots, getSpotById, createSpot } from "../controllers/spotsController";

const router = Router();

router.get("/", getAllSpots);
router.get("/:id", getSpotById);
router.post("/", createSpot);

export default router;