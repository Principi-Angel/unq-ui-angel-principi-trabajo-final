import { ZONES } from "./zones";

export function getZone(timeLeft) {
  if (timeLeft === null) return ZONES.IDLE;
  if (timeLeft > 10) return ZONES.SAFE;
  if (timeLeft > 5) return ZONES.WARNING;
  return ZONES.DANGER;                   
}
