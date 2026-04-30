import { getPostById } from '@/lib/db';
import Header from "@/app/header/header";
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPostById(Number(id));

    if (!post) notFound();

    return (
        <>
            <Header activePage="blog" />

            <div className="border-b border-[var(--ink)] pb-5 mb-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[var(--ink-faint)] mb-2 text-center">
                    {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h1 className="font-['Playfair_Display'] text-[32px] sm:text-[42px] font-black leading-[1.05] text-center mb-2">
                    {post.title}
                </h1>
            </div>

            <article
                className="font-['EB_Garamond'] text-[17px] leading-relaxed text-[var(--ink)] prose-headings:font-['Playfair_Display']"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className="text-center border-t-[3px] border-double border-[var(--ink)] mt-10 pt-3 text-[11px] tracking-[0.08em] text-[var(--ink-faint)] uppercase">
                All Rights Reserved &nbsp;·&nbsp; Your Name &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}