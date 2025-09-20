import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    // allow react-hook-form register props
    register?: UseFormRegisterReturn;
}

export default function Input({
    label,
    className = "",
    error,
    register,
    ...props
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                {...props}
                {...register}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 
          text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 
          focus:ring-blue-500 focus:border-blue-500 ${className}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
