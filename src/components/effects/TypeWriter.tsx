"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export function TypeWriter({
  words,
  className,
  typeSpeed = 75,
  deleteSpeed = 38,
  pause = 1600,
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[wordIndex % words.length];

    const t = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1));
          } else {
            setDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(t);
  }, [text, wordIndex, deleting, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden className="inline-block w-[0.06em] h-[0.9em] -mb-[0.1em] align-baseline bg-gold ml-1 animate-pulse" />
    </span>
  );
}
