import Link from 'next/link';
import { getAllPosts, Post } from '@/lib/db';
import Header from "@/app/header/header";

export default async function BlogPage() {
    const posts: Post[] = await getAllPosts();

    return (
        <>
            <Header activePage="blog" />
            {/* Hero */}
            <div className="text-center border-b border-(--ink) pb-5 mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-(--ink-faint) mb-2">
                    the absurdist penguin &nbsp;·&nbsp; All Dispatches
                </p>
              
                <p className="font-['EB_Garamond'] italic text-[16px] text-(--ink-muted) leading-relaxed max-w-120 mx-auto">
                    Notes on software engineering, films and the occasional musing.
                </p>
            </div>

            {/* Section Rule */}
            <div className="flex items-center gap-3 mb-5">
                <hr className="flex-1 border-t border-(--ink)" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">Latest Dispatches</span>
                <hr className="flex-1 border-t border-(--ink)" />
            </div>

            {/* Posts */}
            {posts.length === 0 ? (
                <p className="font-['EB_Garamond'] italic text-(--ink-muted) text-center py-8">
                    No dispatches yet.
                </p>
            ) : (
                posts.map((post, i, arr) => (
                    <div key={post.id} className={`flex justify-between items-baseline py-3 ${i < arr.length - 1 ? 'border-b border-(--rule)' : ''}`}>
                        <Link
                            href={`/blog/${post.id}`}
                            className="font-['Playfair_Display'] text-[17px] hover:italic transition-all text-(--ink)"
                        >
                            {post.title}
                        </Link>
                        <span className="font-['EB_Garamond'] text-[10px] tracking-widest uppercase text-(--ink-faint) whitespace-nowrap ml-4">
              {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </span>
                    </div>
                ))
            )}

            {/* Footer */}
            <footer className="text-center border-t-[3px] border-double border-(--ink) mt-10 pt-3 text-[11px] tracking-[0.08em] text-(--ink-faint) uppercase">
                All Rights Reserved &nbsp;·&nbsp; Oluwanifemi Ogedengbe &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}