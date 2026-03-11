"use client";

import { useScrollAnimation } from "@/components/useScrollAnimation";

export default function MapSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-10 px-4 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wider">
            LOCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            오시는 길
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-gray-200 h-[400px] flex items-center justify-center">
            {/* 카카오맵 embed 영역 - 실제 배포 시 API 키로 교체 */}
            <div className="text-center text-text-light">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-semibold">카카오맵 영역</p>
              <p className="text-sm mt-1">API 키 설정 후 지도가 표시됩니다</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                주소
              </h3>
              <p className="text-sm text-text-gray">
                대전광역시 OO구 OO로 000
              </p>
            </div>
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화번호
              </h3>
              <a
                href="tel:042-000-0000"
                className="text-lg font-bold text-primary"
              >
                042-000-0000
              </a>
            </div>
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                진료시간
              </h3>
              <div className="text-sm text-text-gray space-y-1">
                <p>평일: 09:00 ~ 18:00</p>
                <p>토요일: 09:00 ~ 13:00</p>
                <p>점심: 12:00 ~ 13:30</p>
                <p className="text-red-500">일요일/공휴일 휴진</p>
              </div>
            </div>
            <div className="bg-bg-light rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                교통안내
              </h3>
              <div className="text-sm text-text-gray space-y-1">
                <p>버스: OOO번, OOO번</p>
                <p>지하철: O호선 OO역 O번 출구</p>
                <p>주차: 건물 내 주차 가능</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
