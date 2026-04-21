export default function WhyCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-8
                 transition-colors duration-200 hover:border-accent/25"
    >
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-dim leading-relaxed">{desc}</p>
    </div>
  );
}
