import { NextResponse, NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    console.log("🚀 Middleware Triggered 🚀");
    const path = req.nextUrl.pathname;
    console.log("🌍 URL :", req.nextUrl.pathname);
    console.log("🔑 Token founded");

    console.log(path);
    console.log("No token found, redirecting to login page");
    return NextResponse.redirect(new URL(`?callbackUrl=${encodeURIComponent(path)}`, req.url));

}

export const config = {
    matcher: ["/reconciliation/:path*, /detail/:path*", "/account/:path*", "/unauthorized/:path*"],
};