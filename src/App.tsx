import LogoMarquee from './components/LogoMarquee'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex h-16 items-center px-6">
        <img src="/favicon.svg" alt="" className="size-8" />
        <span className="ml-2 text-lg font-semibold">Marquee</span>
      </header>

      <section className="px-4 pt-24 pb-16 text-center sm:pt-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          Reach the frontier
          <br />
          of enterprise growth
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          The platform that turns market signals and enterprise intelligence into new ways to grow
          revenue.
        </p>
        <form className="mx-auto mt-6 flex max-w-md rounded-full bg-neutral-600">
          <input
            type="email"
            placeholder="Work email"
            className="h-[54px] w-full bg-transparent px-6 placeholder:text-white/50 focus:outline-none"
          />
          <button type="submit" className="h-[54px] shrink-0 rounded-full bg-indigo-500 px-7 font-medium">
            Request a demo
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <p className="mb-6 text-center">World-class enterprises trust Marquee</p>
        <LogoMarquee />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24">
        <h2 className="text-3xl font-medium">Content below the fold</h2>
        <p className="mt-4 text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </section>
    </div>
  )
}
