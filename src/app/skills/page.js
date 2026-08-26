export const metadata = {
  title: 'Services & Skills | Deeba Fatima',
  description: 'Clinical research competencies and trial software platforms mastered by Deeba Fatima.',
};

export default function SkillsPage() {
  const services = [
    {
      icon: '📋',
      title: 'Clinical Operations',
      desc: 'Day-to-day trial administration, investigator communication, and protocol adherence under ICH-GCP frameworks.',
    },
    {
      icon: '🗂️',
      title: 'TMF / eTMF Management',
      desc: 'Filing structure, uploading essential documents, quality checking, and maintaining audit-ready regulatory binders.',
    },
    {
      icon: '🔍',
      title: 'Data Integrity & SDV',
      desc: 'Source Data Verification, electronic Case Report Form (eCRF) completion, and prompt query resolution.',
    },
    {
      icon: '💊',
      title: 'Site Coordination',
      desc: 'Patient screening, informed consent process support, investigational drug accountability, and sample dispatch.',
    },
  ];

  const systems = [
    { category: 'Electronic Data Capture (EDC)', names: 'Medidata Rave · Oomnia · Oracle Health Sciences EDC' },
    { category: 'Interactive Response (IWRS/RTSM)', names: 'Cenduit · Clinion · Signant Health' },
    { category: 'Clinical Trial Management (CTMS/eTMF)', names: 'MasterControl · Veeva Vault eTMF · Local CTMS' },
    { category: 'Productivity & Data Analysis', names: 'Microsoft Excel · Microsoft Word · Microsoft PowerPoint' },
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>SERVICES &amp; SKILLS</span>
          <span className="font-doodle text-base">♡</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Clinical Capabilities &amp; Software Mastery
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 border border-[#f9d5dc] pink-card-shadow space-y-4 hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#fff0f4] border border-[#f9d5dc] flex items-center justify-center text-2xl">
              {srv.icon}
            </div>
            <h2 className="font-extrabold text-base text-[#2b1424]">{srv.title}</h2>
            <p className="text-xs text-[#6b4c5e] leading-relaxed font-medium">{srv.desc}</p>
          </div>
        ))}
      </div>

      {/* Software Systems Table */}
      <section className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow space-y-6">
        <h2 className="text-xl font-extrabold text-[#2b1424] flex items-center gap-2">
          <span>Trial Software Platform Proficiency</span>
          <span className="text-[#ff3366]">✨</span>
        </h2>
        <div className="divide-y divide-[#f9d5dc]">
          {systems.map((sys, idx) => (
            <div key={idx} className="py-4 grid sm:grid-cols-[220px_1fr] gap-4 items-center">
              <span className="text-xs font-extrabold text-[#ff3366]">{sys.category}</span>
              <span className="text-xs font-bold text-[#2b1424] bg-[#fff0f4] px-4 py-2 rounded-xl border border-[#f9d5dc]">
                {sys.names}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
