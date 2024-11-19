import { NextRequest, NextResponse } from "next/server";
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

// export function middleware(request: NextRequest) {
//   // middleware によるリクエスト処理
//   console.log("middleware: " + request.url);

//   // 通常のサーバーサイド処理
//   return NextResponse.next();
// }

export const middleware = createNextAuthMiddleware();

// マッチャーの設定（設定したパスとマッチするときのみ middleware を実行）
export const config = {
  // matcher: "/news/:path*",
  matcher: ["/(.*)"],
};
