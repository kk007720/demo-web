'use client';
import React, { useState, useEffect } from 'react';

export function CodeBlinking() {
  const texts = [
    'TypeScript, Next ...',
    'Php, Html ...',
    'React, Tailwind ...',
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setTimeout(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearTimeout(cursorTimer);
  }, [showCursor]);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      typingTimer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    } else {
      typingTimer = setTimeout(() => {
        setText(texts[index].slice(0, text.length + 1));
        if (text === texts[index]) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }, 150);
    }

    return () => clearTimeout(typingTimer);
  }, [text, index, isDeleting, texts]);

  return (
    <div className="flex items-center flex-wrap text-xs">
      <span>
        &lt;<span className="text-green-500 font-bold">code</span>&gt; Familiar
        Tech: <span className="font-bold">{text}</span>
        {showCursor && <span className="cursor">|</span>}
      </span>
      <span>
        &lt;/<span className="text-green-500 font-bold">code</span>&gt;
      </span>
    </div>
  );
}
