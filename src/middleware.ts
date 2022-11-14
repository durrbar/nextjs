
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. /examples (inside /public)
     * 5. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(req: NextRequest) {
    const url = req.nextUrl;
  
    // Get hostname of request
    const hostname = req.headers.get("host");
  
    // if (
    //   url.pathname.startsWith("/api") || //  exclude all API routes
    //   url.pathname.startsWith("/static") || // exclude static files
    //   url.pathname.startsWith("/_next") || // exclude static files
    //   url.pathname.includes(".") // exclude all files in the public folder
    // ) {
    //   return NextResponse.next();
    // }
    
    // rewrite application folder
    // if (hostname === "assets.localhost:3031" || hostname === "assets.durrbar.com") {
    //   url.pathname = `/assets${url.pathname}`;
    //   return NextResponse.rewrite(url);
    // }
    if (hostname === "www.durrbar.localhost:3031" || hostname === "www.durrbar.localhost:3000" || hostname === "www.durrbar.com") {
      url.pathname = `/domains/durrbar/www${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "dashboard.localhost:3031" || hostname === "dashboard.localhost:3000" || hostname === "dashboard.durrbar.com") {
      url.pathname = `/domains/durrbar/dashboard${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "auth.localhost:3031" || hostname === "auth.durrbar.com") {
      url.pathname = `/domains/durrbar/auth${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "accounts.localhost:3031" || hostname === "accounts.localhost:3000" || hostname === "accounts.durrbar.com") {
      url.pathname = `/domains/durrbar/accounts${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "docs.localhost:3031" || hostname === "docs.localhost:3000" || hostname === "docs.durrbar.com") {
      url.pathname = `/domains/durrbar/docs${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "support.localhost:3031" || hostname === "support.localhost:3000" || hostname === "support.durrbar.com") {
      url.pathname = `/domains/durrbar/support${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "ts.localhost:3031" || hostname === "ts.localhost:3000" || hostname === "www.tasfiashopping.com") {
      url.pathname = `/domains/tasfiashopping/www${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    if (hostname === "nc.localhost:3031" || hostname === "nc.localhost:3000" || hostname === "www.nandonicchoya.com" || hostname === "nc.durrbar.com") {
      url.pathname = `/domains/nandonicchoya/www${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  
    // rewrite everything else to `/_sites/[site] dynamic route
    url.pathname = `${url.pathname}`;
    return NextResponse.rewrite(url);
    // return NextResponse.next();
  }
