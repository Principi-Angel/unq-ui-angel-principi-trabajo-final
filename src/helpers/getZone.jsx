import { ZONES } from "./zones";

export function getZone(timeLeft) {

    if (timeLeft === null)
        return ZONES.IDLE;

    switch (timeLeft) {

        case 15: return ZONES.GREEN_1;
        case 14: return ZONES.GREEN_2;
        case 13: return ZONES.GREEN_3;
        case 12: return ZONES.GREEN_4;
        case 11: return ZONES.GREEN_5;

        case 10: return ZONES.YELLOW_1;
        case 9:  return ZONES.YELLOW_2;
        case 8:  return ZONES.YELLOW_3;
        case 7:  return ZONES.YELLOW_4;
        case 6:  return ZONES.YELLOW_5;

        case 5:  return ZONES.RED_1;
        case 4:  return ZONES.RED_2;
        case 3:  return ZONES.RED_3;
        case 2:  return ZONES.RED_4;
        default: return ZONES.RED_5;
    }
}