import CalendlyButton from "@/components/CalendlyButton";
import CredBar from "@/components/CredBar";
import PathCard from "@/components/PathCard";
import StepCard from "@/components/StepCard";
import SpecialtyCard from "@/components/SpecialtyCard";
import WhyCard from "@/components/WhyCard";
import StatBox from "@/components/StatBox";

/* ─── DATA ───────────────────────────────────────────────────────── */

const specialties = [
  { title: "Product Management", desc: "PMs, Directors, and VPs who can own a roadmap and ship with engineering teams." },
  { title: "Software Engineering", desc: "Frontend, backend, full-stack, and mobile engineers at all levels." },
  { title: "Enterprise Architecture", desc: "Systems thinkers who design for scale, integration, and long-term resilience." },
  { title: "Infrastructure & DevOps", desc: "Cloud, Kubernetes, CI/CD, and SRE professionals who keep everything running." },
  { title: "Security & Compliance", desc: "InfoSec, network security, and GRC specialists for regulated environments." },
  { title: "Data Engineering", desc: "Data engineers and architects who build the systems behind business decisions." },
  { title: "Business & Systems Analysis", desc: "BAs and SAs who bridge business requirements and technical execution." },
  { title: "Project & Program Management", desc: "PMs and PMO leads who drive delivery across complex cross-functional programs." },
  { title: "ERP & Enterprise Platforms", desc: "SAP · Oracle · Workday · ServiceNow · Microsoft Dynamics" },
  { title: "Network Engineering", desc: "Network architects and engineers who design, build, and secure enterprise infrastructure." },
  { title: "Help Desk & IT Support", desc: "Technical support professionals and IT operations specialists at every tier." },
  { title: "UI/UX Design", desc: "Designers who create user-centered products, from research and wireframes to final UI." },
];

const industries = [
  "Media & Entertainment", "Technology & SaaS", "Automotive & Mobility Tech",
  "Gaming & Interactive", "Healthcare & Health Tech", "Financial Services & FinTech",
  "Streaming & Digital Media", "E-Commerce & Retail Tech", "Energy & Utilities",
  "LegalTech & Professional Services", "Cybersecurity", "Government & Public Sector",
];

const primaryMarkets = ["Los Angeles", "Orange County", "San Diego", "Las Vegas", "Inland Empire"];
const secondaryMarkets = ["Phoenix", "Austin", "Atlanta", "Miami", "New York", "Seattle", "Remote / Nationwide"];

