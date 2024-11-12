import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "./components/navbar";
import TimerProvider from "./timer-provider";
import UserProvider from "./user-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className="bg-background h-[calc(100vh-76px)] overflow-hidden relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <Navbar />
            </SignedIn>
            <UserProvider>
              <TimerProvider>{children}</TimerProvider>
            </UserProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
