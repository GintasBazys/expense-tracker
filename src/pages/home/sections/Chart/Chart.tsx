import { ChartWrapper } from "pages/home/elements/ChartStyles";
import React from "react";
import ChartBar from "./ChatBar";

interface Props {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

const Chart: React.FC<Props> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMax = Math.max(...dataPointValues);

  return (
    <ChartWrapper>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </ChartWrapper>
  );
};

export default Chart;
