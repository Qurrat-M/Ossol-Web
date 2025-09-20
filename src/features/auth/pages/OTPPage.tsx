import sideImage from "../../../assets/side right.png";
import TwoFactorAuthForm from "../components/TwoFactorAuthForm";

export default function OTPPage() {
    return (
        <div className="min-h-screen w-screen flex flex-col md:grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center bg-blue-900 p-4 md:p-0">
                <img
                    src={sideImage}
                    alt="Side illustration"
                    className="object-contain w-full h-64 md:h-full md:max-h-screen"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="flex justify-center items-center p-6 md:p-12">
                <div className="w-full max-w-md">
                    <TwoFactorAuthForm />
                </div>
            </div>
        </div>
    );
}
