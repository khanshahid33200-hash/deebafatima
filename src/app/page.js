'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [telemetry, setTelemetry] = useState(null);

  useEffect(() => {
    fetch('/api/insights')
      .then((res) => res.json())
      .then((json) => setTelemetry(json))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="max-w-[1140px] mx-auto px-6 pt-10 md:pt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left Column Text */}
        <div className="space-y-6">
          {/* Top Hey Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffe6eb] text-[#ff3366] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
            <span>♥ HEY, I'M DEEBA</span>
            <span className="font-doodle text-base font-normal text-[#ff3366]">🎀</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2b1424] leading-[1.15] tracking-tight">
            Turning research into{' '}
            <span className="font-script text-5xl md:text-7xl font-normal text-[#ff3366] underline decoration-wavy decoration-[#ff85a2]">
              accurate
            </span>
            , compliant clinical outcomes
          </h1>

          {/* Intro Paragraph */}
          <p className="text-[#6b4c5e] text-base md:text-lg max-w-[54ch] leading-relaxed font-medium">
            I coordinate clinical trials, manage regulatory documentation (TMF/eTMF), and execute site operations under ICH-GCP frameworks to deliver inspection-ready data integrity.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/experience"
              className="px-7 py-3.5 bg-[#ff3366] hover:bg-[#e6004c] text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-white border border-[#f9d5dc] text-[#ff3366] hover:bg-[#fff0f4] text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <span>Download CV</span>
              <span>⤓</span>
            </a>
          </div>

          {/* FIND ME ON Icons */}
          <div className="pt-6 border-t border-[#f9d5dc] space-y-3">
            <span className="text-[0.7rem] font-extrabold tracking-widest uppercase text-[#2b1424]">
              FIND ME ON
            </span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:deebaf539@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white border border-[#f9d5dc] flex items-center justify-center text-[#ff3366] hover:bg-[#ff3366] hover:text-white transition-all shadow-sm"
              >
                ✉
              </a>
              <a
                href="https://www.linkedin.com/in/deeba-fatima-855b83339/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-[#f9d5dc] flex items-center justify-center text-[#ff3366] hover:bg-[#ff3366] hover:text-white transition-all shadow-sm"
              >
                in
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white border border-[#f9d5dc] flex items-center justify-center text-[#ff3366] hover:bg-[#ff3366] hover:text-white transition-all shadow-sm"
              >
                🐙
              </a>
              <a
                href="/contact"
                aria-label="Contact"
                className="w-10 h-10 rounded-full bg-white border border-[#f9d5dc] flex items-center justify-center text-[#ff3366] hover:bg-[#ff3366] hover:text-white transition-all shadow-sm"
              >
                🌐
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Avatar Frame */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden bg-white p-3 border-4 border-white pink-glass-glow shadow-2xl">
            <Image
              src="/deeba_avatar.jpg"
              alt="Deeba Fatima 3D Avatar"
              width={480}
              height={360}
              className="rounded-2xl object-cover w-full h-[380px] md:h-[420px]"
              priority
            />

            {/* Neon Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border-2 border-[#ff3366] px-4 py-2 rounded-2xl shadow-lg animate-float text-center">
              <span className="font-doodle text-lg font-bold text-[#ff3366] block leading-tight">
                plan trial execute repeat ♡
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="max-w-[1140px] mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#f9d5dc] pink-card-shadow space-y-10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center border-b border-[#f9d5dc] pb-8">
            <div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
                <span>WHAT I DO</span>
                <span className="font-doodle text-sm">♡</span>
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#2b1424] leading-tight mt-2">
                I coordinate, verify and manage clinical research that makes{' '}
                <span className="font-script text-3xl md:text-5xl font-normal text-[#ff3366]">
                  impact. ♡
                </span>
              </h2>
            </div>
            <p className="text-[#6b4c5e] text-sm md:text-base font-medium leading-relaxed">
              Experienced in Phase I–IV clinical trials across CRO and hospital site operations, maintaining full compliance with ICH-GCP E6 (R2), FDA 21 CFR Part 11, and TMF Reference Model standards.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#fff0f4] p-6 rounded-2xl border border-[#f9d5dc] space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#f9d5dc] flex items-center justify-center text-xl text-[#ff3366] font-bold shadow-sm">
                📋
              </div>
              <h3 className="font-extrabold text-base text-[#2b1424]">Clinical Operations</h3>
              <p className="text-xs text-[#6b4c5e] leading-relaxed">
                Clean, compliant trial administration &amp; site coordination under ICH-GCP guidelines.
              </p>
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl border border-[#f9d5dc] space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#f9d5dc] flex items-center justify-center text-xl text-[#ff3366] font-bold shadow-sm">
                🗂️
              </div>
              <h3 className="font-extrabold text-base text-[#2b1424]">TMF / eTMF Management</h3>
              <p className="text-xs text-[#6b4c5e] leading-relaxed">
                Filing, quality checking, and maintaining inspection-ready trial master files.
              </p>
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl border border-[#f9d5dc] space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#f9d5dc] flex items-center justify-center text-xl text-[#ff3366] font-bold shadow-sm">
                🔍
              </div>
              <h3 className="font-extrabold text-base text-[#2b1424]">Data Integrity &amp; SDV</h3>
              <p className="text-xs text-[#6b4c5e] leading-relaxed">
                Source Data Verification, eCRF completion, and prompt query resolution.
              </p>
            </div>

            <div className="bg-[#fff0f4] p-6 rounded-2xl border border-[#f9d5dc] space-y-4 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#f9d5dc] flex items-center justify-center text-xl text-[#ff3366] font-bold shadow-sm">
                💊
              </div>
              <h3 className="font-extrabold text-base text-[#2b1424]">Site Coordination</h3>
              <p className="text-xs text-[#6b4c5e] leading-relaxed">
                Patient screening, informed consent, IP drug accountability, and sample dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MY PROJECTS / EXPERIENCE CAROUSEL SECTION */}
      <section className="max-w-[1140px] mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-[#2b1424]">MY PROJECTS</h2>
            <span className="text-[#ff3366] font-doodle text-xl">✨</span>
          </div>
          <Link href="/experience" className="text-xs font-bold text-[#ff3366] hover:underline flex items-center gap-1">
            <span>View all projects</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 01 */}
          <div className="bg-white rounded-2xl border border-[#f9d5dc] p-6 pink-card-shadow space-y-4 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="w-7 h-7 rounded-full bg-[#ffe6eb] text-[#ff3366] flex items-center justify-center font-mono">01</span>
              <span className="bg-[#ffe6eb] text-[#ff3366] px-3 py-1 rounded-full">Clinical Operations</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#2b1424]">Clinical Trial Assistant (CTA)</h3>
            <p className="text-xs text-[#6b4c5e] leading-relaxed">
              Insignia Clinical Services — Managing day-to-day CTA administration, eTMF tracking, and investigator site communication.
            </p>
            <Link href="/experience" className="text-xs font-bold text-[#ff3366] flex items-center gap-1 hover:underline pt-2 inline-block">
              <span>Read details</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-2xl border border-[#f9d5dc] p-6 pink-card-shadow space-y-4 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="w-7 h-7 rounded-full bg-[#ffe6eb] text-[#ff3366] flex items-center justify-center font-mono">02</span>
              <span className="bg-[#ffe6eb] text-[#ff3366] px-3 py-1 rounded-full">Site Coordination</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#2b1424]">Clinical Research Coordinator (CRC)</h3>
            <p className="text-xs text-[#6b4c5e] leading-relaxed">
              Somaya Research Dehradun — Patient screening, ICF procedures, SDV verification, and EDC/IWRS software execution.
            </p>
            <Link href="/experience" className="text-xs font-bold text-[#ff3366] flex items-center gap-1 hover:underline pt-2 inline-block">
              <span>Read details</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-2xl border border-[#f9d5dc] p-6 pink-card-shadow space-y-4 hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="w-7 h-7 rounded-full bg-[#ffe6eb] text-[#ff3366] flex items-center justify-center font-mono">03</span>
              <span className="bg-[#ffe6eb] text-[#ff3366] px-3 py-1 rounded-full">Research Paper</span>
            </div>
            <h3 className="text-lg font-extrabold text-[#2b1424]">Herbal Cold Cream Review Article</h3>
            <p className="text-xs text-[#6b4c5e] leading-relaxed">
              International Journal of Pharmaceutical Research — Formulation methodologies, thermal stability, and physical evaluation.
            </p>
            <Link href="/publication" className="text-xs font-bold text-[#ff3366] flex items-center gap-1 hover:underline pt-2 inline-block">
              <span>Read article</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PYTHON TELEMETRY BANNER */}
      {telemetry && (
        <section className="max-w-[1140px] mx-auto px-6">
          <div className="bg-white border border-[#f9d5dc] rounded-2xl p-6 pink-card-shadow flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐍</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2b1424]">
                  Python 3.13 Backend Data Engine Active
                </h4>
                <p className="text-xs text-[#6b4c5e]">
                  Audit Readiness: <strong className="text-[#ff3366]">{telemetry.data?.metrics?.audit_readiness_score}%</strong> · Systems Mastered: {telemetry.data?.metrics?.clinical_systems}
                </p>
              </div>
            </div>
            <Link href="/api/insights" target="_blank" className="px-4 py-2 bg-[#ffe6eb] text-[#ff3366] text-xs font-bold rounded-full hover:bg-[#ff3366] hover:text-white transition-colors">
              View JSON Endpoint ↗
            </Link>
          </div>
        </section>
      )}

      {/* LET'S CREATE SOMETHING TOGETHER BANNER */}
      <section className="max-w-[1140px] mx-auto px-6">
        <div className="bg-white border border-[#f9d5dc] rounded-3xl p-8 md:p-12 pink-card-shadow grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2b1424] leading-tight">
              Let's create something{' '}
              <span className="font-script text-4xl md:text-6xl font-normal text-[#ff3366]">
                compliant
              </span>{' '}
              together! ♡
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff3366] hover:bg-[#e6004c] text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span>Let's Connect</span>
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-4 text-xs font-bold text-[#2b1424]">
            <div className="flex items-center gap-3 p-3 bg-[#fff0f4] rounded-xl border border-[#f9d5dc]">
              <span>✉</span>
              <a href="mailto:deebaf539@gmail.com" className="hover:text-[#ff3366]">deebaf539@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fff0f4] rounded-xl border border-[#f9d5dc]">
              <span>📍</span>
              <span>Pratapgarh, Uttar Pradesh, India / Remote</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fff0f4] rounded-xl border border-[#f9d5dc]">
              <span>💼</span>
              <span>Available for Clinical Operations &amp; CRC Projects</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
