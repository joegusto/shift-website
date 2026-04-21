function CredItem({ number, label, last = false }: { number: string; label: string; last?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 px-12 py-8
        ${last ? "" : "border-r border-white/[0.07]"}
        max-md:border-r-0 max-md:px-6 max-md:py-5 max-md:w-1/2
        max-sm:w-full max-sm:border-b max-sm:border-white/[0.07] max-sm:last:border-b-0`}
    >
      <div className="font-heading text-[1.75rem] font-bold text-accent-light leading-none">
        {number}
      </div>
      <span className="text-[0.72rem] font-semibold text-dim uppercase tracking-[0.1em] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function CredBar() {
  return (
    <div className="bg-bg-alt border-t border-b border-white/[0.07] flex justify-center flex-wrap px-[6%]">
      <CredItem number="20+" label="Years of Experience" />
      <CredItem number="95%" label="Placement Retention" />
      <CredItem number="FTE + Contract" label="Full-Time & Contract Placements" />
      <CredItem number="SoCal + National" label="Rooted Locally, Recruiting Nationally" last />
    </div>
  );
}
