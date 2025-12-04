// middleware.ts
import {NextRequest, NextResponse} from 'next/server';


export function middleware(req: NextRequest) {
    const auth = req.headers.get('authorization');
    console.log(auth);
    if (!auth || !auth.startsWith('Bearer ') || auth.split(' ')[1] !== 'api-token-test') {
        return NextResponse.json({error: true, message: 'Unauthorized'}, {status: 401});
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/:path*'],
};