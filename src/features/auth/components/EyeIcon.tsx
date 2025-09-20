import { EyeIcon as SolidEyeIcon, EyeSlashIcon as SolidEyeSlashIcon } from "@heroicons/react/24/solid";

interface EyeIconProps {
    onClick: () => void;
    isOpen: boolean;
}

const EyeIcon: React.FC<EyeIconProps> = ({ onClick, isOpen }) => {
    return (
        <div
            className="cursor-pointer text-gray-400 hover:text-gray-500"
            onClick={onClick}
        >
            {isOpen ? (
                <SolidEyeIcon className="h-5 w-5" />
            ) : (
                <SolidEyeSlashIcon className="h-5 w-5" />
            )}
        </div>
    );
};

export default EyeIcon;
