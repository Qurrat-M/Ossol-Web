interface OtpInfoProps {
  maskedEmail: string;
}

export default function OtpInfo({ maskedEmail }: OtpInfoProps) {
  return (
    <div className="space-y-1 text-center md:text-left">
      <p className="text-sm text-gray-600 font-bold">Enter Verification Code</p>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 text-gray-700">
        <p className="text-sm mb-0">
          We've sent a 6-digit code to your email address
        </p>
        <p className="text-sm font-semibold mb-0">{maskedEmail}</p>
      </div>
    </div>
  );
}