/* ─── PAGE (Server Component) ────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-bg pt-40 pb-28 text-center overflow-hidden px-[6%]">
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,63,214,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,63,214,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated glow */}
        <div
          aria-hidden="true"
          className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[600px] h-[400px] pointer-events-none animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse at center, rgba(91,63,214,0.20) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[820px] mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-accent/[0.08] border border-accent/25
                          text-accent-soft text-[0.7rem] font-bold tracking-[0.1em] uppercase
                          py-1.5 px-4 rounded-full mb-8">
            Boutique Technical Recruiting
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.6rem,5vw,4.2rem)] font-bold text-white tracking-[-1.5px] leading-[1.1] mb-6">
            Not a staffing agency.
            <br />
            <span className="text-accent-light">A recruiting partner.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-white/60 leading-relaxed max-w-[600px] mx-auto mb-10">
            A boutique recruiting firm focused on product, engineering, and
            technology roles. We help companies build teams that last, and help
            people find work worth doing.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap">
            <CalendlyButton>Book a Call &rarr;</CalendlyButton>
            <a href="mailto:joe@shiftisit.com" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY BAR ──────────────────────────────────────── */}
      <CredBar />

      {/* ── THREE-PATH CARDS ─────────────────────────────────────── */}
      <section className="bg-bg px-[6%] py-[90px]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PathCard
            label="For Employers"
            headline="Find the people your team actually needs."
            body="Hiring the right people is hard, especially when the role isn't easy to define or quick to fill. SHIFT works as a true partner: structured intake, aligned search, and a process built to get it right the first time."
            items={[
              "Structured intake and role calibration from day one",
              "Pipelines built around your timeline and hiring plan",
              "Full-time, contract, and contract-to-hire engagements",
              "Product, engineering, infrastructure, security, and more",
            ]}
            cta="Submit a Hiring Request"
            highlighted
          />
          <PathCard
            label="For Candidates"
            headline="Find a role that fits where you're headed."
            body="Most recruiters move fast. Too fast. SHIFT takes a more thoughtful approach: understanding your background, your goals, and where you actually want to go next."
            items={[
              "Roles with companies that value technical depth",
              "Full-time, contract, and contract-to-hire opportunities",
              "Real communication at every stage",
              "Access to roles that never hit the job boards",
            ]}
            cta="Let's Connect"
          />
          <PathCard
            label="Consulting & Fractional Services"
            headline="Recruiting leadership, without the full-time overhead."
            body="For companies that need more than a search, but aren't ready to hire a full-time recruiter. Flexible engagements built around your actual situation."
            items={[
              "Fractional recruiting leadership on demand",
              "Project-based search with defined scope and timeline",
              "Process and strategy consulting",
              "Monthly or fixed-scope engagement models",
            ]}
            cta="Book a Call"
          />
        </div>
      </section>

      {/* ── HOW SHIFT WORKS ──────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="bg-bg-alt border-t border-b border-white/[0.07] px-[6%] py-[90px]"
      >
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="sec-label">How SHIFT Works</span>
            <h2 className="text-[clamp(1.8rem,2.8vw,2.3rem)] font-bold text-white tracking-tight leading-[1.2] mb-4">
              A more disciplined approach to recruiting.
            </h2>
            <p className="text-dim leading-relaxed mb-8">
              Most firms optimize for speed. We optimize for fit. Every search follows the
              same structured process, because shortcuts are how bad hires happen.
            </p>
            <div className="text-[0.85rem] font-bold text-accent-light border-t border-white/[0.07] pt-5">
              No resume blasts. No guesswork. No shortcuts.
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            <StepCard
              num="01"
              title="Start with clarity"
              desc="Every search begins with structured intake and role calibration: understanding the team, the need, and what success actually looks like."
            />
            <StepCard
              num="02"
              title="Build with intent"
              desc="Targeted outreach aligned to the real need. You get a shortlist of qualified, prepared candidates, not a stack of résumés to sort through."
            />
            <StepCard
              num="03"
              title="Stay involved"
              desc="We stay engaged from first conversation through close. The job isn't done at submission. It's done when the placement is working."
            />
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ──────────────────────────────────────────── */}
      <section id="specialties" className="bg-bg px-[6%] py-[90px]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <span className="sec-label">Specialties</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white tracking-tight mb-3">
              Deep expertise across technical disciplines.
            </h2>
            <p className="text-dim max-w-[540px] mx-auto leading-relaxed">
              We recruit across the full spectrum of product and engineering, from
              zero-to-one product builders to platform modernization engineers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {specialties.map((s) => (
              <SpecialtyCard key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SHIFT ────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-t border-b border-white/[0.07] px-[6%] py-[90px]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <span className="sec-label">Why SHIFT is IT</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white tracking-tight mb-3">
              What makes us different.
            </h2>
            <p className="text-dim max-w-[540px] mx-auto leading-relaxed">
              We&apos;re not trying to be the biggest firm. We&apos;re trying to be the
              one you actually want to work with.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhyCard
              title="Depth over volume."
              desc="Every search gets direct attention, not handed off or rushed. We focus on product, engineering, and IT because depth in a domain is what separates a great match from a lucky one."
            />
            <WhyCard
              title="Boutique by design."
              desc="Intentionally built to stay focused, responsive, and accountable. Small isn't a limitation. It's what lets us maintain quality without compromise on every single engagement."
            />
            <WhyCard
              title="Results that last."
              desc="High retention, longer tenures, and better long-term fit. We measure success by whether the placement is still working 12 months later, not just whether the seat got filled."
            />
          </div>
        </div>
      </section>

      {/* ── CONSULTING & FRACTIONAL SERVICES ────────────────────── */}
      <section id="consulting" className="bg-bg px-[6%] py-[90px]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <span className="sec-label">Consulting &amp; Fractional Services</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white tracking-tight mb-3">
              Recruiting leadership, without the full-time overhead.
            </h2>
            <p className="text-dim max-w-[580px] mx-auto leading-relaxed mb-3">
              For companies that need more than a search but aren&apos;t ready for a full-time recruiter.
            </p>
            <p className="text-white/45 text-[0.875rem] max-w-[560px] mx-auto leading-relaxed">
              Led by a senior technical recruiting partner with 20+ years of experience
              supporting both high-growth teams and established enterprise organizations.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-8
                            transition-colors duration-200 hover:border-accent/25">
              <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30
                              flex items-center justify-center mb-5 text-accent-light text-sm font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Fractional Recruiting Leadership</h3>
              <p className="text-sm text-dim leading-relaxed mb-4">
                Bring in senior recruiting leadership without adding headcount. SHIFT operates
                as your embedded partner, setting strategy, driving execution, and working
                directly with hiring managers.
              </p>
              <p className="text-[0.8rem] text-white/40 leading-relaxed">
                <span className="text-accent-soft font-semibold">Best for:</span> Scaling teams,
                interim coverage, or organizations needing consistent recruiting leadership
                without a full-time hire.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-8
                            transition-colors duration-200 hover:border-accent/25">
              <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30
                              flex items-center justify-center mb-5 text-accent-light text-sm font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project-Based Search</h3>
              <p className="text-sm text-dim leading-relaxed mb-4">
                Defined scope. Clear timeline. Measurable outcome. Ideal for critical hires or
                focused team buildouts where you need a dedicated search effort with a
                beginning, middle, and end. A structured, high-commitment alternative to
                contingency search.
              </p>
              <p className="text-[0.8rem] text-white/40 leading-relaxed">
                <span className="text-accent-soft font-semibold">Best for:</span> Critical hires,
                team buildouts, or time-sensitive hiring spikes where a retained search
                structure makes sense.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[14px] p-8
                            transition-colors duration-200 hover:border-accent/25">
              <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30
                              flex items-center justify-center mb-5 text-accent-light text-sm font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Process &amp; Strategy Consulting</h3>
              <p className="text-sm text-dim leading-relaxed mb-4">
                When hiring feels inconsistent or slow, the issue is usually the system. SHIFT
                audits your recruiting workflow, identifies the gaps, and builds a
                structured approach your team can actually execute.
              </p>
              <p className="text-[0.8rem] text-white/40 leading-relaxed">
                <span className="text-accent-soft font-semibold">Best for:</span> Teams that need
                to improve hiring quality, speed, and consistency across the board.
              </p>
            </div>
          </div>

          {/* Engagement model + CTA */}
          <div className="bg-accent/[0.05] border border-accent/20 rounded-2xl p-10 max-md:p-8 text-center max-w-[780px] mx-auto">
            <p className="text-accent-light font-bold text-[1.05rem] mb-2">Flexible by design.</p>
            <p className="text-white/70 text-[0.95rem] leading-relaxed mb-4">
              Engagements are typically structured as monthly fractional support or
              fixed-scope project work, depending on your needs.
            </p>
            <p className="text-dim text-[0.9rem] leading-relaxed mb-8">
              Not sure which approach fits? Most engagements start with a quick conversation
              to align on goals and gaps.
            </p>
            <p className="text-white/55 text-[0.875rem] leading-relaxed mb-6">
              We&apos;ll talk through your hiring goals, current gaps, and whether there&apos;s a fit.
            </p>
            <div className="flex flex-col items-center gap-2">
              <CalendlyButton>Book a Call &rarr;</CalendlyButton>
              <span className="text-white/35 text-[0.8rem]">No commitment. Just a conversation.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="bg-bg px-[6%] py-[90px]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-14">
            <span className="sec-label">Industries We Serve</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white tracking-tight mb-3">
              Built for companies that run on technology.
            </h2>
            <p className="text-dim max-w-[540px] mx-auto leading-relaxed">
              We&apos;ve recruited across a wide range of industries and company
              stages, from early-stage startups to Fortune 100 enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="bg-bg-alt border border-white/[0.07] rounded-[10px] py-[18px] px-[22px]
                           flex items-center gap-3 text-[0.9rem] font-medium text-white/80
                           transition-colors duration-200 hover:border-accent/25"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent-light flex-shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKETS ──────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-t border-b border-white/[0.07] px-[6%] py-20 text-center">
        <div className="max-w-container mx-auto">
          <span className="sec-label">Where We Work</span>
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white tracking-tight mb-3">
            Rooted in Southern California. Recruiting nationwide.
          </h2>
          <p className="text-dim text-[0.95rem] leading-relaxed max-w-[560px] mx-auto mb-8">
            Our network runs deepest in Southern California: entertainment, automotive,
            gaming, and tech. We also recruit actively in the country&apos;s fastest-growing
            technology markets.
          </p>
          {/* Primary markets */}
          <div className="flex flex-wrap gap-3 justify-center mb-3">
            {primaryMarkets.map((m) => (
              <span
                key={m}
                className="bg-accent/[0.12] border border-accent-light/30 text-accent-light
                           text-sm font-semibold py-1.5 px-[18px] rounded-full"
              >
                {m}
              </span>
            ))}
          </div>
          {/* Secondary markets */}
          <div className="flex flex-wrap gap-3 justify-center">
            {secondaryMarkets.map((m) => (
              <span
                key={m}
                className="bg-white/[0.04] border border-white/10 text-white/65
                           text-sm font-medium py-1.5 px-[18px] rounded-full"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────────────────── */}
      <section id="about" className="bg-bg px-[6%] py-[90px]">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="sec-label">About SHIFT is IT</span>
            <h2 className="text-[clamp(1.8rem,2.8vw,2.3rem)] font-bold text-white tracking-tight leading-[1.2] mb-5">
              A recruiting firm built differently.
            </h2>
            <p className="text-dim leading-[1.8] mb-4">
              SHIFT is IT is led by a senior technical recruiter with over 20 years of
              experience supporting engineering, product, and IT teams across enterprise
              and high-growth environments.
            </p>
            <p className="text-dim leading-[1.8] mb-4">
              From Fortune 100 companies to early-stage startups, the focus has always
              been the same: understand the need, run a disciplined search, and make the
              right match.
            </p>
            <p className="text-dim leading-[1.8]">
              The name says it: change is constant in technology. Having the right
              recruiting partner means you&apos;re ready for it.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <StatBox num="20+" label="Years of recruiting experience" highlight />
            <StatBox num="95%" label="Placement retention rate" />
            <StatBox num="18–24 mo" label="Avg contractor tenure" />
            <StatBox num="36–48+" label="Placements at peak capacity" highlight />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative bg-bg-alt border-t border-white/[0.07] py-28 text-center overflow-hidden px-[6%]">
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(91,63,214,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,63,214,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-[680px] mx-auto">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold text-white tracking-tight mb-4">
            Ready to make <span className="text-accent-light">THE SHIFT?</span>
          </h2>
          <p className="text-white/[0.55] leading-relaxed mb-10">
            Whether you&apos;re hiring or exploring what&apos;s next, let&apos;s start
            the conversation.
          </p>
          <CalendlyButton>Let&apos;s Talk &rarr;</CalendlyButton>
        </div>
      </section>
    </>
  );
}
