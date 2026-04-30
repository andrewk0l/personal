import Link from 'next/link';
import { getAllPosts, Post } from '@/lib/db';
import Header from "@/app/header/header";

export default async function BlogPage() {
    const posts: Post[] = await getAllPosts();

    return (
        <>
            <Header activePage="blog" />
            {/* Hero */}
            <div className="text-center border-b border-[var(--ink)] pb-5 mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-faint)] mb-2">
                    The Journal &nbsp;·&nbsp; All Dispatches
                </p>
                <h1 className="font-['Playfair_Display'] text-[36px] sm:text-[42px] font-black leading-[1.05] mb-2">
                    Absurdist<br />Penguin
                </h1>
                <p className="font-['EB_Garamond'] italic text-[16px] text-[var(--ink-muted)] leading-relaxed max-w-[480px] mx-auto">
                    Notes on building, designing, and the occasional rabbit hole.
                </p>
            </div>

            {/* Section Rule */}
            <div className="flex items-center gap-3 mb-5">
                <hr className="flex-1 border-t border-[var(--ink)]" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">Latest Dispatches</span>
                <hr className="flex-1 border-t border-[var(--ink)]" />
            </div>

            {/* Posts */}
            {posts.length === 0 ? (
                <p className="font-['EB_Garamond'] italic text-[var(--ink-muted)] text-center py-8">
                    No dispatches yet.
                </p>
            ) : (
                posts.map((post, i, arr) => (
                    <div key={post.id} className={`flex justify-between items-baseline py-3 ${i < arr.length - 1 ? 'border-b border-[var(--rule)]' : ''}`}>
                        <Link
                            href={`/blog/${post.id}`}
                            className="font-['Playfair_Display'] text-[17px] hover:italic transition-all text-[var(--ink)]"
                        >
                            {post.title}
                        </Link>
                        <span className="font-['EB_Garamond'] text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)] whitespace-nowrap ml-4">
              {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
                    </div>
                ))
            )}

            {/* Footer */}
            <footer className="text-center border-t-[3px] border-double border-[var(--ink)] mt-10 pt-3 text-[11px] tracking-[0.08em] text-[var(--ink-faint)] uppercase">
                All Rights Reserved &nbsp;·&nbsp; Your Name &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}