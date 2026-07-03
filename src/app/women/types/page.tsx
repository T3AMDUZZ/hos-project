"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

type CheckupType = {
  grade: "A" | "B" | "C" | "D" | "E";
  title: string;
  subtitle: string;
  items: string[];
  color: "primary" | "accent";
};

const checkupTypes: CheckupType[] = [
  {
    grade: "A",
    title: "A형",
    subtitle: "자궁경부암 조기 검사",
    items: ["세포진검사 (pap smear)", "자궁경부 확대촬영"],
    color: "primary",
  },
  {
    grade: "B",
    title: "B형",
    subtitle: "자궁경부암 · 난소암 추가 검사",
    items: [
      "세포진검사 (pap smear)",
      "자궁경부 확대촬영",
      "질식 초음파 검사 (자궁 및 난소)",
    ],
    color: "primary",
  },
  {
    grade: "C",
    title: "C형",
    subtitle: "자궁경부암 · 난소암 · 유방암 추가 검사",
    items: [
      "세포진검사 (pap smear)",
      "자궁경부 확대촬영",
      "질식 초음파 검사 (자궁 및 난소)",
      "유방암 검사 (X선 검사 및 초음파)",
      "난소암 표지자 검사",
    ],
    color: "primary",
  },
  {
    grade: "D",
    title: "D형",
    subtitle: "여성 정밀검사 (갑상선 추가)",
    items: [
      "세포진검사 (pap smear)",
      "자궁경부 확대촬영",
      "질식 초음파 검사 (자궁 및 난소)",
      "유방암 검사 (X선 검사 및 초음파)",
      "난소암 표지자 검사",
      "갑상선 검사 (초음파 및 기능검사)",
    ],
    color: "accent",
  },
  {
    grade: "E",
    title: "E형",
    subtitle: "결혼 전 검사",
    items: [
      "세포진검사 · 자궁경부 확대촬영 · 질식 초음파 (B형 포함)",
      "풍진, B형 간염 검사",
      "빈혈 검사, 갑상선 기능검사 (TSH · FT4)",
      "여성 염증 검사 (STD 4종)",
      "인유두종 바이러스 검사 (HPV)",
    ],
    color: "accent",
  },
];

