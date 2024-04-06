'use client';
import React, { useState, useEffect } from 'react';

export function CodeBlinking() {
  const texts = [
    'Next, Tailwind css, TypeScript, React',
    'shadcdn/ui, lucide-react, prisma',
    'Thanks For browsing!',
  ]; // 要轮流显示的文本数组
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // 光标闪烁效果
  useEffect(() => {
    const cursorTimer = setTimeout(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearTimeout(cursorTimer);
  }, [showCursor]);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      // 如果处于删除阶段，加速删除
      typingTimer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // 循环到下一个文本
        }
      }, 50);
    } else {
      // 打印文本
      typingTimer = setTimeout(() => {
        setText(texts[index].slice(0, text.length + 1));
        if (text === texts[index]) {
          // 等待一段时间后开始删除文本
          setTimeout(() => setIsDeleting(true), 1000); // 可以调整等待时间
        }
      }, 150);
    }

    return () => clearTimeout(typingTimer);
  }, [text, index, isDeleting, texts]);

  return (
    <div className="flex items-center flex-wrap text-xs">
      <span>
        &lt;<span className="text-green-500 font-bold">code</span>&gt; Website
        tech: <span className="font-bold">{text}</span>
        {showCursor && <span className="cursor">|</span>}
      </span>
      <span>
        &lt;/<span className="text-green-500 font-bold">code</span>&gt;
      </span>
    </div>
  );
}
