import Link from 'next/link';

export const metadata = {
  title: 'About | Deeba Fatima',
  description: 'Learn more about Deeba Fatima, Clinical Trial Operations & Compliance professional.',
};

export default function AboutPage() {
  const competencies = [
    { title: 'Clinical Operations', desc: 'Day-to-day trial administration under ICH-GCP frameworks.' },
    { title: 'TMF / eTMF Management', desc: 'Inspection-ready filing structure & quality checking.' },
    { title: 'Source Data Verification', desc: 'CRF audit readiness & medical source document verification.' },
    { title: 'Investigational Product Logistics', desc: 'Drug accountability logging & sample temperature tracking.' },
    { title: 'Regulatory Compliance', desc: 'Adherence to ICH-GCP E6 (R2) & FDA 21 CFR Part 11.' },
    { title: 'Clinical Systems Mastery', desc: 'EDC (Medidata, Oomnia, Oracle) & IWRS (Cenduit, Clinion, Signant).' },
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>ABOUT ME</span>
          <span className="font-doodle text-base">♡</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Clinical Research Professional focused on{' '}
          <span className="font-script text-4xl md:text-6xl text-[#ff3366]">integrity</span>
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#f9d5dc] pink-card-shadow grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-sm md:text-base text-[#6b4c5e] leading-relaxed font-medium">
          <p>
            I am a dedicated Clinical Research Professional with hands-on experience in trial administration, site coordination, and regulatory documentation. I work within established ICH-GCP frameworks to maintain data integrity and support inspection-ready clinical studies.
          </p>
          <p>
            Holding a Bachelor of Pharmacy (B. Pharma) degree, I combine clinical knowledge with technical precision to streamline trial workflows, liaise with principal investigators, CRAs, sponsors, and ethics committees.
          </p>
        </div>

        <div className="space-y-4 bg-[#fff0f4] p-6 rounded-2xl border border-[#f9d5dc]">
          <h3 className="font-extrabold text-base text-[#2b1424] flex items-center gap-2">
            <span>Core Focus Areas</span>
            <span className="text-[#ff3366]">✨</span>
          </h3>
          <ul className="space-y-2 text-xs font-bold text-[#2b1424]">
            <li className="flex items-center gap-2">
              <span className="text-[#ff3366]">♥</span>
              <span>Clinical Trial Administration &amp; TMF Oversight</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ff3366]">♥</span>
              <span>Source Data Verification (SDV) &amp; Site Monitoring</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ff3366]">♥</span>
              <span>ICH-GCP Compliance &amp; Regulatory Submissions</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#ff3366]">♥</span>
              <span>EDC &amp; IWRS Software Execution</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Competencies Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#2b1424]">Core Competencies ♡</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#f9d5dc] pink-card-shadow space-y-2 hover:-translate-y-1 transition-all">
              <h3 className="font-extrabold text-sm text-[#ff3366]">{comp.title}</h3>
              <p className="text-xs text-[#6b4c5e] leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-6">
        <Link href="/experience" className="px-8 py-3.5 bg-[#ff3366] hover:bg-[#e6004c] text-white text-sm font-bold rounded-full shadow-lg transition-all inline-flex items-center gap-2">
          <span>Explore Experience &amp; Projects</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
