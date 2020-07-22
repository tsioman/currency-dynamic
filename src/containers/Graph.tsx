import React from "react";
import { Path } from "../components/Path";
import { GraphData } from "../types/dataset";

type Props = {
  data: GraphData
}

const prepareData = (data: GraphData): string => {
  const x = 20;
  const y = 500;
  const offset = [`M ${x} ${y}`];
  const collection = data.map(section => {
    const xNext = x + section[0] * 20;
    const yNext = y + section[1] * 20;
    return `L ${xNext} ${yNext}`;
  })
  return offset.concat(collection).join(' ');
}

export const Graph: React.FC<Props> = ({ data }) => {
  const coords = prepareData(data);
  return (
    <svg width={800} height={600} >
      <Path coords={coords} color="red" strokeWidth={2} />
    </svg>
  )
};
