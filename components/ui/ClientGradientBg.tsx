'use client'
import dynamic from 'next/dynamic';

const GradientBg = dynamic(() => import('./GradientBg').then(mod => mod.BackgroundGradientAnimation), {
  ssr: false,
});

export default GradientBg;
