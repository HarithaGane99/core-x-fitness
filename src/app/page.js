import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <h3 className="font-heading text-4xl text-gold mb-2">MODERN GEAR</h3>
          <p className="text-gray-400 font-light">Industry leading equipment for maximum performance.</p>
        </div>
        <div className="text-center">
          <h3 className="font-heading text-4xl text-gold mb-2">EXPERT COACHES</h3>
          <p className="text-gray-400 font-light">Personalized guidance to smash your fitness goals.</p>
        </div>
        <div className="text-center">
          <h3 className="font-heading text-4xl text-gold mb-2">ELITE RECOVERY</h3>
          <p className="text-gray-400 font-light">Premium sauna and recovery zones post-workout.</p>
        </div>
      </section>
    </main>
  );
}