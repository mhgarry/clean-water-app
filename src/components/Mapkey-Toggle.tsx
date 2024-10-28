"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-click-outside";
import { ToggleGroupItem } from "./ui/toggle-group";
import { ToggleGroup } from "./ui/toggle-group";
import { toggleVariants } from "./ui/toggle";

const MapkeyToggle = () => {
  // Initialize activeStatus to "Safe" to highlight the Safe button by default
  const [activeStatus, setActiveStatus] = useState<string | null>("Safe");

  // Handle outside click to deselect
  useOutsideClick(() => {
    setActiveStatus(null);
  });

  // Handle Esc key press to deselect
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStatus(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const setWaterStatus = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <div>
      {/* Button Group Container */}
      {/* <div className=" grid grid-cols-3 p-2 w-fit rounded-lg my-4 shadow-xl border-border border-solid"> */}
      <div className="flex flex-col bg-primary p-2 max-w-[200px] rounded-md">
        <ToggleGroup type="single">
          <ToggleGroupItem
            onClick={() => setWaterStatus("Safe")}
            value="safe"
            className={cn(
              toggleVariants({
                variant: activeStatus === "Safe" ? "safe" : "default",
              })
            )}
          >
            Safe
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setWaterStatus("Caution")}
            value="caution"
            className={cn(
              toggleVariants({
                variant: activeStatus === "Caution" ? "caution" : "default",
              })
            )}
          >
            Caution
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setWaterStatus("Danger")}
            value="danger"
            className={cn(
              toggleVariants({
                variant: activeStatus === "Danger" ? "danger" : "default",
              })
            )}
          >
            Danger
          </ToggleGroupItem>
        </ToggleGroup>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MapkeyToggle;
