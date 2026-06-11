import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/admin/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MilliFood Admin Panel",
  description: "Modern admin panel for MilliFood management",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-zinc-50 text-zinc-900 min-h-screen`}>
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}
