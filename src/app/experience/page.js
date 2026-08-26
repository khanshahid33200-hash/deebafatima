import Link from 'next/link';

export const metadata = {
  title: 'Work Experience | Deeba Fatima',
  description: 'Detailed work history and clinical trial experience of Deeba Fatima.',
};

export default function ExperiencePage() {
  const experiences = [
    {
      number: '01',
      period: 'Mar 2026 — Present',
      role: 'Clinical Trial Assistant (CTA)',
      organization: 'Insignia Clinical Services',
      overview: 'Trial administration, eTMF tracking, regulatory binder maintenance, and investigator site communication.',
      details: [
        'Coordinate day-to-day operations for ongoing clinical trials under ICH-GCP rules.',
        'Track and upload essential trial documentation in eTMF systems.',
        'Maintain continuous inspection readiness across site files and regulatory binders.',
        'Facilitate site communication and prepare progress reports.',
      ],
      systems: ['eTMF Software', 'CTMS', 'Regulatory Binders'],
    },
    {
      number: '02',
      period: 'Jul 2025 — Feb 2026',
      role: 'Clinical Research Coordinator (CRC)',
      organization: 'Somaya Research and Health Services',
      overview: 'Site coordination, subject enrollment, informed consent support, SDV, and trial software management.',
      details: [
        'Managed patient screening, enrollment, and follow-up visit documentation.',
        'Executed electronic Case Report Form (eCRF) completion and query resolution.',
        'Facilitated Source Data Verification (SDV) during CRA monitoring visits.',
        'Handled IP drug accountability and biological sample packaging.',
      ],
      systems: ['Medidata EDC', 'Oomnia', 'Oracle EDC', 'Cenduit IWRS', 'Clinion', 'Signant'],
    },
    {
      number: '03',
      period: 'Student Trainee',
      role: 'Industrial Student Trainee',
      organization: 'Synokem Pharmaceutical Ltd.',
      overview: 'Industrial manufacturing exposure, GMP standards, and Quality Control testing.',
      details: [
        'Gained hands-on exposure to solid and liquid oral dosage form manufacturing lines.',
        'Observed Good Manufacturing Practice (GMP) protocols and Batch Records.',
      ],
      systems: ['GMP Documentation', 'Batch Records'],
    },
    {
      number: '04',
      period: 'Student Trainee',
      role: 'Hospital Student Trainee',
      organization: 'Ursula Horsman Memorial District Hospital',
      overview: 'Hospital pharmacy management, pathology workflows, and clinical documentation.',
      details: [
        'Assisted in hospital pharmacy inventory, drug storage, and prescription logs.',
        'Observed diagnostic pathology workflows and clinical recordkeeping.',
      ],
      systems: ['Pharmacy Logs', 'Pathology Records'],
    },
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>WORK &amp; EXPERIENCE</span>
          <span className="font-doodle text-base">✨</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Clinical Operations &amp; Site Experience
        </h1>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow space-y-4 hover:-translate-y-1 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f9d5dc] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ffe6eb] text-[#ff3366] font-mono text-xs font-bold flex items-center justify-center">
                  {exp.number}
                </span>
                <div>
                  <h2 className="text-xl font-extrabold text-[#2b1424]">{exp.role}</h2>
                  <p className="text-xs font-bold text-[#ff3366]">{exp.organization}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#6b4c5e] bg-[#fff0f4] px-4 py-1.5 rounded-full border border-[#f9d5dc]">
                {exp.period}
              </span>
            </div>

            <p className="text-xs text-[#6b4c5e] italic font-medium leading-relaxed">
              {exp.overview}
            </p>

            <ul className="space-y-2 text-xs font-medium text-[#2b1424]">
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-[#ff3366]">♥</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap gap-2 items-center text-xs">
              <span className="font-bold text-[#2b1424]">Systems:</span>
              {exp.systems.map((sys, sIdx) => (
                <span key={sIdx} className="bg-[#fff0f4] text-[#ff3366] px-3 py-1 rounded-full border border-[#f9d5dc] font-bold text-[0.7rem]">
                  {sys}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
