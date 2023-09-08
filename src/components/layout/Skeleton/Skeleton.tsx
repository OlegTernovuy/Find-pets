import React from "react";
import { Skeleton } from "@mui/material";

export const CardSkeleton = () => {
  const cards = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,auto))] gap-4 justify-center px-16">
      {cards.map((item) => {
        return (
          <div key={item}>
            <div className="w-60 h-96">
              <Skeleton variant="rectangular" height={120} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
