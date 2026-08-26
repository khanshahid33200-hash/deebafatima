export const metadata = {
  title: 'Publication & Journal | Deeba Fatima',
  description: 'Publications and peer-reviewed articles by Deeba Fatima.',
};

export default function PublicationPage() {
  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>JOURNAL &amp; PUBLICATION</span>
          <span className="font-doodle text-base">📖</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Peer-Reviewed Review Article
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#f9d5dc] pink-card-shadow space-y-6 max-w-3xl">
        <div className="space-y-2 border-b border-[#f9d5dc] pb-6">
          <span className="text-xs font-bold text-[#ff3366] bg-[#ffe6eb] px-3 py-1 rounded-full">
            Review Paper
          </span>
          <h2 className="text-2xl font-extrabold text-[#2b1424] leading-snug pt-2">
            A Review Article on Formulation and Evaluation of Herbal Cold Cream
          </h2>
          <p className="text-xs font-bold text-[#ff3366]">
            International Journal of Pharmaceutical Research
          </p>
        </div>

        <p className="text-xs text-[#6b4c5e] font-medium leading-relaxed">
          Comprehensive review paper examining formulation methods, active natural herbal extracts, thermal stability testing, spreadability parameters, and skin compatibility evaluations.
        </p>

        <div className="bg-[#fff0f4] p-4 rounded-2xl border border-[#f9d5dc] space-y-2 text-xs font-bold text-[#2b1424]">
          <span className="text-[#ff3366] block uppercase tracking-wider">Key Parameters Evaluated</span>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><span>♥</span> Organoleptic &amp; Texture Evaluation</li>
            <li className="flex items-center gap-2"><span>♥</span> Viscosity &amp; Spreadability Testing</li>
            <li className="flex items-center gap-2"><span>♥</span> Thermal &amp; Phase Separation Stability</li>
            <li className="flex items-center gap-2"><span>♥</span> Dermal Patch Safety Assessment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
