import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#f9d5dc] bg-[#fff0f4] pt-12 pb-8 mt-auto">
      <div className="max-w-[1140px] mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#f9d5dc] pb-8">
          <div className="flex items-center gap-2">
            <span className="font-script text-3xl font-bold text-[#ff3366]">deeba.</span>
            <span className="text-[#ff3366] font-doodle font-bold text-xl">♡</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-[#2b1424]">
            <Link href="/" className="hover:text-[#ff3366] transition-colors">HOME</Link>
            <Link href="/about" className="hover:text-[#ff3366] transition-colors">ABOUT</Link>
            <Link href="/experience" className="hover:text-[#ff3366] transition-colors">WORK</Link>
            <Link href="/skills" className="hover:text-[#ff3366] transition-colors">SERVICES</Link>
            <Link href="/publication" className="hover:text-[#ff3366] transition-colors">JOURNAL</Link>
            <Link href="/contact" className="hover:text-[#ff3366] transition-colors">CONTACT</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#6b4c5e]">
          <div className="flex items-center gap-1">
            <span className="text-[#ff3366]">♥</span>
            <span>© 2026 Deeba Fatima. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-[#2b1424]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#ff3366]">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#ff3366]">LinkedIn</a>
            <a href="mailto:deebaf539@gmail.com" className="hover:text-[#ff3366]">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
