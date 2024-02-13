"use client"

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut, useSession } from "next-auth/react"
import { FC } from "react"
import { ILogoutButtonProps } from "./LogoutButton.types"

const LogoutButton: FC<ILogoutButtonProps> = ({
  className = "flex items-center gap-2 border p-2 px-4 shadow",
}) => {
  const session = useSession()
  return (
    <button onClick={() => signOut()} className={className}>
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />
    </button>
  )
}

export default LogoutButton
