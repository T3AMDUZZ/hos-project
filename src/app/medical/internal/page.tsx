"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

const departments = [
  {
    title: "호흡기 질환",
    desc: "폐결핵 및 폐암 진단치료 / 만성기관지질환 및 천식치료",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m0 14v1m-7-8H4m16 0h1m-2.636-5.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: "내분비 질환",
    desc: "갑상선기능항진증 및 저하증 / 골다공증 진단 및 치료 / 갱년기 질환",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "소화기계 질환",
    desc: "식도, 위, 대장질환 진단 및 치료",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "간장 질환",
    desc: "알코올성 간질환 / B형간염 / C형간염에 대한 간경화질환 / 급만성 간염질환",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "급만성 이비인후과 질환",
    desc: "급만성 축농증 치료(비수술적 질환) / 편도염",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "부인과적 질환",
    desc: "급만성 질염 및 경부염 치료 / 갱년기 호르몬 치료 / 빈혈 진단 및 치료",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "소아과",
    desc: "호흡기 및 소화기계 질환 / 성장장애 진단 및 근골격계 질환 진단",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const warningItems = [
  "아스피린을 장기 복용하는 분",
  "심장판막수술이나 심장수술을 하신 분, 심근협심증으로 치료를 받으신 분, 그 외 부정맥이나 다른 심장질환이 있는 분",
  "쿼마딘 등 심장에 대한 약을 장기적으로 복용하시는 분",
  "간장질환(간경화)이 있는 분",
  "장기간 정신과 처방을 받는 분",
  "호흡기질환, 폐기능 장애, 신장질환이 있는 분",
];

const gastroscopyPrep = [
  "전날 아침, 점심, 저녁은 죽이나 소화가 잘 되는 식사",
  "저녁은 6시~7시 정도 이른 시간에 소식 권장",
  "주무시기 전까지 물은 섭취 가능",
  "아침에 일체 금식 (물도 안 됨) 후 내원",
  "혈압약은 오전 6시 정도에 드신 후 내원",
];

const colonoscopyPrep = [
  "대장 내부가 깨끗하게 되어야 정확한 검사를 편하게 받으실 수 있습니다.",
  "검사 일주일 전부터 질긴 채소류, 김, 미역 등 해조류, 잡곡(현미쌀, 검은쌀), 씨가 많은 과일(참외, 포도, 토마토, 수박) 등은 절대 드시지 마십시오.",
  "항응고제, 와파린, 아스피린 등을 복용 중인 분은 담당의와 중단 여부를 상의하십시오. (검사 일주일 전부터 중단)",
  "검사 전날 저녁 5시 이후에는 죽이나 미음을 드시고 금식하시기 바라며, 검사가 끝날 때까지 금식입니다.",
  "당뇨가 있는 분은 검사 당일 인슐린 주사나 당뇨약은 절대 투약하지 마십시오.",
  "고혈압이 있는 분은 검사 당일 아침 소량의 물과 함께 아침 고혈압약만 드십시오.",
  "검사 당일은 어지러울 수 있고 운전하면 안 되므로 보호자와 함께 오십시오.",
];

const colonoscopyAfter = [
  "검사 중 공기 주입으로 인해 복부 팽만과 통증이 발생할 수 있습니다. 복식호흡 및 복부 마사지를 하여 가스를 배출하세요.",
  "내시경 기계의 자극으로 항문 주위에 불편감이 발생할 수 있습니다. 귀가 후 좌욕을 충분히 하세요. (40도의 따뜻한 물에 15~20분)",
  "검사 후 식사 여부에 대해서는 의사와 상의하시기 바랍니다.",
  "검사 당일 운전, 기계를 다루거나 사우나, 심한 운동은 하지 마십시오.",
  "조직검사 후 대변에 피가 조금 섞일 수 있으나 곧 멈추며, 계속 피가 나오면 병원으로 오시기 바랍니다.",
];

const coolprepAM = [
  { time: "전날 아침·점심", action: "죽이나 미음으로 가볍게 식사, 저녁은 금식" },
  { time: "전날 저녁 7시", action: "둘코락스 2알 복용" },
  { time: "전날 저녁 8시", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (1회)" },
  { time: "전날 저녁 8시 30분", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (2회) → 이후 물 1L 이상 충분히 드신 후 수면" },
  { time: "당일 새벽 5시", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (3회)" },
  { time: "당일 새벽 5시 30분", action: "물 500ml에 쿨프렙 한 포(A+B)+가스콜을 섞어서 30분에 걸쳐 복용 (4회) → 이후 물 1L 이상 충분히 드신 후 내원" },
];

const coolprepPM = [
  { time: "전날 아침·점심", action: "죽이나 미음으로 가볍게 식사, 저녁은 금식" },
  { time: "전날 저녁 7시", action: "둘코락스 2알 복용" },
  { time: "당일 오전 7시", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (1회)" },
  { time: "당일 오전 7시 30분", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (2회)" },
  { time: "당일 오전 8시", action: "물 500ml에 쿨프렙 한 포(A+B)를 섞어서 30분에 걸쳐 복용 (3회)" },
  { time: "당일 오전 8시 30분", action: "물 500ml에 쿨프렙 한 포(A+B)+가스콜을 섞어서 30분에 걸쳐 복용 (4회) → 이후 물 1L 이상 충분히 드신 후 내원" },
];

export default function InternalPage() {
  const [endoscopyTab, setEndoscopyTab] = useState<"gastro" | "colono">("gastro");
  const [prepTab, setPrepTab] = useState<"coolprep" | "orapang">("coolprep");
  const [prepTime, setPrepTime] = useState<"am" | "pm">("am");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <>
      <PageBanner
        title="내과(소아과)"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "내과(소아과)" },
        ]}
      />

      {/* 섹션 1: 진료 내용 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">진료 내용</h2>
          <p className="text-text-gray leading-relaxed">
            일반 내과 질환부터 소아과까지, 환자 중심의 폭넓은 진료를 제공합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {dept.icon}
              </div>
              <h3 className="font-bold text-text-dark mb-2">{dept.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 구분선 */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 2: 소화기내과 운영 - 탭 UI */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">소화기내과 운영</h2>
          <p className="text-text-gray leading-relaxed">
            상부위장관검사(위내시경) 및 대장내시경 검사를 시행하고 있습니다.
          </p>
        </div>

        {/* 탭 버튼 */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setEndoscopyTab("gastro")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              endoscopyTab === "gastro"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            위내시경 검사
          </button>
          <button
            onClick={() => setEndoscopyTab("colono")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              endoscopyTab === "colono"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            대장내시경 검사
          </button>
        </div>

        {/* 위내시경 */}
        {endoscopyTab === "gastro" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-text-dark mb-3">검사 안내</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                식도, 위, 십이지장의 이상 병변을 확인하고 조직검사를 시행합니다.
                악성 병변이 발견될 경우 상급병원으로 전원합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-text-dark mb-4">위내시경 검사 준비</h3>
              <ul className="space-y-3">
                {gastroscopyPrep.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 부작용 아코디언 */}
            <button
              onClick={() => toggleAccordion("gastro-side")}
              className="w-full bg-white rounded-2xl border border-gray-100 p-6 text-left hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-dark">위내시경의 부작용</h3>
                <svg
                  className={`w-5 h-5 text-text-gray transition-transform duration-300 ${openAccordion === "gastro-side" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openAccordion === "gastro-side" && (
                <div className="mt-4 space-y-3 text-sm text-text-gray leading-relaxed">
                  <p>
                    <strong className="text-text-dark">1) 출혈</strong> — 위내시경 시행 시 과도한 구역 및 구토 증상이 발생할 수 있으며,
                    드물게 위-식도 접합부위의 일부가 찢어져 출혈이 발생할 수 있습니다.
                    조직검사 시행 후 지혈이 잘 되지 않는 경우가 있으나 대부분 보존적 치료로 호전됩니다.
                  </p>
                  <p>
                    <strong className="text-text-dark">2) 목 아픔</strong> — 내시경 진입 시 식도 상부 부위에 상처가 나는 경우가 있으며
                    약 1~2일간 통증이 지속될 수 있습니다.
                  </p>
                </div>
              )}
            </button>
          </div>
        )}

        {/* 대장내시경 */}
        {endoscopyTab === "colono" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-text-dark mb-3">검사 안내</h3>
              <p className="text-text-gray text-sm leading-relaxed">
                항문으로 대장내시경을 삽입하여 직장, S상 결장, 대장 및 맹장, 회장 말단부를 관찰합니다.
                대장 용종, 염증 변화 등을 발견 및 처치하며, 암이 의심되는 경우 상급병원으로 전원합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-text-dark mb-4">검사 준비사항</h3>
              <ul className="space-y-3">
                {colonoscopyPrep.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-text-dark mb-4">검사 후 주의사항</h3>
              <ul className="space-y-3">
                {colonoscopyAfter.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 합병증 아코디언 */}
            <button
              onClick={() => toggleAccordion("colono-side")}
              className="w-full bg-white rounded-2xl border border-gray-100 p-6 text-left hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-dark">대장내시경의 합병증</h3>
                <svg
                  className={`w-5 h-5 text-text-gray transition-transform duration-300 ${openAccordion === "colono-side" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {openAccordion === "colono-side" && (
                <div className="mt-4 space-y-3 text-sm text-text-gray leading-relaxed">
                  <p>
                    <strong className="text-text-dark">1) 출혈</strong> — 대장내시경에는 거의 드물고 대장용종절제술 시행 시
                    약 2.5% 이내의 환자에서 발생합니다. 내시경적 지혈술로 치료합니다.
                  </p>
                  <p>
                    <strong className="text-text-dark">2) 천공</strong> — 장천공은 대장내시경의 0.3~0.4%, 용종절제술 시 1% 미만에서 발생합니다.
                    작은 경우 금식 및 항생제 치료로 호전되며, 드물게 개복술이 필요할 수 있습니다.
                  </p>
                  <p>
                    <strong className="text-text-dark">3) 복통</strong> — 대장내시경 시행 2~3일 후까지 지속될 수 있습니다.
                  </p>
                  <p>
                    <strong className="text-text-dark">4) 감염, 장꼬임</strong> — 극히 드물게 발생할 수 있습니다.
                  </p>
                </div>
              )}
            </button>
          </div>
        )}
      </section>

      {/* 구분선 */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 3: 내시경 검사 전 주의사항 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">
            의식하 진정(수면)내시경 주의사항
          </h2>
        </div>

        {/* 경고 박스 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-amber-900 font-semibold text-lg">
              아래와 같은 질병이 있는 경우 반드시 담당의사 및 간호사에게 알려주시기 바랍니다.
            </p>
          </div>
          <ul className="space-y-3 ml-11">
            {warningItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-amber-900">
                <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 안내 문구 */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-sm text-text-gray leading-relaxed">
              <span className="text-primary font-bold mr-1">※</span>
              내시경은 전체적으로 안전한 검사이나 인체 내에 기구가 들어가서 하는 검사이므로
              심장에 부담을 줄 수 있으며 예기치 않은 사고가 날 수 있으니 주의를 부탁드립니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-sm text-text-gray leading-relaxed">
              <span className="text-primary font-bold mr-1">※</span>
              특히 수면내시경검사 후에는 회복을 위하여 안정이 필요하며 검사 당일에는 운전하지 마시고
              중요한 약속이나 업무는 피해야 합니다.
              <strong className="text-text-dark"> 낙상 예방을 위해 보호자께서 반드시 동행</strong>하셔야 합니다.
            </p>
          </div>
        </div>

        {/* 수면내시경 부작용 아코디언 */}
        <button
          onClick={() => toggleAccordion("sedation-side")}
          className="w-full mt-4 bg-white rounded-2xl border border-gray-100 p-6 text-left hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-dark">수면내시경 검사 부작용 및 합병증</h3>
            <svg
              className={`w-5 h-5 text-text-gray transition-transform duration-300 ${openAccordion === "sedation-side" ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {openAccordion === "sedation-side" && (
            <p className="mt-4 text-sm text-text-gray leading-relaxed">
              의식하 진정(수면)내시경 검사는 주사로 약을 투여하여 환자를 진정 상태에 이르게 한 후
              검사를 하므로 불편함을 줄여줍니다. 그러나 마취 상태가 아닌 환자의 협조가 가능한
              진정 상태에서 검사합니다. 부작용으로 호흡곤란 및 저산소증 등 호흡기 합병증, 맥박이
              빨라지는 심혈관계 합병증이 발생할 수 있으나 대개 특별한 조치 없이 좋아집니다.
              극히 드물게 호흡과 심장이 정지되는 경우가 발생할 수 있으며, 과민반응에 의한
              응급조치가 필요한 경우도 있습니다.
            </p>
          )}
        </button>
      </section>

      {/* 구분선 */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 4: 대장 전처치 방법 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">대장 전처치 방법</h2>
          <p className="text-text-gray leading-relaxed">
            대장에 대변 찌꺼기가 많이 남아있을 경우 내시경 중 복통의 빈도가 늘어나며,
            병변을 놓치는 경우가 있을 수 있습니다. 전처치는 매우 중요합니다.
          </p>
        </div>

        {/* 상위 탭: 약 종류 */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setPrepTab("coolprep")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              prepTab === "coolprep"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            쿨프렙산 (물약)
          </button>
          <button
            onClick={() => setPrepTab("orapang")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              prepTab === "orapang"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            오라팡 (알약)
          </button>
        </div>

        {/* 하위 탭: 오전/오후 */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setPrepTime("am")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              prepTime === "am"
                ? "bg-primary text-white"
                : "bg-gray-100 text-text-gray hover:bg-gray-200"
            }`}
          >
            오전 검사
          </button>
          <button
            onClick={() => setPrepTime("pm")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              prepTime === "pm"
                ? "bg-primary text-white"
                : "bg-gray-100 text-text-gray hover:bg-gray-200"
            }`}
          >
            오후 검사
          </button>
        </div>

        {/* 타임라인 */}
        {prepTab === "coolprep" && (
          <div className="relative">
            {(prepTime === "am" ? coolprepAM : coolprepPM).map((step, idx, arr) => (
              <div key={idx} className="flex gap-4 mb-0">
                {/* 타임라인 라인 */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-primary/20 shrink-0 z-10 mt-1" />
                  {idx < arr.length - 1 && (
                    <div className="w-0.5 bg-primary/20 flex-1 min-h-[40px]" />
                  )}
                </div>
                {/* 내용 */}
                <div className="pb-8">
                  <span className="text-sm font-bold text-primary">{step.time}</span>
                  <p className="text-sm text-text-gray mt-1 leading-relaxed">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {prepTab === "orapang" && (
          <div className="relative">
            {[
              { time: "전날 아침·점심", action: "죽이나 미음으로 가볍게 식사, 저녁은 금식" },
              { time: "전날 저녁 7시", action: "둘코락스 2알 복용" },
              { time: "전날 저녁 8시", action: "먼저 물 한 컵(300ml)을 마신 후, 오라팡 14정을 1~2정씩 나누어 물(약 500ml)과 함께 30분 동안 천천히 복용 → 이후 물 1L 이상 충분히 드신 후 수면" },
              ...(prepTime === "am"
                ? [{ time: "당일 새벽 5시", action: "같은 방법으로 오라팡 14정을 물과 함께 30분 동안 복용 → 이후 물 1L 이상 충분히 드신 후 내원 (혈압약은 새벽 4시에 복용)" }]
                : [{ time: "당일 오전 7시", action: "같은 방법으로 오라팡 14정을 물과 함께 30분 동안 복용 → 이후 물 1L 이상 충분히 드신 후 내원" }]
              ),
            ].map((step, idx, arr) => (
              <div key={idx} className="flex gap-4 mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-primary/20 shrink-0 z-10 mt-1" />
                  {idx < arr.length - 1 && (
                    <div className="w-0.5 bg-primary/20 flex-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-primary">{step.time}</span>
                  <p className="text-sm text-text-gray mt-1 leading-relaxed">{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 하단 안내 */}
        <div className="mt-4 bg-primary/5 rounded-2xl p-6 flex items-start gap-3">
          <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-text-gray leading-relaxed">
            장을 비우는 약을 다 드신 후에도 검사 예정 1시간 전까지는 생수를 충분히 더 드시고
            움직이시면 장이 깨끗해져서 검사가 더욱 수월해집니다.
          </p>
        </div>
      </section>
    </>
  );
}
