export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-50"
      >
        <source src="/media/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-heading leading-none mb-4">
          EVOLVE <span className="text-gold">BEYOND</span>
        </h1>
        <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-8 uppercase">
          The Premier Fitness Destination in Galle
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-gold text-black px-10 py-4 font-bold tracking-widest hover:bg-white transition">
            START TRAINING
          </button>
          <button className="border border-white/30 backdrop-blur-sm px-10 py-4 font-bold tracking-widest hover:bg-white hover:text-black transition">
            VIEW SCHEDULE
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
}