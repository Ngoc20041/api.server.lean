// middleware.ts
import {NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
    const auth = req.headers.get('authorization');
    // Bật CORS headers cho tất cả request
    const res = NextResponse.next();
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Xử lý preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res;
    }
    console.log(auth)
    console.log("123", auth.split(' ')[1])
    // Kiểm tra Bearer token
    if (!auth || !auth.startsWith('Bearer ') || auth.split(' ')[1] !== 'api-token-test') {
        return NextResponse.json(
            {error: true, message: 'Unauthorized'},
            {status: 401, headers: res.headers} // giữ CORS header
        );
    }

    return res;
}

export const config = {
    matcher: ['/:path*'], // áp dụng cho tất cả route
};
