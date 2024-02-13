import HeroForm from "@/components/Forms/HeroForm"

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
        <HeroForm />
      </section>
    </main>
  )
}
