// app/v1/users/[id]/route.ts
import {NextResponse} from 'next/server';


export async function GET(_req: Request, context: { params: Promise<{ id: string }> }) {
    const params = await context.params;
    return NextResponse.json({
        id: params.id,
        name: 'User X',
        email: 'userx@example.com',
        role: 'user'
    });
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
    const params = await context.params;
    try {
        const body = await req.json();
        return NextResponse.json({message: 'User updated successfully', id: params.id, data: body});
    } catch (e) {
        return NextResponse.json({error: true, message: e.message});
    }

}

export async function DELETE(_req: Request, context: { params: Promise<{ id: string }> }) {
    const params = await context.params;
    return NextResponse.json({message: 'User deleted successfully', id: params.id});
}