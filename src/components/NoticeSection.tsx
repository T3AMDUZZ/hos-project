"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const notices = [
  { title: "2026년 진료시간 안내", date: "2026.03.01", isNew: true },
  { title: "비급여 항목 안내 (2026년 2월 기준)", date: "2026.02.25", isNew: true },
  { title: "국가암검진 안내", date: "2026.02.10", isNew: false },
  { title: "종합검진 프로그램 안내", date: "2026.01.15", isNew: false },
  { title: "설 연휴 진료 안내", date: "2026.01.10", isNew: false },
];

const healthTips = [
  { title: "대장내시경 전 알아두셔야 할 사항", date: "2026.02.20", isNew: true },
  { title: "종합검진, 어떤 프로그램을 선택해야 할까?", date: "2026.02.05", isNew: false },
  { title: "유방암 조기 발견의 중요성", date: "2026.01.20", isNew: false },
  { title: "갑상선 초음파 검사 안내", date: "2026.01.10", isNew: false },
  { title: "위내시경 검사 주의사항", date: "2025.12.15", isNew: false },
];

export default function NoticeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useScrollAnimation();

  const items = activeTab === 0 ? notices : healthTips;

  return (
    <section className="py-10 px-4 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* 공지사항 / 건강상식 */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setActiveTab(0)}
                className={`text-xl font-bold pb-1 border-b-2 transition-colors ${
                  activeTab === 0
                    ? "text-primary border-primary"
                    : "text-text-light border-transparent"
                }`}
              >
                공지사항
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`text-xl font-bold pb-1 border-b-2 transition-colors ${
                  activeTab === 1
                    ? "text-primary border-primary"
                    : "text-text-light border-transparent"
                }`}
              >
                건강상식
              </button>
            </div>
            <div className="bg-white rounded-xl p-6">
              <ul className="divide-y divide-gray-100">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={activeTab === 0 ? "/community/notice" : "/community/health"}
                      className="flex items-center justify-between py-3.5 hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-2 text-sm">
                        {item.isNew && (
                          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                            N
                          </span>
                        )}
                        {item.title}
                      </span>
                      <span className="text-xs text-text-light shrink-0 ml-4">
                        {item.date}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={activeTab === 0 ? "/community/notice" : "/community/health"}
                className="mt-4 inline-flex items-center text-sm text-primary font-semibold hover:underline"
              >
                더보기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 진료시간 안내 카드 */}
          <div>
            <h2 className="text-xl font-bold text-text-dark mb-6">
              진료시간 안내
            </h2>
            <div className="bg-white rounded-xl p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left py-3 text-sm font-semibold text-text-dark">
                      구분
                    </th>
                    <th className="text-left py-3 text-sm font-semibold text-text-dark">
                      시간
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3.5 text-sm font-medium">평일 (월~금)</td>
                    <td className="py-3.5 text-sm text-text-gray">
                      09:00 ~ 18:00
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 text-sm font-medium">토요일</td>
                    <td className="py-3.5 text-sm text-text-gray">
                      09:00 ~ 13:00
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 text-sm font-medium">점심시간</td>
                    <td className="py-3.5 text-sm text-text-gray">
                      12:00 ~ 13:30
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 text-sm font-medium text-red-500">
                      일요일/공휴일
                    </td>
                    <td className="py-3.5 text-sm text-red-500">휴진</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-text-dark">
                  <span className="font-semibold">대표전화</span>
                </p>
                <a
                  href="tel:042-000-0000"
                  className="text-2xl font-bold text-primary"
                >
                  042-000-0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
