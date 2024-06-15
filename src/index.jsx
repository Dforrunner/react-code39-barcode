/// <reference path="../types/index.d.ts" />

import React from 'react';
import { generateCode39Barcode } from './code39SvgGen';

export function Barcode39Svg({
  value = '',
  height = 60,
  width = 1,
  showValue = true,
  fontSize = 16,
  fontFamily = 'monospace',
  fontWeight = '500',
  padding = 10,
  color = 'black',
  textColor = '',
  lineSpacing = 10,
  className = '',
  id = '',
}) {
  if (!value) throw new Error('Barcode39Svg: value prop is required');
  return (
    <div
      id={id}
      className={className}
      style={{ padding }}
      dangerouslySetInnerHTML={{
        __html: generateCode39Barcode(
          value,
          height,
          width,
          showValue,
          fontSize,
          fontFamily,
          fontWeight,
          color,
          textColor,
          lineSpacing
        ),
      }}
    />
  );
}
