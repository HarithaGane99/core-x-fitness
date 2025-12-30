import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <h2 className="font-heading text-4xl mb-6">CORE <span className="text-gold">X</span></h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            The ultimate fitness destination in Galle. Combining elite performance equipment with luxury recovery facilities for the dedicated athlete.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 tracking-widest">LOCATION</h4>
          <p className="text-gray-400 text-sm leading-loose">
            No. 123 Colombo Road<br />
            Galle, Sri Lanka<br />
            Open Daily: 5AM - 11PM
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 tracking-widest">FOLLOW US</h4>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="#" className="hover:text-gold transition">INSTAGRAM</Link>
            <Link href="#" className="hover:text-gold transition">FACEBOOK</Link>
            <Link href="#" className="hover:text-gold transition">WHATSAPP</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 text-center text-xs text-gray-600 tracking-widest">
        &copy; 2025 CORE X FITNESS GALLE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}