import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../loginSchema";
import type { LoginSchemaType } from "../loginSchema";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Checkbox from "./Checkbox";
import PasswordField from "./PasswordField";
import { FormFooter } from "./FormFooter";
import { useNavigate } from "@tanstack/react-router";
import FormHeader from "./FormHeader";

export default function LoginForm() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    const onSubmit = (data: LoginSchemaType) => {
        console.log("Form data is valid:", data);
        // Use the navigate function to go to the '/otp' route
        navigate({ to: "/otp" });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-6">
           <FormHeader
                title="Welcome to the Invoicing Portal"
                subtitle="To get started, please set up your password and secure your account with two-factor authentication (2FA)."
            />

            <div className="space-y-4">
                {/* Email */}
                <Input
                    type="email"
                    label="Email"
                    placeholder="mutab.a9@gmail.com"
                    register={register("email")}
                    error={errors.email?.message}
                />

                {/* Password */}
                <PasswordField
                    label="Password"
                    register={register("password")}
                    error={errors.password?.message}
                />

                {/* Confirm Password */}
                <PasswordField
                    label="Confirm Password"
                    register={register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
                <Checkbox label="Remember me" />
                <a
                    href="#"
                    className="text-primary hover:text-primary/90 font-semibold hover:underline"
                >
                    Forgot Password?
                </a>
            </div>

            <Button type="submit">Confirm Password</Button>

            <FormFooter />
        </form>
    );
}
