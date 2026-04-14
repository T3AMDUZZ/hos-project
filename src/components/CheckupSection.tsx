"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const checkupTypes = [
  {
    type: "A형",
    price: "별도 문의",
    desc: "기본 종합검진",
    items: [
      "기초검사 (신체계측, 혈압, 시력, 청력)",
      "혈액검사 (일반혈액, 간기능, 신장기능, 당뇨)",
      "소변검사",
      "흉부 X선 촬영",
      "심전도 검사",
      "폐활량 검사",
      "복부 초음파",
      "위장조영검사 또는 위내시경",
    ],
  },
  {
    type: "B형",
    price: "별도 문의",
    desc: "정밀 종합검진",
    items: [
      "A형 검진 전체 항목 포함",
      "갑상선 초음파",
      "유방 초음파 (여성)",
      "전립선 초음파 (남성)",
      "골밀도 검사",
      "종양표지자 검사 (간암, 대장암, 전립선암/난소암)",
      "스트레스 검사",
      "동맥경화 검사",
    ],
  },
  {
    type: "C형",
    price: "별도 문의",
    desc: "프리미엄 종합검진",
    items: [
      "B형 검진 전체 항목 포함",
      "CT 촬영 (흉부 또는 복부)",
      "대장내시경",
      "갑상선 기능검사",
      "정밀 심장검사",
      "뇌졸중 위험도 검사",
      "각종 암표지자 정밀검사",
      "영양상담",
    ],
  },
];

export default function CheckupSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollAnimation();

  return (
    <section className="py-10 px-4 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wider">
            HEALTH CHECKUP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            종합건강검진 프로그램
          </h2>
          <p className="mt-3 text-text-gray">
            개인의 건강 상태에 맞는 최적의 검진 프로그램을 선택하세요
          </p>
        </div>

        {/* 탭 */}
        <div className="flex justify-center gap-2 mb-8">
          {checkupTypes.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === idx
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-gray hover:bg-gray-200"
              }`}
            >
              {item.type}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-primary/5 px-8 py-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-text-dark">
                    {checkupTypes[activeTab].type} -{" "}
                    {checkupTypes[activeTab].desc}
                  </h3>
                  <p className="text-sm text-text-gray mt-1">
                    검진 비용: {checkupTypes[activeTab].price}
                  </p>
                </div>
                <div className="text-primary">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-8 py-6">
              <ul className="space-y-3">
                {checkupTypes[activeTab].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/checkup/comprehensive"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  상세 보기
                </Link>
                <a
                  href="tel:042-274-9885"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  예약 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
