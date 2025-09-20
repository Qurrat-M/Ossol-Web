// components/FormHeader.tsx
interface FormHeaderProps {
    title: string;
    subtitle: string;
}

export default function FormHeader({ title, subtitle }: FormHeaderProps) {
    return (
        <div className="text-left">
            <h2 className="text-xl font-bold text-gray-800">
                {title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
                {subtitle}
            </p>
        </div>
    );
}