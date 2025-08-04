import { ComponentType, SVGProps } from "react";

export type NavigationType = {
  id: number;
  label: string;
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
