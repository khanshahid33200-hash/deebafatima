'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('deebaf539@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+918178570340');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>CONTACT</span>
          <span className="font-doodle text-base">✉</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Let's Connect &amp; Collaborate ♡
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#f9d5dc] pink-card-shadow grid md:grid-cols-2 gap-8 items-center max-w-4xl">
        <div className="space-y-6">
          <p className="text-sm text-[#6b4c5e] font-medium leading-relaxed">
            Open to clinical research assistant (CTA), coordinator (CRC), or trial administration opportunities across India. Feel free to reach out directly!
          </p>

          <div className="space-y-3 text-xs font-bold text-[#2b1424]">
            <div className="flex items-center justify-between p-4 bg-[#fff0f4] rounded-2xl border border-[#f9d5dc]">
              <div className="flex items-center gap-3">
                <span className="text-lg">✉</span>
                <a href="mailto:deebaf539@gmail.com" className="hover:text-[#ff3366]">deebaf539@gmail.com</a>
              </div>
              <button onClick={copyEmail} className="px-3 py-1 bg-white text-[#ff3366] rounded-full border border-[#f9d5dc]">
                {copiedEmail ? 'copied' : 'copy'}
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#fff0f4] rounded-2xl border border-[#f9d5dc]">
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:+918178570340" className="hover:text-[#ff3366]">+91 81785 70340</a>
              </div>
              <button onClick={copyPhone} className="px-3 py-1 bg-white text-[#ff3366] rounded-full border border-[#f9d5dc]">
                {copiedPhone ? 'copied' : 'copy'}
              </button>
            </div>

            <div className="flex items-center gap-3 p-4 bg-[#fff0f4] rounded-2xl border border-[#f9d5dc]">
              <span className="text-lg">📍</span>
              <span>Pratapgarh, Uttar Pradesh, India / Remote</span>
            </div>
          </div>
        </div>

        <div className="bg-[#fff0f4] p-8 rounded-3xl border border-[#f9d5dc] space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white border border-[#f9d5dc] flex items-center justify-center text-3xl mx-auto shadow-sm">
            📄
          </div>
          <div className="space-y-2">
            <h2 className="font-extrabold text-lg text-[#2b1424]">Curriculum Vitae</h2>
            <p className="text-xs text-[#6b4c5e]">Download the complete PDF resume for full clinical credentials.</p>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff3366] hover:bg-[#e6004c] text-white text-xs font-bold rounded-full shadow-md transition-all"
          >
            <span>Download Resume (PDF)</span>
            <span>⤓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
