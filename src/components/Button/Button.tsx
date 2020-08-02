import React from "react";
import "./Button.css";
import { ColorSetType } from "../../types/";

type ButtonType = {
  color: ColorSetType;
  textButton: string;
  isActive?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({
  color,
  textButton,
  isActive,
  onClick,
}) => {
  const className = isActive ? "button button--active" : "button";
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ color: `${color}` }}
    >
      {textButton}
    </button>
  );
};
