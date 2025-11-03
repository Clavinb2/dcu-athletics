import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | DCU Athletics",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


