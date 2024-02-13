import UsernameForm from "@/components/Forms/UsernameForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { Page } from "@/models/Page"
import mongoose from "mongoose"

const AccountPage = async (searchParams, ...rest) => {
  const session = await getServerSession(authOptions)
  const desiredUsername = searchParams.searchParams.desiredUsername

  if (!session) {
    redirect("/")
  }
  mongoose.connect(process.env.MONGODB_URI ?? "")
  const page = await Page.findOne({ owner: session?.user?.email })
  if (page) {
    return <div>your page is: /{page.uri}</div>
  }
  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  )
}

export default AccountPage
