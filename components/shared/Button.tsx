import type { ReactNode } from "react";
type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  light?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children = "Contact Us",
  icon,
  iconPosition = "left",
  light = false,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const borderClass = light ? "light-button-border" : "dark-button-border";
  const buttonClass = light ? "light-button" : "dark-button";
  return (
    <div className={`w-fit ${borderClass}`}>
      <button
        className={`${buttonClass} text-nowrap w-full h-10 text-sm font-medium rounded-full flex items-center transition-all duration-300 ease-in-out hover:scale-105  justify-center gap-2 px-4 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {icon && iconPosition === "left" && (
          <span className="w-5 h-5 flex items-center justify-center">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="w-5 h-5 flex items-center justify-center">
            {icon}
          </span>
        )}
      </button>
    </div>
  );
};
