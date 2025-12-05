import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { password } = body

        if (password === 'password') {
            const response = NextResponse.json({ success: true })

            // Set a cookie that expires in 1 day
            response.cookies.set('auth', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            })

            return response
        }

        return NextResponse.json(
            { success: false, message: 'Invalid password' },
            { status: 401 }
        )
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'An error occurred' },
            { status: 500 }
        )
    }
}
