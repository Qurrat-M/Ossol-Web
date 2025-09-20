import LoginForm from "../components/LoginForm";
import sideImage from "../../../assets/side right.png";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-screen flex flex-col md:grid md:grid-cols-2">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center bg-blue-900 p-4 md:p-0">
                <img
                    src={sideImage}
                    alt="Side illustration"
                    className="object-contain max-h-64 md:max-h-screen w-full"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="flex justify-center items-center flex-1 p-6">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
