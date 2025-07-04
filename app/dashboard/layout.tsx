import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="flex h-screen flex-1 flex-col">
        <Header />
        <main className="mt-10 flex-1 overflow-y-hidden">{children}</main>
      </div>
    </ClerkLoaded>
  );
}

export default DashboardLayout;
