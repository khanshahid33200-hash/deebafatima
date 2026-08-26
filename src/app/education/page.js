export const metadata = {
  title: 'Education | Deeba Fatima',
  description: 'Academic background and coursework of Deeba Fatima.',
};

export default function EducationPage() {
  const modules = [
    'Pharmacology & Therapeutics',
    'Pharmaceutics & Formulation Science',
    'Pharmaceutical Analysis',
    'Pharmacognosy & Herbal Formulations',
    'Pharmaceutical Regulatory Science',
    'Hospital & Clinical Pharmacy',
  ];

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>EDUCATION</span>
          <span className="font-doodle text-base">🎓</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Academic Qualifications &amp; Degree
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#f9d5dc] pink-card-shadow space-y-6 max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f9d5dc] pb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#2b1424]">Bachelor of Pharmacy (B. Pharma)</h2>
            <p className="text-xs font-bold text-[#ff3366] mt-1">
              ABSS Institute of Technology, Meerut
            </p>
          </div>
          <span className="text-xs font-bold text-[#ff3366] bg-[#ffe6eb] px-4 py-1.5 rounded-full">
            Graduated: 2025
          </span>
        </div>

        <p className="text-xs text-[#6b4c5e] font-medium leading-relaxed">
          Affiliated with <strong>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</strong>, Lucknow.
        </p>

        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-extrabold tracking-widest uppercase text-[#2b1424]">
            Key Coursework &amp; Modules
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {modules.map((mod, idx) => (
              <div key={idx} className="bg-[#fff0f4] p-3 rounded-xl border border-[#f9d5dc] text-xs font-bold text-[#2b1424] flex items-center gap-2">
                <span className="text-[#ff3366]">♥</span>
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
