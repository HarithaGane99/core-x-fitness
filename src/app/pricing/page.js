import { PRICING_PLANS } from "@/constants/data";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-heading text-6xl md:text-8xl mb-4">MEMBERSHIPS</h2>
        <p className="text-gray-400 tracking-widest uppercase">Choose your level of performance</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, index) => (
          <div key={index} className={`p-10 border ${plan.highlight ? "border-gold bg-gold/5" : "border-white/10 bg-accent"} flex flex-col`}>
            <h3 className="font-heading text-3xl mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-sm mr-1">LKR</span>
              <span className="text-5xl font-bold">{plan.price}</span>
              <span className="text-gray-500 text-sm ml-2">/ month</span>
            </div>
            <ul className="flex-grow space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300 text-sm uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 font-bold tracking-widest transition ${plan.highlight ? "bg-gold text-black hover:bg-white" : "border border-white hover:bg-white hover:text-black"}`}>
              SELECT PLAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}