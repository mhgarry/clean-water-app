"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useOutsideClick } from "@/hooks/use-click-outside";

const MapToggle = () => {
  const [isWaterSafe, setIsWaterSafe] = useState<boolean | null>(null);
  const [isWaterCaution, setIsWaterCaution] = useState<boolean | null>(null);
  const [isWaterDanger, setIsWaterDanger] = useState<boolean | null>(null);

  // Close popup when pressing "Escape"
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearStatus();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const setWaterStatus = (status: string) => {
    setIsWaterSafe(null); // Reset all values before setting the selected status
    setIsWaterCaution(null);
    setIsWaterDanger(null);

    if (status === "Safe") {
      setIsWaterSafe(true);
    } else if (status === "Caution") {
      setIsWaterCaution(true);
    } else if (status === "Danger") {
      setIsWaterDanger(true);
    }

    console.log(status);
  };

  const clearStatus = () => {
    setIsWaterSafe(null);
    setIsWaterCaution(null);
    setIsWaterDanger(null);
  };

  const safeRef = useOutsideClick(() => clearStatus());
  const cautionRef = useOutsideClick(() => clearStatus());
  const dangerRef = useOutsideClick(() => clearStatus());

  return (
    <div>
      <div className="flex flex-row justify-center items-start gap-4 p-2 bg-secondary rounded-lg">
        <Button
          onClick={() => setWaterStatus("Safe")}
          aria-pressed={isWaterSafe ? "true" : "false"}
          aria-label="Set water status to safe"
        >
          Safe
        </Button>
        <Button
          onClick={() => setWaterStatus("Caution")}
          aria-pressed={isWaterCaution ? "true" : "false"}
          aria-label="Set water status to caution"
        >
          Caution
        </Button>
        <Button
          onClick={() => setWaterStatus("Danger")}
          aria-pressed={isWaterDanger ? "true" : "false"}
          aria-label="Set water status to danger"
        >
          Danger
        </Button>
      </div>
      <div>
        {isWaterSafe && (
          <div
            ref={safeRef}
            className="relative bg-green-500 mt-2 text-white p-2 rounded-md opacity-80"
            role="dialog"
            aria-live="polite"
            aria-label="Water status safe"
          >
            Safe
            <button
              onClick={clearStatus}
              className="absolute top-0 right-0 text-white p-1"
              aria-label="Close safe status"
            >
              ✕
            </button>
          </div>
        )}
        {isWaterCaution && (
          <div
            ref={cautionRef}
            className="relative bg-yellow-500 mt-2 text-white p-2 rounded-md opacity-80"
            role="dialog"
            aria-live="polite"
            aria-label="Water status caution"
          >
            Caution
            <button
              onClick={clearStatus}
              className="absolute top-0 right-0 text-white p-1"
              aria-label="Close caution status"
            >
              ✕
            </button>
          </div>
        )}
        {isWaterDanger && (
          <div
            ref={dangerRef}
            className="relative bg-red-500 mt-2 text-white p-2 rounded-md opacity-80"
            role="dialog"
            aria-live="polite"
            aria-label="Water status danger"
          >
            Danger
            <button
              onClick={clearStatus}
              className="absolute top-0 right-0 text-white p-1"
              aria-label="Close danger status"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapToggle;
