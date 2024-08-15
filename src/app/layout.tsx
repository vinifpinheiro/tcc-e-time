import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import "./globals.css";
import Navbar from "@/components/navbar/";
import { ThemeProvider } from "@/components/ui/theme-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className="bg-background">
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
