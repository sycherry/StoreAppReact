import React from 'react';
import { BackButtonProps } from './BackButtonProps';

export default function BackButton({ router }: BackButtonProps) {
  return (
    <button className="mb-6 md:mb-8 lg:mb-10" type="button" onClick={() => router.back()}>←Back</button>
  );
}