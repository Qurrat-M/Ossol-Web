import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";

import Button from "../../../components/ui/Button";
import OtpInput from "./OtpInput";
import FormHeader from "./FormHeader";
import OtpInfo from "./OtpInfo";

import type { SubmitHandler } from "react-hook-form";
import { otpSchema, type OtpFormInputType } from "../otpSchema";

export default function TwoFactorAuthForm() {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<OtpFormInputType>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otpCode: ["", "", "", "", "", ""],
        },
    });

    const [timeLeft, setTimeLeft] = useState(180);
    const maskedEmail = "mus*****@example.com";

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`;
    };

    const onSubmit: SubmitHandler<OtpFormInputType> = (data) => {
        const otpString = data.otpCode.join("");
        console.log("OTP submitted:", otpString);
        navigate({ to: "/dashboard" });
    };

    return (
        <div className="flex justify-center w-full px-4 md:px-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md space-y-6"
            >
                {/* Header */}
                <div className="text-left">
                    <FormHeader
                        title="Two-Factor Authentication"
                        subtitle="Join the next generation of AI-Powered cybersecurity"
                    />
                    <hr className="border-gray-300 mt-2" />
                </div>

                {/* OTP info */}
                <div className="text-left">
                    <OtpInfo maskedEmail={maskedEmail} />
                </div>

                {/* OTP Inputs */}
                {/* OTP Inputs */}
                <div className="text-center md:text-left">
                    <OtpInput register={register} name="otpCode" />
                </div>



                {/* Timer */}
                <p className="text-sm text-gray-500 mt-2 text-center">
                    Code expires in: {formatTime(timeLeft)}
                </p>

                {/* Submit button */}
                <Button type="submit" className="w-full">
                    Verify Code
                </Button>

                {/* Resend link */}
                <div className="text-center text-sm">
                    <p className="text-gray-500">
                        Didn't receive the code?
                        <a
                            href="#"
                            className="text-primary hover:underline font-semibold ml-1"
                        >
                            Resend
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
