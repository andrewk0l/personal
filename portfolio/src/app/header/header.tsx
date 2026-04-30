import Link from 'next/link';
import { getCurrentDate } from '@/lib/utils';

export default function Header({ activePage }: { activePage: 'home' | 'blog' }) {
    return (
        <>
            {/* Topper */}
            <div className="flex justify-between items-center border-t-[3px] border-b border-[var(--ink)] py-1.5">
        <span className="font-['EB_Garamond'] text-[11px] tracking-[0.06em] text-[var(--ink-muted)]">
          Vol. I &nbsp;·&nbsp; No. 1
        </span>
                <span className="font-['EB_Garamond'] text-[11px] tracking-[0.06em] text-[var(--ink-muted)]">
          {getCurrentDate()}
        </span>
            </div>

            {/* Masthead */}
            <div className="text-center py-4 border-b border-[var(--ink)]">
                <div className="font-['UnifrakturMaguntia'] text-[52px] sm:text-[62px] leading-none text-[var(--ink)]">
                    Oluwanifemi
                </div>
                <div className="font-['EB_Garamond'] italic text-[13px] text-[var(--ink-faint)] mt-1 tracking-[0.04em]">
                    "Building thoughtful software, one problem at a time."
                </div>
            </div>

            {/* Nav */}
            <nav className="flex justify-center border-b-[3px] border-[var(--ink)] mb-6">
                <Link href="/" className={`font-['EB_Garamond'] text-[12px] tracking-[0.1em] uppercase px-6 py-1.5 border-l border-r border-[var(--ink)] ${activePage === 'home' ? 'bg-[var(--ink)] text-[var(--paper)]' : 'text-[var(--ink)]'}`}>
                    Home
                </Link>
                <Link href="/blog" className={`font-['EB_Garamond'] text-[12px] tracking-[0.1em] uppercase px-6 py-1.5 border-r border-[var(--ink)] ${activePage === 'blog' ? 'bg-[var(--ink)] text-[var(--paper)]' : 'text-[var(--ink)]'}`}>
                    Blog
                </Link>
            </nav>
        </>
    );
}