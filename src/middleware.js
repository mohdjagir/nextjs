import { NextResponse } from 'next/server'
import React from 'react'

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/login",request.url));
}

export const config= {
    matcher: ["/about/test/:path*","/studentlist/:path*"]
}