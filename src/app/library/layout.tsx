import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper"; // Adjust the import path as necessary

interface WaterLayoutProps {
  children: React.ReactNode;
}

const WaterLayout: React.FC<WaterLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full bg-background">
      <div>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 h-full min-h-[100vh]  w-full">
            {children}
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default WaterLayout;
