import { LandmarkCardProps } from "@/utils/types";
import React from "react";

const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
  return (
    <div className="text-white">
      <p>{landmark.province}</p>
      <p className="text-4xl font-semibold md:my-3 md:text-6xl md:leading-[80px]">{landmark.name}</p>
      <p className="text-lg">{landmark.description.substring(0, 40)}</p>
    </div>
  )
};

export default OtherInfo;
