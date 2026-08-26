'use client';

import { useState } from 'react';
import { saveContactMessage } from '@/lib/firestore';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('deebaf539@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const result = await saveContactMessage({
      name,
      email,
      subject,
      message,
    });

    if (result.success) {
      setStatus({ type: 'success', text: 'Message saved to Firestore database! I will respond shortly.' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setStatus({ type: 'error', text: 'Failed to send message: ' + result.error });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366] flex items-center gap-1">
          <span>CONTACT &amp; FIRESTORE DATABASE</span>
          <span className="font-doodle text-base">✉</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b1424]">
          Let's Connect &amp; Collaborate ♡
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Info & CV */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow space-y-6">
            <p className="text-sm text-[#6b4c5e] font-medium leading-relaxed">
              Open to clinical research assistant (CTA), coordinator (CRC), or trial administration opportunities. Send a message directly to my Firestore database or connect with me on LinkedIn below.
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
                  <span className="text-lg">💼</span>
                  <a
                    href="https://www.linkedin.com/in/deeba-fatima-855b83339/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff3366] flex items-center gap-1"
                  >
                    <span>LinkedIn Profile</span>
                    <span>↗</span>
                  </a>
                </div>
                <span className="px-3 py-1 bg-white text-[#ff3366] rounded-full border border-[#f9d5dc] text-[0.7rem]">
                  Connected
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#fff0f4] rounded-2xl border border-[#f9d5dc]">
                <span className="text-lg">📍</span>
                <span>Pratapgarh, Uttar Pradesh, India / Remote</span>
              </div>
            </div>
          </div>

          <div className="bg-[#fff0f4] p-6 rounded-3xl border border-[#f9d5dc] text-center space-y-4">
            <h3 className="font-extrabold text-base text-[#2b1424]">Curriculum Vitae</h3>
            <p className="text-xs text-[#6b4c5e]">Download full clinical credentials in PDF format.</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff3366] text-white text-xs font-bold rounded-full shadow-md hover:bg-[#e6004c] transition-colors"
            >
              <span>Download Resume (PDF)</span>
              <span>⤓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Firestore Live Form */}
        <div className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow space-y-6">
          <div className="flex items-center justify-between border-b border-[#f9d5dc] pb-4">
            <h2 className="text-xl font-extrabold text-[#2b1424]">Send a Direct Message</h2>
            <span className="text-[0.7rem] font-mono font-bold text-[#ff3366] bg-[#ffe6eb] px-3 py-1 rounded-full">
              🔥 Firestore Connected
            </span>
          </div>

          {status && (
            <div
              className={`p-4 rounded-2xl text-xs font-bold ${
                status.type === 'success'
                  ? 'bg-[#eef1f1] text-[#3a4a54] border border-[#c9c8c2]'
                  : 'bg-[#ffe6eb] text-[#ff3366] border border-[#f9d5dc]'
              }`}
            >
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Sarah Smith"
                className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@clinicalcro.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Clinical Trial Operations Inquiry"
                className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your clinical research or site coordination request..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#ff3366] hover:bg-[#e6004c] text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Saving to Firestore...' : 'Send Message to Firestore'}</span>
              <span>🔥</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
