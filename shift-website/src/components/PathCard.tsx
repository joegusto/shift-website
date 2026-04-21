import CalendlyButton from "./CalendlyButton";

function CheckCircle() {
  return (
    <span className="w-[18px] h-[18px] rounded-full bg-accent/20 border-[1.5px] border-accent-light
                      flex-shrink-0 mt-0.5 flex items-center justify-center text-[0.6rem] text-accent-light font-bold">
      ✓
    </span>
  );
}

export default function PathCard({
  label,
  headline,
  body,
  items,
  cta,
  highlighted = false,
}: {
  label: string;
  headline: string;
  body: string;
  items: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-11 max-md:p-8 ${
        highlighted
          ? "bg-accent/[0.06] border border-accent/25"
          : "bg-white/[0.03] border border-white/[0.07]"
      }`}
    >
      <div className="sec-label">{label}</div>
      <h3 className="text-[1.55rem] font-bold text-white tracking-tight leading-snug mb-4">
        {headline}
      </h3>
      <p className="text-[0.955rem] text-dim leading-relaxed mb-7">
        {body}
      </p>
      <ul className="flex flex-col gap-2.5 mb-8 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed">
            <CheckCircle />
            {item}
          </li>
        ))}
      </ul>
      <CalendlyButton className="btn-primary text-sm py-2.5 px-6">
        {cta} &rarr;
      </CalendlyButton>
    </div>
  );
}
