import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./lib/auth";

export async function middleware( req: NextRequest ) {

    const currentUser = await verifySession()
    
    // si le user n'a pas de token et sur l'url /dashbaord => redirige vers login pour l'auth
    if (!currentUser && req.nextUrl.pathname.startsWith('/dashboard')) {
        
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }