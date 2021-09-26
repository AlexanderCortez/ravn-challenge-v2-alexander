import React from 'react';

export type DescriptionsProps = {
  title: string;
  children: React.ReactNode;
};

export type DescriptionsItemProps = {
  label: string | null;
  children?: string | null;
};
