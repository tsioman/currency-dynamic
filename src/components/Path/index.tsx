import React from "react";

interface Prop {
  color: string,
  strokeWidth: number,
  coords: string;
}

export const Path: React.FC<Prop> = ({ color, coords, strokeWidth }) => {
  return (<path d={coords} stroke={color} strokeWidth={strokeWidth} fill="none"></path>)
}
