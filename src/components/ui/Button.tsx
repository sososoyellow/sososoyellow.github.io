import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = ({ variant = "primary", size = "md", children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  );
};

export default Button;
