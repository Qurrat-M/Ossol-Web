import type { UseFormRegister } from "react-hook-form";
import type { OtpFormInputType } from "../otpSchema";

interface OtpInputProps {
  register: UseFormRegister<OtpFormInputType>;
  name: "otpCode";
}

export default function OtpInput({ register, name }: OtpInputProps) {
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          type="tel"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          {...register(`${name}.${i}`, {
            value: "",
            onChange: (e) => {
              e.currentTarget.value = e.currentTarget.value.slice(0, 1);
            },
          })}
          className="
            w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
            text-center
            border-2 border-primary
            rounded
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
            transition
            placeholder-gray-300
          "
        />
      ))}
    </div>
  );
}
