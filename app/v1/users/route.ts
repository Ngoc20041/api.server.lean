// app/api/users/route.ts
import { NextResponse } from 'next/server';


export async function GET(req: Request) {
    return NextResponse.json({
        page: 1,
        limit: 20,
        total: 2,
        data: [
            { id: 1, name: 'User A', email: 'a@example.com', role: 'admin' },
            { id: 2, name: 'User B', email: 'b@example.com', role: 'user' }
        ]
    });
}


export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ id: 101, message: 'User created successfully', data: body });
}