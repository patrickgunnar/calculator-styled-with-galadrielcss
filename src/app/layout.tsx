import type { Metadata } from "next";
import Header from "@/components/header";
import SocialMedia from "@/components/social-media";
import "./globals.css";

export const metadata: Metadata = {
    title: "Calculator With Neumorphism Effect Styled With Galadriel CSS",
    description: "Introducing a sleek, modern, and visually appealing Calculator App designed using Galadriel CSS framework.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="@class:body">
                <Header />
                <SocialMedia />
                {children}
            </body>
        </html>
    );
}
