'use client';

import Image from 'next/image';
import { fallbackHero } from '@/lib/mock';
import { type ReactNode, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  children: ReactNode;
};

export const Hero = ({ src, alt, children }: Props) => {
  const [imageSrc, setImageSrc] = useState(src || fallbackHero);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        onError={() => setImageSrc(fallbackHero)}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_70%,rgba(244,248,255,0.55),rgba(244,248,255,0.18)_45%,rgba(228,237,249,0.66)_100%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(rgba(30,41,59,0.2)_1px,transparent_1px)] [background-size:5px_5px]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-end px-4 pb-16 pt-32 md:px-8 md:pb-20">
        {children}
      </div>
    </section>
  );
};
