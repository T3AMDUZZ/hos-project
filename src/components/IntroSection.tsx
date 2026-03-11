"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/components/useScrollAnimation";

export default function IntroSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-10 px-4 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 이미지 영역 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="text-center text-primary/40 p-8">
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p className="text-sm">병원 사진 영역</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl px-6 py-4 shadow-lg">
              <p className="text-white font-bold text-2xl">30년+</p>
              <p className="text-white/70 text-sm">진료 경험</p>
            </div>
          </div>

          {/* 텍스트 영역 */}
          <div>
            <p className="text-primary font-semibold text-sm mb-2 tracking-wider">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              대전 성모영상의학과를
              <br />
              찾아주셔서 감사합니다
            </h2>
            <div className="space-y-4 text-text-gray leading-relaxed">
              <p>
                성모영상의학과는 최신 의료장비와 풍부한 임상경험을 바탕으로
                정확하고 신속한 진단을 제공하고 있습니다.
              </p>
              <p>
                영상의학 전문의가 직접 검사하고 판독하여 보다 정밀한 진단 결과를
                제공하며, 종합검진센터를 운영하여 원스톱 건강관리 서비스를
                받으실 수 있습니다.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">정밀 진단</p>
                  <p className="text-xs text-text-light">전문의 직접 판독</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">따뜻한 진료</p>
                  <p className="text-xs text-text-light">환자 중심 의료</p>
                </div>
              </div>
            </div>
            <Link
              href="/hospital/greeting"
              className="inline-flex items-center mt-8 text-primary font-semibold hover:underline"
            >
              자세히 보기
              <svg
                className="w-4 h-4 ml-1"
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
          </div>
        </div>
      </div>
    </section>
  );
}
