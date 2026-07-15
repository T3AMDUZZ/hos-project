"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

const targetSymptoms = [
  "평소 피로감을 많이 느끼는 경우",
  "최근 몇 개월 사이 체중 감소가 심한 경우",
  "원인 모를 미열에 시달리는 경우",
  "계단을 오를 때 숨이 차고 가슴을 죄는 압박감이 있는 경우",
  "갈증이 심하고 자주 소변을 보게 되는 경우",
  "속이 쓰리고 더부룩하며 변비나 설사가 심한 경우",
  "혈변이나 검은색 변을 자주 보는 경우",
];

const prepDayBefore = [
  "저녁식사는 오후 7시 이전에 가볍게 드십시오.",
  "오후 9시 이후에는 음식은 물론 물도 드시지 마십시오.",
  "평소 복용하시는 약은 가급적 2~3일 전부터 드시지 마십시오.",
  "과음이나 지나친 과로는 피하시고 편안한 상태에서 충분한 수면을 취하십시오.",
  "채변은 가급적 전일 받으십시오.",
  "문진표는 미리 작성하여 검사 당일 지참하여 주십시오.",
  "대장검사의 경우 별도의 안내문을 통해 알려 드립니다.",
];

const prepSameDay = [
  "아침 식사는 물론 담배, 껌 등 아무것도 드시지 마십시오.",
  "혈압약은 검사 당일 이른 아침에 물 한 모금으로 복용하십시오.",
  "가벼운 산책이나 양치질 정도는 무관합니다.",
  "내원 시 문진표, 채변용기, 안경 또는 콘택트렌즈를 지참하여 주시기 바랍니다.",
  "기타 귀중품 휴대 및 어린이 동반은 자제해 주십시오.",
  "임산부(임신 가능성이 있는 분) 및 생리 중에는 검사가 불가능합니다.",
];

type Column = "A" | "B" | "C" | "F" | "ref";
const cols: { key: Column; label: string; sub?: string }[] = [
  { key: "ref", label: "의뢰" },
  { key: "A", label: "A형" },
  { key: "B", label: "B형" },
  { key: "C", label: "C형" },
  { key: "F", label: "여성", sub: "(산전)" },
];

type ExamRow = { name: string; cols: Partial<Record<Column, boolean>>; note?: string };
type ExamGroup = { category: string; rows: ExamRow[] };

