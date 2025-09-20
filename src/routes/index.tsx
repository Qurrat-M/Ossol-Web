import { createFileRoute } from "@tanstack/react-router"
import "../index.css"
import LoginPage from "../features/auth/pages/LoginPage"

export const Route = createFileRoute('/')({
  component: LoginPage,
})

