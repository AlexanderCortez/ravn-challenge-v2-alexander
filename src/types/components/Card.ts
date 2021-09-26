import React from 'react';

export type CardProps = {
  heading: string;
  blurb: string;
  isCurrent?: boolean;
  extra?: React.ReactNode;
  onClick?: () => void;
};