const examGroups: ExamGroup[] = [
  {
    category: "기초검사",
    rows: [
      { name: "신장 · 체중", cols: { A: true, B: true, C: true, F: true } },
      { name: "혈압", cols: { A: true, B: true, C: true, F: true } },
      { name: "청력", cols: { A: true, B: true, C: true, F: true } },
      { name: "시력", cols: { A: true, B: true, C: true, F: true } },
      { name: "폐활량", cols: { B: true, C: true } },
      { name: "스트레스 검사", cols: { B: true, C: true } },
      { name: "체지방 · 근력 (인바디)", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
  {
    category: "심전도 · CT · 대장내시경",
    rows: [
      { name: "심전도", cols: { A: true, B: true, C: true, F: true } },
      { name: "대장내시경", cols: {}, note: "선택" },
      { name: "CT (폐 · 뇌 · 척추 · 기타)", cols: {}, note: "선택" },
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
    category: "X선 촬영",
    rows: [
      { name: "흉부 X선 촬영", cols: { A: true, B: true, C: true, F: true } },
      { name: "L-SPINE A/L", cols: { B: true, C: true, F: true } },
      { name: "골다공증 (남 : A형만)", cols: { B: true, C: true } },
      { name: "유방 X선 촬영", cols: { A: true, B: true, C: true, F: true } },
      { name: "위암 검사 (UGI · ENDO)", cols: { B: true, C: true, F: true } },
    ],
  },
  {
    category: "초음파",
    rows: [
      { name: "복부", cols: { B: true, C: true, F: true } },
      { name: "갑상선", cols: { B: true, C: true, F: true } },
      { name: "유방 (f)", cols: { C: true, F: true } },
      { name: "자궁", cols: { B: true, C: true, F: true } },
      { name: "전립선 (m)", cols: { C: true } },
    ],
  },
  {
    category: "혈액형 · 소변검사",
    rows: [
      { name: "ABO · Rh", cols: { A: true, B: true, C: true, F: true } },
      { name: "비중 · PH · Leukocytes · 뇨잠혈 · Nitrite · 케톤", cols: { A: true, B: true, C: true, F: true } },
      { name: "빌리루빈 · 유로빌리노겐 · 뇨단백 · 뇨당", cols: { A: true, B: true, C: true, F: true } },
      { name: "뇨 백혈구 · 뇨 적혈구", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
  {
    category: "혈액검사 (간 · 당 · 지질)",
    rows: [
      { name: "GOT · GPT · GGT", cols: { A: true, B: true, C: true, F: true } },
      { name: "GLU (혈당)", cols: { A: true, B: true, C: true, F: true } },
      { name: "T-CHO (총콜레스테롤)", cols: { A: true, B: true, C: true, F: true } },
      { name: "HDL · LDL · TG", cols: { B: true, C: true, F: true } },
      { name: "TP · ALB · TB · DB · ALP · LDH", cols: { B: true, C: true, F: true } },
      { name: "BUN/Cre (신장기능)", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
  {
    category: "갑상선 · 간염 · 종양표지자",
    rows: [
      { name: "TSH · fT4", cols: { A: true, B: true, C: true, F: true } },
      { name: "T3", cols: { C: true } },
      { name: "HBS Ag/Ab", cols: { A: true, B: true, C: true, F: true } },
      { name: "HCV", cols: { B: true, C: true, F: true } },
      { name: "AFP (간암)", cols: { A: true, B: true, C: true, F: true } },
      { name: "PSA (전립선암, 남)", cols: { B: true, C: true } },
      { name: "CEA (대장암)", cols: { B: true, C: true, F: true } },
      { name: "CA 125 (난소암)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "CA 19-9 (췌장암)", cols: { ref: true, C: true } },
    ],
  },
  {
    category: "의뢰 선택 항목",
    rows: [
      { name: "CRP (염증)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "RA factor (류마티스)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "UA (요산 · 통풍)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "H pylori (Ab)", cols: { ref: true, B: true, C: true } },
      { name: "아밀라제 (췌장)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "VDRL (매독)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "AIDS", cols: { ref: true, B: true, C: true, F: true } },
      { name: "Ferritin", cols: { ref: true, B: true, C: true } },
      { name: "Fe · TIBC", cols: { ref: true, B: true, C: true, F: true } },
      { name: "Na · K · Cl · Ca (전해질)", cols: { ref: true, B: true, C: true, F: true } },
      { name: "풍진 (Rubella IgM/G)", cols: { ref: true, F: true } },
    ],
  },
  {
    category: "CBC (혈구 전체)",
    rows: [
      { name: "WBC · RBC · Hb · Hct", cols: { A: true, B: true, C: true, F: true } },
      { name: "임파구% · 단핵구% · 분획 호중구%", cols: { A: true, B: true, C: true, F: true } },
      { name: "MCV · MCH · MCHC · RDW", cols: { A: true, B: true, C: true, F: true } },
      { name: "PLT · MPV · PDW", cols: { A: true, B: true, C: true, F: true } },
    ],
  },
];

const optional = [
  { name: "뇌졸중 조기검진", desc: "경동맥 초음파 검사로 뇌혈관 협착 및 혈관 경화 정도 진단" },
  { name: "결혼 전 건강검진", desc: "결혼을 앞둔 분들을 위한 맞춤 검진 프로그램" },
  { name: "일반 X선 검사", desc: "척추, 무릎 및 기타 골격계 이상 확인" },
  { name: "각종 혈액검사 및 암인자 검사", desc: "빈혈 및 혈액질환 이상 확인" },
  { name: "각종 초음파 검사", desc: "갑상선, 복부, 유방, 전립선, 피부 질환 등" },
  { name: "위내시경 / 위장조영촬영", desc: "식도, 위, 십이지장 질환 진단" },
  { name: "대장암 검사 / 대장조영촬영", desc: "대장 질환 전반 확인" },
  { name: "신장조영촬영 (IVP)", desc: "신장 기능 이상 확인" },
  { name: "전신 CT", desc: "뇌, 경부, 폐, 복부, 골반부 등 정밀 진단" },
  { name: "골다공증 검사", desc: "뼈 밀도 측정 및 골다공증 진단" },
  { name: "스트레스 검사", desc: "자율신경계 및 심박변이도 측정" },
  { name: "비만도 검사", desc: "체지방 분석 및 근감소증 확인 (인바디)" },
];

export default function ComprehensivePage() {
  const [activeType, setActiveType] = useState<"A" | "B" | "C" | "F" | "ALL">("ALL");

  const isVisible = (row: ExamRow) => {
    if (activeType === "ALL") return true;
    return !!row.cols[activeType];
  };

  return (
    <>
      <PageBanner
        title="종합검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "종합검진" },
        ]}
      />

      {/* 인트로 */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            여러분의 평생 주치의가 되겠습니다
          </h2>
          <p className="text-text-gray leading-relaxed mb-3">
            검진 받으시는 모든 분들의 결과를 체계적으로 관리하고, 특이 소견이 있을 경우
            해당 질환에 가장 적합한 종합병원을 선별하여 최고의 진료를 받으실 수 있도록
            연계해 드립니다.
          </p>
          <p className="text-text-gray leading-relaxed">
            검사 결과에 따른 신속한 진단과 치료가 이루어질 수 있도록, 저희 병원 전문의들이
            직접 상담과 처방을 제공합니다.
          </p>
        </div>
      </section>

      {/* 검진 유형 */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { type: "A형", subtitle: "기본 검진", desc: "기초 · 혈액 · 소변 · 흉부X선 · 심전도 · 유방X선" },
            { type: "B형", subtitle: "정밀 검진", desc: "A형 + 복부·갑상선 초음파, 위내시경, 골다공증, 간염" },
            { type: "C형", subtitle: "프리미엄", desc: "B형 + 전립선 초음파, 유방 초음파, 경부바이러스, 전해질" },
            { type: "여성형", subtitle: "산전 포함", desc: "여성 특화 - 자궁암, 유방, 풍진 검사 포함" },
          ].map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all ${
                idx === 1
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-md"
              }`}
            >
              <h3 className={`text-xl font-bold mb-1 ${idx === 1 ? "" : "text-text-dark"}`}>
                {t.type}
              </h3>
              <p
                className={`text-sm font-semibold mb-3 ${
                  idx === 1 ? "text-white/80" : "text-primary"
                }`}
              >
                {t.subtitle}
              </p>
              <p className={`text-sm leading-relaxed ${idx === 1 ? "text-white/90" : "text-text-gray"}`}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 대상자 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">대상자</h2>
          <p className="text-text-gray leading-relaxed">
            다음과 같은 증상이 있는 분들은 종합검진을 꼭 받아 보셔야 합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {targetSymptoms.map((s, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-primary/30 transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-sm text-text-dark leading-relaxed">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 수검 전 지시사항 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">수검 전 지시사항</h2>
          <p className="text-text-gray leading-relaxed">
            정확한 검사 결과를 위해 전날과 당일 지시사항을 꼭 지켜주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 전날 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-dark">건강검진 전날</h3>
            </div>
            <ul className="space-y-3">
              {prepDayBefore.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 당일 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2M6.343 17.657l-1.414 1.414M12 21v-2M4.222 4.222l1.414 1.414M1 12h2m3.343-5.657L4.929 4.929M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-dark">건강검진 당일</h3>
            </div>
            <ul className="space-y-3">
              {prepSameDay.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 특별 주의 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="space-y-2 text-sm text-amber-900 leading-relaxed">
              <p>
                <strong>항응고제(아스피린 등) 복용자</strong>는 내시경 조직검사 시 출혈의 위험이 있어,
                처방 의사와 반드시 사전 협의하여 검진 전 약 1주 정도는 복용을 중단하셔야 합니다.
                (혈압약은 예외 — 아침에 물 한 모금과 함께 복용 가능)
              </p>
              <p>
                <strong>수면 내시경을 하시는 분</strong>은 당일 자가운전이 불가능하오니,
                대중교통을 이용해 주시거나 보호자와 동반해 주십시오.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 검진항목 매트릭스 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">검진 항목</h2>
          <p className="text-text-gray leading-relaxed">
            유형별 포함 검사 항목을 확인하실 수 있습니다. 버튼을 눌러 해당 유형에 포함된 항목만 필터링할 수 있습니다.
          </p>
        </div>

        {/* 필터 버튼 */}
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

        {/* 매트릭스 테이블 */}
        <div className="space-y-6">
          {examGroups.map((group, gIdx) => {
            const visibleRows = group.rows.filter(isVisible);
            if (visibleRows.length === 0) return null;
            return (
              <div key={gIdx}>
                <h3 className="text-base font-bold text-primary mb-3">{group.category}</h3>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
                  <table className="w-full min-w-[640px]">
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
                              ) : row.note && c.key === "A" ? (
                                <span className="text-xs text-text-light italic">{row.note}</span>
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

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 기타 선택검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">기타 선택 검사</h2>
          <p className="text-text-gray leading-relaxed">
            종합검진 외에도 개별 선택하실 수 있는 정밀 검사들을 운영하고 있습니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {optional.map((o, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="font-bold text-text-dark">{o.name}</h3>
              </div>
              <p className="text-sm text-text-gray leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
