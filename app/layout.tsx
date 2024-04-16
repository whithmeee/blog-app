import type { Metadata } from "next";
import Header from "@/components/Header";
import { Providers } from "./redux/provider";
import "./global.scss";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Providers>
                    <main className="container">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
