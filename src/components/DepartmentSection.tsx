"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const departments = [
  {
    title: "영상의학과",
    desc: "X선, CT, 초음파, 유방촬영 등 최신 영상진단 장비를 통한 정밀 검사",
    href: "/medical/radiology",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "내시경검사",
    desc: "위내시경, 대장내시경 검사를 통한 소화기 질환 조기 발견 및 예방",
    href: "/medical/endoscopy",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "내과진료",
    desc: "일반 내과 진료 및 만성 질환 관리, 예방접종, 각종 혈액검사",
    href: "/medical/internal",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "여성클리닉",
    desc: "유방검사, 자궁경부암 검사, 골밀도 검사 등 여성 건강 전문 검진",
    href: "/women/types",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "건강검진",
    desc: "종합검진 A/B/C형, 국가건강검진, 5대암검진, 채용검진",
    href: "/checkup/comprehensive",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "예방접종",
    desc: "독감, 폐렴, 대상포진 등 각종 예방접종 및 혈액검사",
    href: "/medical/vaccination",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function DepartmentSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-10 px-4 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wider">
            DEPARTMENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            진료과목 안내
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <Link
              key={idx}
              href={dept.href}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-primary group-hover:text-primary-dark transition-colors mb-4">
                {dept.icon}
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                {dept.title}
              </h3>
              <p className="text-sm text-text-gray leading-relaxed">
                {dept.desc}
              </p>
              <div className="mt-4 text-primary text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
