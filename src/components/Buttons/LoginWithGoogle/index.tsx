"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FC } from "react"
import { ILoginWithGoogleProps } from "./LoginWithGoogle.types"
import { signIn } from "next-auth/react"

const LoginWithGoogle: FC<ILoginWithGoogleProps> = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white shadow text-center w-full py-4 px-3 flex gap-3 items-center justify-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      Sign In with Google
    </button>
  )
}

export default LoginWithGoogle
