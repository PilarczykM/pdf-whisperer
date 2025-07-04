"use client";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
  const router = useRouter();

  const handleClick = () => {
    // Check if user is FREE tier and if they're over the file limit, push to the upgrade page
    router.push("/dashboard/upload");
  };
  return (
    <Button
      onClick={handleClick}
      className="flex h-80 w-64 flex-col items-center rounded-xl bg-gray-200 text-gray-500 drop-shadow-md"
    >
      <PlusCircleIcon className="!h-16 !w-16" />
      <p>Add a document</p>
    </Button>
  );
}

export default PlaceholderDocument;
