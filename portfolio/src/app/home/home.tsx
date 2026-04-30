import Header from "@/app/header/header";

export default function HomePage() {
    return (
        <>
         <Header activePage="home" />

            {/* Hero */}
            <div className="text-center border-b border-(--ink) pb-5 mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-(--ink-faint) mb-2">
                    Software Engineer &nbsp;·&nbsp; Lagos, Nigeria
                </p>
                <p className="text-[11px] tracking-widest uppercase text-(--ink-faint)">
                    Written by <span className="text-(--ink) italic">Oluwanifemi Ogedengbe</span> &nbsp;·&nbsp; Est. 2024
                </p>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-8 py-3 border-t border-b border-(--rule) mb-7">
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-widest uppercase text-(--ink-muted) hover:text-(--ink) transition-colors">GitHub</a>
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-widest uppercase text-(--ink-muted) hover:text-(--ink) transition-colors">Email</a>
                <a href="#" className="font-['EB_Garamond'] text-[11px] tracking-widest uppercase text-(--ink-muted) hover:text-(--ink) transition-colors">Twitter</a>
            </div>

            {/* Section Rule */}
            <div className="flex items-center gap-3 mb-5">
                <hr className="flex-1 border-t border-(--ink)" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">Selected Work</span>
                <hr className="flex-1 border-t border-(--ink)" />
            </div>

            {/* Projects */}
            {[
                { name: 'Project Alpha', url: 'alpha.design', desc: 'A tool for designing and shipping faster with your team.' },
                { name: 'Project Beta', url: 'getbeta.io', desc: 'Open-source analytics built for indie developers.' },
                { name: 'Project Gamma', url: 'gamma.app', desc: 'A minimal writing environment built for deep focus.' },
            ].map((project, i, arr) => (
                <div key={project.name} className={`py-4 ${i < arr.length - 1 ? 'border-b border-(--rule)' : ''}`}>
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="font-['Playfair_Display'] text-[18px] font-bold">{project.name}</span>
                        <span className="font-['EB_Garamond'] text-[10px] tracking-widest uppercase text-(--ink-faint)">{project.url}</span>
                    </div>
                    <p className="text-[14px] text-(--ink-muted) leading-relaxed italic">{project.desc}</p>
                </div>
            ))}

            {/* Footer */}
            <footer className="text-center border-t-[3px] border-double border-(--ink) mt-10 pt-3 text-[11px] tracking-[0.08em] text-(--ink-faint) uppercase">
                All Rights Reserved &nbsp;·&nbsp; Oluwanifemi Ogedengbe &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}