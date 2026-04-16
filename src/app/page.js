// src/app/page.js
import CanvasLayer from "../components/CanvasLayer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white relative overflow-hidden">
      {/* 면접관의 영혼을 털어버릴 트리거 버튼 다앗!! */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-[#FFD700] z-50 cursor-pointer italic hover:scale-110 transition-transform duration-300">
        LEEGANGGEON
      </h1>
      
      {/* 실시간 텍스트 리플로우가 일어날 도화지! */}
      <CanvasLayer />
    </main>
  );
}