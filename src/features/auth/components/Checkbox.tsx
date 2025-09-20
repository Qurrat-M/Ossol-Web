import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Checkbox({ label, className = "", ...props }: CheckboxProps) {
    return (
        <label className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}>
            <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                {...props}
            />
            {label && <span>{label}</span>}
        </label>
    );
}