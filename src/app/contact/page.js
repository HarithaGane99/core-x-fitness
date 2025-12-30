export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-heading text-6xl md:text-8xl mb-4">GET IN TOUCH</h2>
        <p className="text-gray-400 tracking-widest uppercase">Start your transformation in Galle</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-heading text-4xl mb-6 tracking-wide">VISIT THE BOX</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Located in the heart of Galle, Core X Fitness is easily accessible. 
            Stop by for a tour or a free trial session with our elite trainers.
          </p>
          
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-gold font-bold tracking-widest text-xs uppercase mb-1">Address</p>
              <p className="text-xl">No. 123 Colombo Road, Galle, Sri Lanka</p>
            </div>
            <div>
              <p className="text-gold font-bold tracking-widest text-xs uppercase mb-1">Email</p>
              <p className="text-xl">join@corexfitness.com</p>
            </div>
            <div>
              <p className="text-gold font-bold tracking-widest text-xs uppercase mb-1">Phone</p>
              <p className="text-xl">+94 91 234 5678</p>
            </div>
          </div>

          <div className="w-full h-[300px] bg-accent border border-white/10 grayscale contrast-125">
             <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
               [Interactive Google Map Component]
             </div>
          </div>
        </div>

        <form className="bg-accent p-10 border border-white/5">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">First Name</label>
              <input type="text" className="bg-background border border-white/10 p-4 focus:border-gold outline-none transition" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Last Name</label>
              <input type="text" className="bg-background border border-white/10 p-4 focus:border-gold outline-none transition" />
            </div>
          </div>
          
          <div className="flex flex-col mb-6">
            <label className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Email Address</label>
            <input type="email" className="bg-background border border-white/10 p-4 focus:border-gold outline-none transition" />
          </div>

          <div className="flex flex-col mb-8">
            <label className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Inquiry Type</label>
            <select className="bg-background border border-white/10 p-4 focus:border-gold outline-none transition appearance-none">
              <option>General Membership</option>
              <option>Personal Training</option>
              <option>Corporate Wellness</option>
            </select>
          </div>

          <button className="w-full bg-gold text-black py-5 font-bold tracking-[0.3em] hover:bg-white transition uppercase">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}