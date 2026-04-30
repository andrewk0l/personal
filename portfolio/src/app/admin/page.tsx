'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import Header from "@/app/header/header";

export default function AdminPage() {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [2, 3],
                },
            }),
        ],
        editorProps: {
            attributes: {
                class: "font-['EB_Armond'] text-[17px] leading-relaxed text-[var(--ink)] min-h-[400px] outline-none",
            },
        },
    });

    async function handlePublish() {
        if (!title || !editor?.getHTML()) return;
        setStatus('loading');

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content: editor.getHTML() }),
            });

            if (!res.ok) throw new Error();
            setStatus('success');
            setTitle('');
            editor.commands.clearContent();
        } catch {
            setStatus('error');
        }
    }

    return (
        <>
            <Header activePage="blog" />

            {/* Section Rule */}
            <div className="flex items-center gap-3 mb-5">
                <hr className="flex-1 border-t border-(--ink)" />
                <span className="font-['Playfair_Display'] text-[10px] tracking-[0.18em] uppercase whitespace-nowrap">New Dispatch</span>
                <hr className="flex-1 border-t border-(--ink)" />
            </div>

            {/* Title */}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full font-['Playfair_Display'] text-[28px] sm:text-[32px] font-black bg-transparent border-b border-(--rule) outline-none pb-2 mb-6 placeholder:text-(--ink-faint) text-(--ink)"
            />

            {/* Toolbar */}
            <div className="flex gap-3 mb-3 border-b border-(--rule) pb-3">
                {[
                    { label: 'B', action: () => editor?.chain().focus().toggleBold().run(), active: editor?.isActive('bold') },
                    { label: 'I', action: () => editor?.chain().focus().toggleItalic().run(), active: editor?.isActive('italic') },
                    { label: 'H2', action: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(), active: editor?.isActive('heading', { level: 2 }) },
                    { label: 'H3', action: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(), active: editor?.isActive('heading', { level: 3 }) },
                    { label: '❝', action: () => editor?.chain().focus().toggleBlockquote().run(), active: editor?.isActive('blockquote') },
                ].map(btn => (
                    <button
                        key={btn.label}
                        onClick={btn.action}
                        className={`font-['EB_Armond'] text-[13px] tracking-widest uppercase px-3 py-1 border border-(--ink) transition-colors ${btn.active ? 'bg-(--ink) text-(--paper)' : 'text-(--ink) hover:bg-(--ink) hover:text-(--paper)'}`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>

            {/* Editor */}
            <div className="border border-(--rule) p-4 mb-6 min-h-100">
                <EditorContent editor={editor} />
            </div>

            {/* Publish */}
            <div className="flex items-center justify-between">
                <button
                    onClick={handlePublish}
                    disabled={status === 'loading'}
                    className="font-['EB_Garamond'] text-[12px] tracking-widest uppercase px-6 py-2 bg-(--ink) text-(--paper) hover:opacity-80 transition-opacity disabled:opacity-40"
                >
                    {status === 'loading' ? 'Publishing...' : 'Publish'}
                </button>

                {status === 'success' && (
                    <span className="font-['EB_Garamond'] italic text-[14px] text-(--ink-muted)">Published successfully.</span>
                )}
                {status === 'error' && (
                    <span className="font-['EB_Garamond'] italic text-[14px] text-red-700">Something went wrong.</span>
                )}
            </div>

            <footer className="text-center border-t-[3px] border-double border-(--ink) mt-10 pt-3 text-[11px] tracking-[0.08em] text-(--ink-faint) uppercase">
                All Rights Reserved &nbsp;·&nbsp; Your Name &nbsp;·&nbsp; 2026
            </footer>
        </>
    );
}