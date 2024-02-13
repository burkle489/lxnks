"use client"

import { FC, useEffect } from "react"
import { IHeroFormProps } from "./HeroForm.types"
import { signIn, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"

const HeroForm: FC<IHeroFormProps> = () => {
  const session = useSession()
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = e.target
    const input = form.querySelector("input")
    const username = input.value
    if (username.length > 0) {
      if (!!session) {
        router.push(`/account?desiredUsername=${username}`)
      } else {
        await signIn("google", {
          callbackUrl: `/account?desiredUsername=${username}`,
        })
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-gray-700/20 shadow-lg"
    >
      <span className="bg-white py-3 pl-4">lxnks.to/</span>
      <input type="text" className=" py-3" placeholder="username" />
      <button type="submit" className="bg-blue-500 text-white py-3 px-4">
        Join for free
      </button>
    </form>
  )
}

export default HeroForm
