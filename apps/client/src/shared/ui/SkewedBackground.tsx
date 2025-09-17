'use client'

import React from 'react';
import { BevelBox } from '@poizon/ui-kit';

interface SkewedBackgroundProps {
  width?: string;
  height?: string;
  fillColor?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

export const SkewedBackground: React.FC<SkewedBackgroundProps> = ({
  width = "100%",
  height = "100%",
  fillColor = "#AFEB0F",
  contentClassName = "",
  children
}) => {
  // Определяем вариант на основе цвета
  const getVariant = (color: string) => {
    switch (color.toLowerCase()) {
      case "#afeb0f":
      case "#afeb0f":
        return "default";
      case "#292d30":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <div style={{ width, height }}>
      <BevelBox
        variant={getVariant(fillColor)}
        className={contentClassName}
      >
        {children}
      </BevelBox>
    </div>
  );
};