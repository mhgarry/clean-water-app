import React from "react"; // Import the React library
import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={cn("max-w-[1446px] w-full")}>{children}</div>;
}
