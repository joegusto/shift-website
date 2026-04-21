export default function StatBox({
  num,
  label,
  highlight = false,
}: {
  num: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-6 text-center max-w-[280px] w-full mx-auto ${
        highlight
          ? "bg-accent/[0.12] border border-accent/25"
          : "bg-bg-alt border border-white/[0.07]"
      }`}
    >
      <div
        className={`font-heading text-[2rem] font-bold leading-none ${
          highlight ? "text-accent-light" : "text-white"
        }`}
      >
        {num}
      </div>
      <div className="text-[0.78rem] text-dim mt-1.5 leading-snug">
        {label}
      </div>
    </div>
  );
}
