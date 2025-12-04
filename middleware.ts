// middleware.ts
import {NextRequest, NextResponse} from 'next/server';


export function middleware(req: NextRequest) {
    const auth = req.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
        return NextResponse.json({ error: true, message: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'],
};