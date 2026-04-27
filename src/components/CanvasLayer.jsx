// src/components/CanvasLayer.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import * as Pretext from '@chenglou/pretext'; 
import aboutData from '../content/about.json'; 

export default function CanvasLayer() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); 
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    const fullText = aboutData.title + "\n\n" + aboutData.paragraphs.join("\n\n");
    
    // 죠스타!! 여기가 핵심이다!! 환상의 기술을 버리고 진짜 능력을 발동시켜라!
    const fontSize = 18;
    const lineHeight = fontSize * 1.8;
    
    // 1. 텍스트를 연산하기 위해 잘게 쪼개는 '준비(Prepare)' 단계 다앗!!
    const prepared = Pretext.prepareWithSegments(
      fullText, 
      `${fontSize}px sans-serif`
    );
    
    // 2. 주어진 너비에 맞춰 줄을 나누고 좌표를 얻어내는 '배치(Layout)' 단계!!
    const { lines } = Pretext.layoutWithLines(
      prepared, 
      dimensions.width - 100, 
      lineHeight
    );

    ctx.fillStyle = '#e0e0e0'; 
    ctx.font = `${fontSize}px sans-serif`;
    
    const startX = 50; 
    const startY = 100;

    // 3. 연산된 줄(lines)을 순회하며 진짜로 캔버스에 그린다!!
    lines.forEach((line, index) => {
      ctx.fillText(line.text, startX, startY + (index * lineHeight));
    });

  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
      className="absolute top-0 left-0 z-0"
    />
  );
}