'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const { user, login, signup, loginWithGoogle, logout } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto px-6 py-16 text-center space-y-6">
        <div className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#ffe6eb] text-[#ff3366] font-bold text-2xl flex items-center justify-center mx-auto">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
            ) : (
              user.email?.charAt(0).toUpperCase()
            )}
          </div>
          <h2 className="text-xl font-extrabold text-[#2b1424]">Signed In</h2>
          <p className="text-xs font-bold text-[#6b4c5e]">{user.email}</p>
          <p className="text-[0.7rem] font-mono text-[#ff3366] bg-[#ffe6eb] py-1 px-3 rounded-full inline-block">
            Project: rbproduct-41f57
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={logout}
              className="px-6 py-2.5 bg-[#ff3366] text-white text-xs font-bold rounded-full hover:bg-[#e6004c] transition-colors"
            >
              Sign Out
            </button>
            <Link
              href="/"
              className="px-6 py-2.5 bg-[#fff0f4] text-[#2b1424] text-xs font-bold rounded-full border border-[#f9d5dc]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto px-6 py-12 md:py-16 space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-extrabold tracking-widest uppercase text-[#ff3366]">
          FIREBASE AUTHENTICATION
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2b1424]">
          {isSignUp ? 'Create an Account' : 'Sign In to Deeba Portfolio'}
        </h1>
        <p className="text-xs text-[#6b4c5e]">Firebase Project: rbproduct-41f57</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-[#f9d5dc] pink-card-shadow max-w-md mx-auto space-y-6">
        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full py-3 bg-[#fff0f4] hover:bg-[#ffe6eb] border border-[#f9d5dc] text-[#2b1424] font-bold text-xs rounded-full flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-[#f9d5dc] w-full"></div>
          <span className="bg-white px-3 text-[0.7rem] font-bold text-[#6b4c5e] uppercase tracking-wider absolute">
            or email
          </span>
        </div>

        {error && (
          <div className="p-3 bg-[#ffe6eb] text-[#ff3366] border border-[#f9d5dc] rounded-xl text-xs font-bold text-center">
            {error}
          </div>
        )}

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold text-[#2b1424] mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-[#f9d5dc] text-xs focus:outline-none focus:border-[#ff3366]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#ff3366] hover:bg-[#e6004c] text-white font-bold text-xs rounded-full shadow-md transition-all"
          >
            {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-bold text-[#ff3366] hover:underline"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
