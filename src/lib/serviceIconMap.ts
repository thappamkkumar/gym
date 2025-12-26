import {
  Dumbbell,
  Medal,
  HeartPulse,
  PersonStanding,
  Activity,
  Zap,
} from "lucide-react";
import type { ElementType } from "react";

export const serviceIconMap: Record<string, ElementType> = {
  strength: Dumbbell,
  personal: Medal,
  cardio: HeartPulse,
  yoga: PersonStanding,
  functional: Activity,
  hiit: Zap,
};
