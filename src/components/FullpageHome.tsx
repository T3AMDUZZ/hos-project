"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import HeroSlider from "@/components/HeroSlider";
import IntroSection from "@/components/IntroSection";
import DepartmentSection from "@/components/DepartmentSection";
import CheckupSection from "@/components/CheckupSection";
import NoticeSection from "@/components/NoticeSection";
import MapSection from "@/components/MapSection";

const sections = [
  { id: "hero", label: "메인", dark: true },
  { id: "intro", label: "병원소개", dark: false },
  { id: "department", label: "진료과목", dark: false },
  { id: "checkup", label: "건강검진", dark: false },
  { id: "notice", label: "소식", dark: false },
  { id: "map", label: "오시는길", dark: false },
];

export default function FullpageHome() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const currentRef = useRef(0);
  const totalSections = sections.length;
  const COOLDOWN = 1000;
  const isDark = sections[current].dark;

  const goTo = useCallback(
    (index: number) => {
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;
      if (index < 0 || index >= totalSections) return;
      lastScrollTime.current = now;
      currentRef.current = index;
      setCurrent(index);
    },
    [totalSections]
  );

  // 마우스 휠
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN) return;
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) goTo(currentRef.current + 1);
      else goTo(currentRef.current - 1);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener("wheel", handleWheel);
    };
  }, [goTo]);

  // 키보드
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(currentRef.current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(currentRef.current - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goTo]);

  // 터치 스와이프
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goTo(currentRef.current + 1);
        else goTo(currentRef.current - 1);
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [goTo]);

  // 헤더에 현재 섹션 dark/light 상태 전달
  useEffect(() => {
    document.documentElement.dataset.heroDark = String(isDark);
  }, [isDark]);

  // URL 해시 동기화
  useEffect(() => {
    window.history.replaceState(null, "", `#${sections[current].id}`);
  }, [current]);

  // 초기 해시
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const idx = sections.findIndex((s) => s.id === hash);
    if (idx > 0) setCurrent(idx);
  }, []);

  // 색상 헬퍼
  const dotColor = isDark ? "bg-white" : "bg-primary";
  const dotInactive = isDark
    ? "bg-white/30 group-hover:bg-white/60"
    : "bg-gray-300 group-hover:bg-primary/50";
  const labelActive = isDark ? "text-white" : "text-primary";
  const labelInactive = isDark
    ? "text-white/60"
    : "text-text-gray";
  const btnBorder = isDark ? "border-white/30" : "border-gray-300";
  const btnText = isDark ? "text-white" : "text-text-dark";
  const btnHover = isDark ? "hover:bg-white/10" : "hover:bg-gray-100";
  const counterText = isDark ? "text-white/50" : "text-text-light";

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden">
      {/* 섹션 컨테이너 */}
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        {/* #hero - 히어로 + 퀵메뉴 */}
        <section id="hero" className="h-screen relative">
          <HeroSlider />
          {/* 퀵메뉴 - 히어로 하단 */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl grid grid-cols-3 divide-x divide-y divide-gray-100">
              {[
                { icon: "📋", title: "종합검진", desc: "A/B/C형 맞춤", href: "/checkup/comprehensive" },
                { icon: "🏥", title: "국가검진", desc: "건강보험공단", href: "/checkup/national" },
                { icon: "🔬", title: "검사장비", desc: "최신 장비 소개", href: "/guide/equipment" },
                { icon: "💰", title: "비급여안내", desc: "비용 안내", href: "/medical/non-covered" },
                { icon: "📞", title: "전화상담", desc: "042-000-0000", href: "tel:042-000-0000" },
                { icon: "📍", title: "오시는길", desc: "찾아오시는 방법", href: "/hospital/directions" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex flex-col items-center py-5 px-4 hover:bg-primary/5 transition-colors"
                >
                  <span className="text-2xl mb-1.5">{item.icon}</span>
                  <span className="text-sm font-semibold text-text-dark">{item.title}</span>
                  <span className="text-[11px] text-text-light mt-0.5">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* #intro */}
        <section id="intro" className="h-screen flex items-center bg-white">
          <IntroSection />
        </section>

        {/* #department */}
        <section id="department" className="h-screen flex items-center bg-bg-light">
          <DepartmentSection />
        </section>

        {/* #checkup */}
        <section id="checkup" className="h-screen flex items-center bg-white">
          <CheckupSection />
        </section>

        {/* #notice */}
        <section id="notice" className="h-screen flex items-center bg-bg-light">
          <NoticeSection />
        </section>

        {/* #map */}
        <section id="map" className="h-screen flex items-center bg-white">
          <MapSection />
        </section>
      </div>

      {/* ===== 고정 UI ===== */}

      {/* 좌측 하단: 섹션 상하 이동 + 페이지 번호 */}
      <div className="fixed left-8 bottom-8 z-[70] hidden md:flex items-center gap-3">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className={`w-9 h-9 flex items-center justify-center rounded-full border ${btnBorder} ${btnText} ${btnHover} transition-all disabled:opacity-20 disabled:cursor-not-allowed`}
          aria-label="이전 섹션"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <span className={`text-xs font-semibold tabular-nums ${counterText}`}>
          {current + 1} / {totalSections}
        </span>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === totalSections - 1}
          className={`w-9 h-9 flex items-center justify-center rounded-full border ${btnBorder} ${btnText} ${btnHover} transition-all disabled:opacity-20 disabled:cursor-not-allowed`}
          aria-label="다음 섹션"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* 우측 중앙: 섹션 도트 네비 */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-[70] hidden md:flex flex-col gap-3">
        {sections.map((section, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="group flex items-center gap-2 justify-end"
            aria-label={section.label}
          >
            <span
              className={`text-[11px] font-semibold transition-all duration-300 ${
                current === idx
                  ? `opacity-100 ${labelActive}`
                  : `opacity-0 group-hover:opacity-100 ${labelInactive}`
              }`}
            >
              {section.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                current === idx
                  ? `w-3 h-3 ${dotColor}`
                  : `w-2 h-2 ${dotInactive}`
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}
