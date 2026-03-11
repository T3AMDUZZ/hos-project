"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const quickItems = [
  {
    title: "종합검진",
    desc: "A/B/C형 맞춤 검진",
    href: "/checkup/comprehensive",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "국가검진",
    desc: "건강보험공단 검진",
    href: "/checkup/national",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "검사장비",
    desc: "최신 의료장비 소개",
    href: "/guide/equipment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "비급여안내",
    desc: "비급여 항목 공개",
    href: "/medical/non-covered",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "전화상담",
    desc: "042-000-0000",
    href: "tel:042-000-0000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "오시는길",
    desc: "찾아오시는 방법",
    href: "/hospital/directions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function QuickMenu() {
  const ref = useScrollAnimation();

  return (
    <section className="relative -mt-12 z-10 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {quickItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex flex-col items-center text-center py-6 px-3 hover:bg-bg-light transition-colors group first:rounded-tl-2xl last:rounded-br-2xl lg:first:rounded-l-2xl lg:last:rounded-r-2xl"
            >
              <div className="text-primary group-hover:text-accent-dark transition-colors mb-2.5">
                {item.icon}
              </div>
              <h3 className="font-semibold text-sm text-text-dark mb-0.5">
                {item.title}
              </h3>
              <p className="text-xs text-text-light">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
