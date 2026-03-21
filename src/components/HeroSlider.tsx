"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

/* Primary #FFCC99 */
const slides = [
  {
    title: "정밀한 진단, 따뜻한 진료",
    subtitle: "대전 성모영상의학과 종합검진센터",
    description: "최신 의료장비와 풍부한 경험으로 정확한 진단을 약속합니다",
    cta: { text: "검진 상담", href: "/checkup/comprehensive" },
    bg: "from-[#FFCC99] via-[#F0B880] to-[#E0A870]",
  },
  {
    title: "종합건강검진",
    subtitle: "A형 / B형 / C형 맞춤 검진 프로그램",
    description: "개인의 건강 상태에 맞는 최적의 검진 프로그램을 제공합니다",
    cta: { text: "검진 안내", href: "/checkup/comprehensive" },
    bg: "from-[#FFE8D6] via-[#FFCC99] to-[#F0B880]",
  },
  {
    title: "국가건강검진 / 5대암검진",
    subtitle: "국민건강보험공단 지정 검진기관",
    description: "국가에서 지원하는 건강검진을 편리하게 받으실 수 있습니다",
    cta: { text: "자세히 보기", href: "/checkup/national" },
    bg: "from-[#F0B880] via-[#E0A870] to-[#D09860]",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={false}
        loop
        className="hero-swiper h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`h-full bg-gradient-to-br ${slide.bg} flex items-center`}
            >
              <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute top-20 right-20 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-white/20" />
                <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border border-white/10" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full bg-white/5" />
              </div>
              <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                  <p className="text-white/90 font-semibold text-sm md:text-base mb-3 tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex gap-3 md:gap-4">
                    <Link
                      href={slide.cta.href}
                      className="inline-flex items-center px-5 md:px-7 py-3 md:py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors text-sm md:text-base"
                    >
                      {slide.cta.text}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/hospital/directions"
                      className="inline-flex items-center px-5 md:px-7 py-3 md:py-3.5 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
                    >
                      오시는 길
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 좌측 하단 슬라이드 컨트롤 - 퀵메뉴 위 */}
      <div className="absolute left-4 md:left-8 bottom-[120px] md:bottom-[140px] z-30 hidden md:flex items-center gap-3">
        {/* 이전 */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
          aria-label="이전 슬라이드"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 번호 */}
        <span className="text-white text-sm font-semibold tabular-nums min-w-[50px] text-center">
          <span className="text-white text-lg">{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/40 mx-1">/</span>
          <span className="text-white/60">{String(slides.length).padStart(2, "0")}</span>
        </span>

        {/* 다음 */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
          aria-label="다음 슬라이드"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
