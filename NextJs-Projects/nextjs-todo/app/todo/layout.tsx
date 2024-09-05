import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="flex flex-col">
          <header className="flex items-center justify-between h-14  border-b bg-muted/40 px-4 lg:h-[64px] lg:px-16">
            <div>NextJs Todo App</div>
            <Button>Add Todo</Button>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-1 lg:gap-6 lg:p-1">
            <div className="flex-grow py-8 md:h-full md:overflow-y-auto px-16">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
