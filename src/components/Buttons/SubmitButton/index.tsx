"use client"

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut, useSession } from "next-auth/react"
import { FC } from "react"
import { ISubmitButtonProps } from "./SubmitButton.types"
import RightArrow from "@/components/SVGs/RightArrow"
import { useFormStatus } from "react-dom"

const SubmitButton: FC<ISubmitButtonProps> = ({ children }) => {
  const { pending } = useFormStatus()
  const session = useSession()
  return (
    <button
      disabled={pending}
      className="bg-blue-500 text-white py-2 px-4 mx-auto  w-full flex gap-2 items-center justify-center disabled:bg-blue-300 disabled:text-grey-200"
      type="submit"
    >
      {children}
    </button>
  )
}

export default SubmitButton
