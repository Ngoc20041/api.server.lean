// app/api/v1/profile/route.ts
import {NextResponse} from 'next/server';


export async function GET() {
    return NextResponse.json({
        id: 1,
        name: 'Nguyen Van A',
        email: 'a@example.com',
        avatar: 'https://example.com/avatar.png'
    });
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        return NextResponse.json({
            message: 'Profile updated successfully',
            data: body
        });
    } catch (e) {
        return NextResponse.json({error: true, message: e.message});
    }

}