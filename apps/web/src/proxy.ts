import { NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
    const accessToken = await request.cookies.get("access_token");

    if (!accessToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: "/app/:path*",
};
