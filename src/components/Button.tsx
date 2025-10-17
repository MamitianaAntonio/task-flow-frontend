import React, { useState } from "react";
import { clsx } from "clsx";

interface ButtonProps {
  text: React.ReactNode;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  onClick?: () => void;
  className?: string;
}

const colorMap: Record<string, string> = {
  primary: "#3B82F6",
  secondary: "#E081C1",
  tertiary: "#10B981",
  light: "#F8FAFC",
  dark: "#1E293B",
};

export default function Button({
  text,
  type = "button",
  bgColor = "primary",
  hoverColor = "secondary",
  textColor = "light",
  onClick,
  className,
}: ButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const normalBg = colorMap[bgColor] ?? bgColor;
  const hoverBg = colorMap[hoverColor] ?? hoverColor;
  const textCol = colorMap[textColor] ?? textColor;

  return (
    <button
      className={clsx(
        "text-[16px] px-4 py-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out font-quicksand font-bold active:scale-90",
        className
      )}
      style={{
        backgroundColor: isHover ? hoverBg : normalBg,
        color: textCol,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
