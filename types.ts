
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface PromptResult {
  title: string;
  prompt: string;
  advice: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
