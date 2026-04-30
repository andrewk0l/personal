import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!);

export type Post = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
};

export async function getAllPosts(): Promise<Post[]> {
    const posts = await sql<Post[]>`
    SELECT id, title, created_at
    FROM posts
    ORDER BY created_at DESC
  `;
    return posts;
}

export async function getPostById(id: number): Promise<Post | null> {
    const posts = await sql<Post[]>`
    SELECT id, title, content, created_at
    FROM posts
    WHERE id = ${id}
  `;
    return posts[0] ?? null;
}