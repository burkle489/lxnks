import Link from "next/link"
import { FC } from "react"

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-4xl mx-auto flex justify-between px-8">
        <div className="flex gap-6 ">
          <Link href={"/"}>Lxnks</Link>
          <nav className={"flex items-center gap-4 text-slate-500 text-sm"}>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className={"flex gap-4 text-sm text-slate-500"}>
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/login"}>Create Account</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
