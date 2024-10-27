"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button"; // Adjust the import path as necessary
import { useOutsideClick } from "@/hooks/use-click-outside";

const MapkeyToggle = () => {
  // Initialize activeStatus to "Safe" to highlight the Safe button by default
  const [activeStatus, setActiveStatus] = useState<string>("Safe");

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
      <div className="relative flex flex-row justify-center items-start gap-4 p-2 bg-secondary w-fit max-w-[300px] rounded-lg my-8 shadow-xl border-border border-solid">
        <Button
          variant="secondary"
          onClick={() => setWaterStatus("Safe")}
          aria-pressed={activeStatus === "Safe"}
          aria-label="Set water status to safe"
          className={cn(
            "button",
            activeStatus === "Safe"
              ? "bg-green-500 text-white font-bold"
              : "bg-card text-white hover:bg-green-500/80 "
          )}
        >
          Safe
        </Button>
        <Button
          variant="secondary"
          onClick={() => setWaterStatus("Caution")}
          aria-pressed={activeStatus === "Caution"}
          aria-label="Set water status to caution"
          className={cn(
            "button",
            activeStatus === "Caution"
              ? "bg-yellow-500 text-white font-bold"
              : "bg-card text-white hover:bg-yellow-500/80 "
          )}
        >
          Caution
        </Button>
        <Button
          variant="secondary"
          onClick={() => setWaterStatus("Danger")}
          aria-pressed={activeStatus === "Danger"}
          aria-label="Set water status to danger"
          className={cn(
            "button",
            activeStatus === "Danger"
              ? "bg-red-500 text-white font-bold"
              : "bg-card text-white hover:bg-red-500/80 ",
            "gleam" // Add the gleam class to the button
          )}
        >
          Danger
        </Button>
      </div>

      <style jsx>{`
        @keyframes gleam {
          0% {
            background-position: 200%;
          }
          100% {
            background-position: -200%;
          }
        }

        .gleam {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.3)
          );
          background-size: 200% 100%;
          animation: gleam 1.5s ease-in-out infinite;
        }

        .button {
          position: relative;
          padding: 10px 20px;
          border-radius: 8px;
          transition: #fff 0.4s, color 0.4s;
          cursor: pointer;
        }

        .button:hover {
          filter: brightness(1.1); /* Slight brighten on hover */
        }
      `}</style>
    </div>
  );
};

export default MapkeyToggle;
