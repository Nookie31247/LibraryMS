import "./globals.css";
import Link from "next/link";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
      <body className="m-8 justify-center">
        <Link className="text-5xl font-bold block text-center w-full" href="/">도서 관리 시스템</Link>
        <div className="bg-white p-8 mt-8 rounded-2xl max-w-3xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
