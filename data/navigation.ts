import { NavigationType } from "@/types/navigation.type";
import HouseIcon from "@/assets/icons/house.svg";
import RouteIcon from "@/assets/icons/route.svg";
import GamepadIcon from "@/assets/icons/gamepad.svg";
import ChartIcon from "@/assets/icons/bar-chart.svg";

export const navLinks: NavigationType[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: HouseIcon,
  },
  {
    id: 2,
    label: "Explore",
    path: "/explore",
    icon: RouteIcon,
  },
  {
    id: 3,
    label: "Library",
    path: "/library",
    icon: GamepadIcon,
  },
  {
    id: 4,
    label: "Summary",
    path: "/summary",
    icon: ChartIcon,
  },
];
