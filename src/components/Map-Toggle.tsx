"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button"; // Adjust the import path as necessary

const MapToggle = () => {
  const [activeStatus, setActiveStatus] = useState<string | null>(null);

  const setWaterStatus = (status: string) => {
    setActiveStatus(status);
  };

  return (
    <div>
      {/* Button Group Container */}
      <div className="relative flex flex-row justify-center items-start gap-4 p-2 bg-secondary w-fit max-w-[300px] rounded-lg my-8">
        <Button
          onClick={() => setWaterStatus("Safe")}
          aria-pressed={activeStatus === "Safe"}
          aria-label="Set water status to safe"
          className={cn(
            "button",
            activeStatus === "Safe" ? "bg-green-500 text-white" : "bg-gray-200"
          )}
        >
          Safe
        </Button>
        <Button
          onClick={() => setWaterStatus("Caution")}
          aria-pressed={activeStatus === "Caution"}
          aria-label="Set water status to caution"
          className={cn(
            "button",
            activeStatus === "Caution"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200"
          )}
        >
          Caution
        </Button>
        <Button
          onClick={() => setWaterStatus("Danger")}
          aria-pressed={activeStatus === "Danger"}
          aria-label="Set water status to danger"
          className={cn(
            "button",
            activeStatus === "Danger" ? "bg-red-500 text-white" : "bg-gray-200"
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
          transition: background-color 0.4s, color 0.4s;
          cursor: pointer;
        }

        .button:hover {
          filter: brightness(1.1); /* Slight brighten on hover */
        }
      `}</style>
    </div>
  );
};

export default MapToggle;
