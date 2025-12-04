// app/api/v1/users/[id]/route.ts
import { NextResponse } from 'next/server';


export async function GET(_req: Request, { params }: { params: { id: string } }) {
    return NextResponse.json({
        id: params.id,
        name: 'User X',
        email: 'userx@example.com',
        role: 'user'
    });
}
export async function PUT(req: Request, { params }) {
    const body = await req.json();
    return NextResponse.json({ message: 'User updated successfully', id: params.id, data: body });
}
export async function DELETE(_req: Request, { params }) {
    return NextResponse.json({ message: 'User deleted successfully', id: params.id });
}