'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/header/header';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const [error, setError] = useState('');

    async function handleLogin() {
        setStatus('loading');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error);
                setStatus('error');
                return;
            }

            router.push('/admin');
        } catch {
            setError('Something went wrong.');
            setStatus('error');
        }
    }

    return (
        <>
            <Header activePage="home" />

            <div className="flex items-center gap-3 mb-8">
                <hr className="flex-1 border-t border-[var(--ink)]" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">Sign In</span>
                <hr className="flex-1 border-t border-[var(--ink)]" />
            </div>

            <div className="max-w-sm mx-auto flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full font-['EB_Garamond'] text-[16px] bg-transparent border-b border-[var(--rule)] outline-none pb-2 placeholder:text-[var(--ink-faint)] text-[var(--ink)]"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full font-['EB_Garamond'] text-[16px] bg-transparent border-b border-[var(--rule)] outline-none pb-2 placeholder:text-[var(--ink-faint)] text-[var(--ink)]"
                />

                {status === 'error' && (
                    <p className="font-['EB_Garamond'] italic text-[14px] text-red-700">{error}</p>
                )}

                <button
                    onClick={handleLogin}
                    disabled={status === 'loading'}
                    className="font-['EB_Garamond'] text-[12px] tracking-[0.1em] uppercase px-6 py-2 bg-[var(--ink)] text-[var(--paper)] hover:opacity-80 transition-opacity disabled:opacity-40 mt-2"
                >
                    {status === 'loading' ? 'Signing in...' : 'Sign In'}
                </button>
            </div>
        </>
    );
}