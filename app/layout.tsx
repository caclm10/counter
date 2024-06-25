import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

export const metadata: Metadata = {
    title: "Counter",
    description: "Just a simple counter.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(figtree.variable, "font-figtree antialiased")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-screen px-4 py-8">
                        <div className="flex justify-end mb-6">
                            <ModeToggle />
                        </div>

                        {children}
                    </div>

                    <Toaster position="bottom-center" />
                </ThemeProvider>
            </body>
        </html>
    );
}
