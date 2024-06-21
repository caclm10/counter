import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
        <html lang="en">
            <body
                className={cn(
                    figtree.variable,
                    "font-figtree antialiased bg-background text-foreground"
                )}
            >
                <div className="min-h-screen">{children}</div>
            </body>
        </html>
    );
}
