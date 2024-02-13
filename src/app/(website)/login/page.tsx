import LoginWithGoogle from "@/components/Buttons/LoginWithGoogle"
import { FC } from "react"

const LoginPage: FC = () => {
  return (
    <section>
      <div className="p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Sign In</h1>
        <p className="text-center mb-6 text-gray-500">
          Sign in to your account using one of the methods below
        </p>
        <LoginWithGoogle />
      </div>
    </section>
  )
}

export default LoginPage
