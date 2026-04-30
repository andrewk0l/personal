export default function Home() {
    return (
        <>
            {/* Topper */}
            <div className="flex justify-between items-center border-t-[3px] border-b border-[var(--ink)] py-1.5 mb-0">
        <span className="font-['EB_Garamond'] text-[11px] tracking-[0.06em] text-[var(--ink-muted)]">
          Vol. I &nbsp;·&nbsp; No. 1
        </span>
                <span className="font-['EB_Garamond'] text-[11px] tracking-[0.06em] text-[var(--ink-muted)]">
          Thursday, April 30, 2026
        </span>
            </div>

            {/* Masthead */}
            <div className="text-center py-4 border-b border-[var(--ink)]">
                <div className="font-['UnifrakturMaguntia'] text-[52px] sm:text-[62px] leading-none text-[var(--ink)]">
                    Your Name
                </div>
                <div className="font-['EB_Garamond'] italic text-[13px] text-[var(--ink-faint)] mt-1 tracking-[0.04em]">
                    "Building thoughtful software, one problem at a time."
                </div>
            </div>

            {/* Nav */}
            <nav className="flex justify-center border-b-[3px] border-[var(--ink)] mb-6">
                <a href="/" className="font-['EB_Garamond'] text-[12px] tracking-[0.1em] uppercase px-6 py-1.5 border-l border-r border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]">
                    Home
                </a>
                <a href="/blog" className="font-['EB_Garamond'] text-[12px] tracking-[0.1em] uppercase px-6 py-1.5 border-r border-[var(--ink)] text-[var(--ink)]">
                    Blog
                </a>
            </nav>

            {/* Hero */}
            <div className="text-center border-b border-[var(--ink)] pb-5 mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-faint)] mb-2">
                    Software Engineer &nbsp;·&nbsp; Lagos, Nigeria
                </p>
                <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[42px] font-black leading-[1.05] mb-2">
                    I Build Things<br />That Matter
                </h1>
                <p className="font-['EB_Garamond'] italic text-[16px] text-[var(--ink-muted)] leading-relaxed max-w-[480px] mx-auto mb-4">
                    Currently crafting products at the intersection of design and engineering. Available for select collaborations.
                </p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-[var(--ink-faint)]">
                    Written by <span className="text-[var(--ink)] italic">Your Name</span> &nbsp;·&nbsp; Est. 2024
                </p>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-8 py-3 border-t border-b border-[var(--rule)] mb-7">
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-[0.1em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">GitHub</a>
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-[0.1em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Email</a>
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-[0.1em] uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Twitter</a>
            </div>

            {/* Section Rule */}
            <div className="flex items-center gap-3 mb-5">
                <hr className="flex-1 border-t border-[var(--ink)]" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">Selected Work</span>
                <hr className="flex-1 border-t border-[var(--ink)]" />
            </div>

            {/* Projects */}
            {[
                { name: 'Project Alpha', url: 'alpha.design', desc: 'A tool for designing and shipping faster with your team.' },
                { name: 'Project Beta', url: 'getbeta.io', desc: 'Open-source analytics built for indie developers.' },
                { name: 'Project Gamma', url: 'gamma.app', desc: 'A minimal writing environment built for deep focus.' },
            ].map((project, i, arr) => (
                <div key={project.name} className={`py-4 ${i < arr.length - 1 ? 'border-b border-[var(--rule)]' : ''}`}>
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-['Playfair_Display'] text-[18px] font-bold">{project.name}</span>
                        <span className="font-['EB_Garamond'] text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)]">{project.url}</span>
                    </div>
                    <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed italic">{project.desc}</p>
                </div>
            ))}

            {/* Footer */}
            <footer className="text-center border-t-[3px] border-double border-[var(--ink)] mt-10 pt-3 text-[11px] tracking-[0.08em] text-[var(--ink-faint)] uppercase">
                All Rights Reserved &nbsp;·&nbsp; Your Name &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}