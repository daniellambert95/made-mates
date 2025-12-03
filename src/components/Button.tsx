import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export default function Button({ variant = "secondary", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-opacity-90 focus:ring-secondary",
        outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
