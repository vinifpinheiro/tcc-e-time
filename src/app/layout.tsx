import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "./components/navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className="bg-background h-[calc(100vh-76px)] overflow-hidden ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <Navbar />
            </SignedIn>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
