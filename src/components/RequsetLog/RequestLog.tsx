import React from "react";

type LogPropsType = {
  request: string;
};
export const RequestLog: React.FC<LogPropsType> = ({ request }) => (
  <span>{request}</span>
);
