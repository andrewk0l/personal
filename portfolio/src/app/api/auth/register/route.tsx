import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getUserByEmail, createUser } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const existing = await getUserByEmail(email);
        if (existing) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        const hashed = await bcrypt.hash(password, 10);
        const user = await createUser(email, hashed);

        return NextResponse.json(user, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}