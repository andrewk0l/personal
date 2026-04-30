import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
    const isLoginPage = request.nextUrl.pathname === '/admin/login';
    const isRegisterPage = request.nextUrl.pathname === '/admin/register';

    if (isLoginPage || isRegisterPage) return NextResponse.next();

    if (isAdminRoute) {
        if (!token) return NextResponse.redirect(new URL('/admin/login', request.url));

        try {
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};