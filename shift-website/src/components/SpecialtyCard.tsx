export default function SpecialtyCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-bg-alt border border-white/[0.07] rounded-xl p-5
                 transition-all duration-200
                 hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(91,63,214,0.12)] hover:-translate-y-0.5"
    >
      <h4 className="text-[0.9rem] font-bold text-white mb-1.5">{title}</h4>
      <p className="text-[0.8rem] text-dim leading-normal">{desc}</p>
    </div>
  );
}
