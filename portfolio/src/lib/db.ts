import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!);

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

export async function getUserByEmail(email: string) {
    const users = await sql`
    SELECT id, email, password
    FROM users
    WHERE email = ${email}
  `;
    return users[0] ?? null;
}

export async function createUser(email: string, hashedPassword: string) {
    const users = await sql`
    INSERT INTO users (email, password)
    VALUES (${email}, ${hashedPassword})
    RETURNING id, email
  `;
    return users[0];
}