"use client"

import grabUsername from "@/actions/grabUsername"
import RightArrow from "@/components/SVGs/RightArrow"
import { FC, useState } from "react"
import { IUsernameFormProps } from "./UsernameForm.types"
import { redirect } from "next/navigation"
import SubmitButton from "@/components/Buttons/SubmitButton"

const UsernameForm: FC<IUsernameFormProps> = ({ desiredUsername }) => {
  const [taken, setTaken] = useState<boolean>(false)
  async function handleSubmit(formData: FormData) {
    const result = await grabUsername(formData)
    setTaken(result === false)
    if (result) {
      redirect(`/account?created=${formData.get("username")}`)
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab your username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          className="block p-2 mx-auto border w-full mb-2 text-center"
          type="text"
          placeholder="username"
          defaultValue={desiredUsername}
          name="username"
        />
        {!!taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            This username is taken
          </div>
        )}
        <SubmitButton>
          <span>Claim your username</span>
          <RightArrow />
        </SubmitButton>
      </div>
    </form>
  )
}

export default UsernameForm
