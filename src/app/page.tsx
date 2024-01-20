import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className={"pt-32"}>
        <div className="max-w-md mb-8">
          <h1 className={"text-6xl font-bold"}>
            Your one Lxnk <br /> for all.
          </h1>
          <h2 className={"text-slate-500 text-2xl mt-6"}>
            Share what is important to you, <br />{" "}
            <span className="font-bold">specifically.</span>
          </h2>
        </div>
        <form className="inline-flex items-center shadow-gray-700/20 shadow-lg">
          <span className="bg-white py-3 pl-4">lxnks.to/</span>
          <input type="text" className=" py-3" placeholder="username" />
          <button type="submit" className="bg-blue-500 text-white py-3 px-4">
            Join for free
          </button>
        </form>
      </section>
    </main>
  )
}