const precautions = [
  {
    title: "생리 후 1주일 경과",
    desc: "검진은 생리가 끝난 후 1주일이 지난 시점에 받으시는 것이 가장 정확합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "임신 여부 확인",
    desc: "검진 전 임신 여부(혹은 가능성)를 반드시 확인하신 후 내원해 주세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

type Column = "A" | "B" | "C" | "F" | "ref";
const cols: { key: Column; label: string; sub?: string }[] = [
  { key: "ref", label: "의뢰" },
  { key: "A", label: "A형" },
  { key: "B", label: "B형" },
  { key: "C", label: "C형" },
  { key: "F", label: "여성", sub: "(산전)" },
];

type ExamRow = { name: string; cols: Partial<Record<Column, boolean>> };
type ExamGroup = { category: string; rows: ExamRow[] };

const womenExamGroups: ExamGroup[] = [
  {
    category: "기초검사 · 심전도",
    rows: [
      { name: "신장 · 체중 · 혈압", cols: { A: true, B: true, C: true, F: true } },
      { name: "청력 · 시력", cols: { A: true, B: true, C: true, F: true } },
      { name: "체지방 · 근력 (인바디)", cols: { A: true, B: true, C: true, F: true } },
      { name: "심전도", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
  {
    category: "자궁암 검사",
    rows: [
      { name: "자궁세포 (pap)", cols: { A: true, B: true, C: true, F: true } },
      { name: "자궁확대경 (cervico)", cols: { B: true, C: true, F: true } },
      { name: "경부바이러스 (씬프렙)", cols: { C: true } },
    ],
  },
  {
    category: "X선 · 초음파",
    rows: [
      { name: "흉부 X선 · 유방 X선", cols: { A: true, B: true, C: true, F: true } },
      { name: "갑상선 초음파", cols: { B: true, C: true, F: true } },
      { name: "유방 초음파", cols: { C: true, F: true } },
      { name: "자궁 초음파", cols: { B: true, C: true, F: true } },
    ],
  },
  {
    category: "혈액검사",
    rows: [
      { name: "GOT · GPT · GGT · GLU", cols: { A: true, B: true, C: true, F: true } },
      { name: "T-CHO · TG (지질)", cols: { A: true, B: true, C: true, F: true } },
      { name: "TP · BUN/Cre", cols: { A: true, B: true, C: true, F: true } },
      { name: "TSH · fT4 (갑상선)", cols: { A: true, B: true, C: true, F: true } },
      { name: "HBS Ag/Ab · HCV (간염)", cols: { A: true, B: true, C: true, F: true } },
      { name: "AFP (간암)", cols: { A: true, B: true, C: true, F: true } },
      { name: "CA 125 (난소암)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "Ferritin · Fe · TIBC (철분)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "풍진 (Rubella IgM/G)", cols: { ref: true, F: true } },
    ],
  },
  {
    category: "CBC · 혈액형 · 소변",
    rows: [
      { name: "WBC · RBC · Hb · Hct", cols: { A: true, B: true, C: true, F: true } },
      { name: "MCV · MCH · MCHC · RDW", cols: { A: true, B: true, C: true, F: true } },
      { name: "PLT · MPV · PDW", cols: { A: true, B: true, C: true, F: true } },
      { name: "ABO · Rh", cols: { A: true, B: true, C: true, F: true } },
      { name: "소변검사 (12종)", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
];

export default function WomenTypesPage() {
  const [activeType, setActiveType] = useState<"A" | "B" | "C" | "F" | "ALL">("ALL");

  const isVisible = (row: ExamRow) => {
    if (activeType === "ALL") return true;
    return !!row.cols[activeType];
  };

  return (
    <>
      <PageBanner
        title="여성건강검진종류"
        breadcrumb={[
          { title: "여성클리닉", href: "/women/types" },
          { title: "여성건강검진종류" },
        ]}
      />

      {/* 인트로 */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            여성을 위한 맞춤 건강검진
          </h2>
          <p className="text-text-gray leading-relaxed">
            A형부터 E형까지 연령대와 필요에 따라 선택할 수 있는 5가지 검진 프로그램을 운영합니다.
            자궁경부암 조기 검사부터 결혼 전 검사까지 여성 건강을 단계별로 관리해 드립니다.
          </p>
        </div>
      </section>

      {/* 검진 시 주의점 */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="bg-accent/5 border border-accent/10 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            검진 시 주의점
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {precautions.map((p, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-dark mb-1">{p.title}</h4>
                  <p className="text-sm text-text-gray leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 여성건강검진 종류 A-E */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">검진 유형별 구성</h2>
          <p className="text-text-gray leading-relaxed">
            연령대와 필요에 따라 A형부터 E형까지 선택하실 수 있습니다.
          </p>
        </div>

        <div className="space-y-4">
          {checkupTypes.map((type, idx) => {
            const colorBg = type.color === "accent" ? "bg-accent" : "bg-primary";
            const colorText = type.color === "accent" ? "text-accent" : "text-primary";
            const colorLight = type.color === "accent" ? "bg-accent/5" : "bg-primary/5";
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* 왼쪽 등급 */}
                  <div className={`${colorBg} text-white p-6 md:p-8 md:w-48 flex flex-col justify-center items-center`}>
                    <div className="text-5xl font-bold mb-1">{type.grade}</div>
                    <div className="text-sm opacity-90">{type.title}</div>
                  </div>
                  {/* 오른쪽 내용 */}
                  <div className="flex-1 p-6 md:p-8">
                    <h3 className={`text-lg font-bold ${colorText} mb-4`}>{type.subtitle}</h3>
                    <ul className="space-y-2">
                      {type.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-sm text-text-gray">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${colorBg} shrink-0 mt-2`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 여성종합검사 매트릭스 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">여성종합검사 항목</h2>
          <p className="text-text-gray leading-relaxed">
            여성 종합검사에 포함되는 세부 검사 항목입니다. 유형별로 필터링하여 확인하세요.
          </p>
        </div>

        {/* 필터 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: "ALL", label: "전체" },
            { key: "A", label: "A형" },
            { key: "B", label: "B형" },
            { key: "C", label: "C형" },
            { key: "F", label: "여성(산전)" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveType(t.key as typeof activeType)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeType === t.key
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-text-gray hover:bg-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {womenExamGroups.map((group, gIdx) => {
            const visibleRows = group.rows.filter(isVisible);
            if (visibleRows.length === 0) return null;
            return (
              <div key={gIdx}>
                <h3 className="text-base font-bold text-primary mb-3">{group.category}</h3>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-bg-light border-b border-gray-100">
                        <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold text-text-dark">
                          검사 항목
                        </th>
                        {cols.map((c) => (
                          <th
                            key={c.key}
                            className="text-center px-3 py-3 text-xs font-semibold text-text-dark w-20"
                          >
                            <div>{c.label}</div>
                            {c.sub && <div className="text-[10px] text-text-light font-normal">{c.sub}</div>}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {visibleRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-bg-light/50">
                          <td className="px-4 md:px-6 py-3 text-sm text-text-dark">{row.name}</td>
                          {cols.map((c) => (
                            <td key={c.key} className="px-3 py-3 text-center">
                              {row.cols[c.key] ? (
                                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                              ) : (
                                <span className="text-text-light text-xs">-</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-text-light">
          * 의뢰 선택 항목은 필요에 따라 추가 가능합니다.
        </p>
      </section>
    </>
  );
}
