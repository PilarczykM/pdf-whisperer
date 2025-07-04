import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function Header() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl justify-between border-b bg-white px-5 py-5 shadow-sm">
      <Link href="#" className="text-2xl">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button className="hidden md:inline-flex" asChild variant="link">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">My documents</Link>
          </Button>
          <Button asChild variant="outline" className="border-indigo-600">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-indigo-600" />
            </Link>
          </Button>
          {/* Upgrade button */}
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
}

export default Header;
