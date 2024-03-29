import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ACE 2024",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-pewter text-oliver text-slate-900">
            <body className={inter.className}>
                <Navbar />
                <main className="md:mx-20 mx-6">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
