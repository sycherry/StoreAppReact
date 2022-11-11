import React from 'react';

export default function BackButton(props: any) {
  const { router } = props
  return (
    <button className="mb-6 md:mb-8 lg:mb-10" type="button" onClick={() => router.back()}>←Back</button>
  );
}