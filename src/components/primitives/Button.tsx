"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "default";
  className?: string;
  type?: "button" | "submit";
};
export function Button({ children, href, onClick, variant = "default", className, type = "button" }: Props) {
  const cls = cn("btn", variant === "primary" && "btn-primary", variant === "ghost" && "btn-ghost", className);
  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={cls}>{children}</Link>
      </motion.div>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={cls}>
      {children}
    </motion.button>
  );
}