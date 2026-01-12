import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface StepItem {
  title: string;
  description: string;
}