"use client"

import LogoutButton from "@/components/Buttons/LogoutButton"
import { faChartLine, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { FC } from "react"
import { IAppSidebarProps } from "./AppSidebar.types"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const AppSidebar: FC<IAppSidebarProps> = () => {
  const path = usePathname()
  return (
    <nav className="flex flex-col gap-4 text-center mt-8 ml-3">
      <Link
        href="/account"
        className={clsx("flex gap-4 text-gray-500 items-center", {
          "!text-blue-500 font-bold": path === "/account",
        })}
      >
        <FontAwesomeIcon icon={faFileLines} className="w-5 h-5" fixedWidth />
        <span>My Page</span>
      </Link>
      <Link
        href="/analytics"
        className={clsx("flex gap-4 text-gray-500 items-center", {
          "!text-blue-500 font-bold": path === "/analytics",
        })}
      >
        <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" fixedWidth />
        <span>Analytics</span>
      </Link>
      <LogoutButton
        className={
          "flex gap-4 items-center flex-row-reverse justify-end text-gray-500"
        }
      />
      <Link
        href="/"
        className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
        <span>Back to website</span>
      </Link>
    </nav>
  )
}

export default AppSidebar
