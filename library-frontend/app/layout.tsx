import "./globals.css";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
      <body className="m-8 justify-center">
        <h1 className="text-5xl font-bold text-center">도서 관리 시스템</h1>
        <div className="bg-white p-8 mt-6 rounded-2xl">{children}</div>
      </body>
    </html>
  );
}
