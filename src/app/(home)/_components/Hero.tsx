const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 z-0 scale-105 animate-[slow-zoom_20s_infinite_alternate]">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtILZOPLCHEuwmQo5Xj3zd9XtU1ucWg3Dajt0x_bl0L1LbTgyYQPeKTyvoGgTKsbcd0rzA1U2IO1YXQ5up8dmHjJIv9SzhKAzemL7fCPujoY5AXNKx0iaVMbxp8NEXsuygv6OeJvXAsywXY1HvBlkunoFf0rAJ5JDNx5IU3vBiV84JIkH3yHzCM1MdFyJ3oeLjm7vdz51C6NGiHgbQi03VksJxIf58y-QcLyfJL06mwD4rfPzQuTQPf7EXF9eP11JHRIgoK0aSQF8"
        alt="Cinematic luxury villa with pool at sunset in Marbella"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="w-full max-w-5xl animate-fade-in flex flex-col items-center">
        <h1 className="mb-6 font-serif text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          Unlock Marbella's Finest: <br />
          <span className="italic font-light">Exclusive Access Awaits</span>
        </h1>
        <h2 className="mb-14 font-sans text-lg font-light text-white/90 md:text-xl lg:text-2xl tracking-wide max-w-2xl">
          Curated luxury services for discerning clientele. Start your journey now.
        </h2>
        <div className="w-full max-w-3xl bg-white rounded-sm shadow-2xl flex flex-col sm:flex-row gap-2 p-2">
          <div className="flex-1 flex items-center px-4">
            <span className="material-symbols-outlined text-deep-brown/60 text-2xl">search</span>
            <input
              className="w-full border-none bg-transparent px-4 py-3 text-deep-brown placeholder-deep-brown/50 focus:ring-0 font-sans text-lg outline-none"
              placeholder="What are you looking for?"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="h-14 sm:w-auto w-full rounded-sm bg-primary-gold px-10 text-sm font-bold tracking-widest text-white transition-all hover:bg-[#967645] hover:shadow-lg active:scale-95 uppercase">
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
