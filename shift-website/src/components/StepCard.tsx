export default function StepCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-7
                 flex gap-5 items-start
                 transition-all duration-200 hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(91,63,214,0.08)]"
    >
      <div
        className="font-heading text-[0.68rem] font-bold text-accent-light tracking-[0.12em]
                   bg-accent/[0.12] border border-accent/25 rounded-md
                   px-2.5 py-1 whitespace-nowrap mt-0.5 flex-shrink-0"
      >
        {num}
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1">{title}</h3>
        <p className="text-[0.855rem] text-dim leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
