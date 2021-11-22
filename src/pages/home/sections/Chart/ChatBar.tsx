import {
  ChartBarInner,
  ChartBarLabel,
  ChartBarWraperFill,
  ChartBarWrapper,
} from "pages/home/elements/ChartBarStyles";
import React from "react";

interface Props {
  value: number;
  maxValue: number;
  label: string;
}

const ChartBar: React.FC<Props> = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <ChartBarWrapper>
      <ChartBarInner>
        <ChartBarWraperFill
          style={{ height: barFillHeight }}
        ></ChartBarWraperFill>
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </ChartBarWrapper>
  );
};

export default ChartBar;
