"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  magnetic?: boolean;
  ariaLabel?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-aurora-gradient bg-[length:200%_auto] text-white shadow-glow hover:shadow-glow-purple hover:bg-right",
  secondary: "glass text-text-primary hover:bg-hairline/10",
  ghost: "text-text-secondary hover:text-text-primary",
  outline:
    "border border-hairline/20 text-text-primary hover:border-primary hover:bg-primary/10",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  magnetic = true,
  ariaLabel,
  external,
}: ButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
