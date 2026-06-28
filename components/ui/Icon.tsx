"use client";

import {
  Globe,
  ShoppingCart,
  Code2,
  Palette,
  Sparkles,
  Wrench,
  Search,
  Rocket,
  Compass,
  PenTool,
  Zap,
  Shield,
  Gauge,
  Layers,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Code2,
  Palette,
  Sparkles,
  Wrench,
  Search,
  Rocket,
  Compass,
  PenTool,
  Zap,
  Shield,
  Gauge,
  Layers,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp size={size} className={className} />;
}
