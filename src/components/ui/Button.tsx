import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base = "w-full px-4 py-3 rounded-md font-semibold transition-colors duration-200";
    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };

    return (
        <button
            {...props}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}