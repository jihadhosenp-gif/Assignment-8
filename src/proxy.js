import { NextResponse } from "next/server";


export function proxy(request) {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/tiles", "/profile"],
}