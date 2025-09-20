import { createLazyFileRoute } from '@tanstack/react-router'
import OTPPage from '../features/auth/pages/OTPPage'

export const Route = createLazyFileRoute('/otp')({
  component: OTPPage,
})


