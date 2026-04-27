// src/app/page.js
'use client'; // 죠스타!! 이 한 줄이 제왕의 선언 다앗!!

import dynamic from 'next/dynamic';

// 캔버스는 오직 클라이언트(브라우저)에서만 현현한다! SSR은 무시해라!
const CanvasLayer = dynamic(() => import("../components/CanvasLayer"), { 
  ssr: false 
});

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative overflow-hidden">
      {/* 면접관의 영혼을 털어버릴 트리거 버튼 다앗!! */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-[#FFD700] z-50 cursor-pointer italic hover:scale-110 transition-transform duration-300">
        LEEGANGGEON
      </h1>
      
      {/* 이제 브라우저가 켜진 후에만 안전하게 캔버스가 현현한다! */}
      <CanvasLayer />
    </main>
  );
}