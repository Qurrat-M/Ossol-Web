import { useState } from "react";
import { EyeIcon as SolidEyeIcon, EyeSlashIcon as SolidEyeSlashIcon } from "@heroicons/react/24/solid";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register?: UseFormRegisterReturn;
    error?: string;
}

export default function PasswordField({
    label,
    register,
    error,
    ...props
}: PasswordFieldProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...props}
                    {...register}
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 
            text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 
            focus:ring-blue-500 focus:border-blue-500 pr-10`}
                />
                <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
                    onClick={() => setShow(!show)}
                >
                    {show ? (
                        <SolidEyeIcon className="h-5 w-5" />
                    ) : (
                        <SolidEyeSlashIcon className="h-5 w-5" />
                    )}
                </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
