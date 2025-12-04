// app/api/users/route.ts
import {NextResponse} from 'next/server';


export async function GET(req: Request) {
    return NextResponse.json({
        total: 7,
        data: [
            {
                id: 1,
                name: 'User A',
                email: 'a@example.com',
                role: 'admin',
                avatar: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/small/avatar_hoat_hinh_db4e0e9cf4.jpg'
            },
            {
                id: 2,
                name: 'User B',
                email: 'b@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            },
            {
                id: 3,
                name: 'User C',
                email: 'c@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            },
            {
                id: 4,
                name: 'User D',
                email: 'd@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            },
            {
                id: 5,
                name: 'User E',
                email: 'e@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            },
            {
                id: 6,
                name: 'User F',
                email: 'f@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            },
            {
                id: 7,
                name: 'User G',
                email: 'g@example.com',
                role: 'user',
                avatar: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg'
            }
        ]
    });
}


export async function POST(req: Request) {
    try {
        const body = await req.json();
        return NextResponse.json({id: 101, message: 'User created successfully', data: body});

    } catch (e) {
        return NextResponse.json({error: true, message: e.message});
    }
}