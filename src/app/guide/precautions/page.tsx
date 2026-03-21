"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";

const colonoscopyTabs = [
  {
    label: "쿨프렙",
    content: {
      title: "쿨프렙(Coolprep) 복용법",
      steps: [
        {
          time: "검사 전날",
          items: [
            "점심: 가벼운 식사 (죽, 미음 등)",
            "저녁: 금식 (물, 맑은 음료만 가능)",
            "저녁 6시: 쿨프렙 1포를 물 500mL에 녹여 복용",
            "이후 물 500mL를 추가로 복용",
            "30분 후 쿨프렙 1포를 물 500mL에 녹여 복용",
            "이후 물 500mL를 추가로 복용",
          ],
        },
        {
          time: "검사 당일",
          items: [
            "검사 5~6시간 전: 쿨프렙 1포를 물 500mL에 녹여 복용",
            "이후 물 500mL를 추가로 복용",
            "30분 후 쿨프렙 1포를 물 500mL에 녹여 복용",
            "이후 물 500mL를 추가로 복용",
            "검사 2시간 전부터 금식 (물 포함)",
          ],
        },
      ],
    },
  },
  {
    label: "오라팡",
    content: {
      title: "오라팡(Orapang) 복용법",
      steps: [
        {
          time: "검사 전날",
          items: [
            "점심: 가벼운 식사 (죽, 미음 등)",
            "저녁: 금식",
            "저녁 7시: 오라팡 1봉을 물 200mL에 녹여 복용",
            "이후 1시간 동안 물 750mL를 나누어 복용",
            "저녁 9시: 오라팡 1봉을 물 200mL에 녹여 복용",
            "이후 1시간 동안 물 750mL를 나누어 복용",
          ],
        },
        {
          time: "검사 당일",
          items: [
            "검사 5시간 전: 오라팡 1봉을 물 200mL에 녹여 복용",
            "이후 1시간 동안 물 750mL를 나누어 복용",
            "검사 2시간 전부터 금식 (물 포함)",
          ],
        },
      ],
    },
  },
];

const gastroscopyPrecautions = [
  "검사 전날 저녁 9시 이후 금식합니다.",
  "검사 당일 아침 식사, 물, 우유, 껌, 담배 등 일체 금지합니다.",
  "혈압약은 검사 당일 아침 소량의 물과 함께 복용합니다.",
  "수면내시경 시 보호자 동반이 필요하며, 검사 후 당일 운전을 삼가합니다.",
  "당뇨약/인슐린은 검사 당일 아침에는 복용하지 않습니다.",
  "아스피린, 항혈전제 복용 중이면 사전에 의료진에게 알려주세요.",
];

const generalPrecautions = [
  "혈액검사가 포함된 경우 검사 전 8시간 이상 금식합니다.",
  "소변검사는 아침 첫 소변이 정확도가 높으므로, 가능하면 소변을 참고 내원합니다.",
  "편안한 복장으로 오시면 검진이 수월합니다.",
  "귀금속, 악세서리는 제거 후 내원하시면 좋습니다.",
  "여성의 경우 생리 기간에는 소변검사와 자궁경부암 검사가 어려울 수 있습니다.",
  "현재 복용 중인 약물이 있으면 사전에 의료진에게 알려주세요.",
  "임신 가능성이 있는 경우 반드시 사전에 알려주세요 (X선, CT 검사 관련).",
];

export default function PrecautionsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageBanner
        title="검사 전 주의사항"
        breadcrumb={[
          { title: "이용안내", href: "/guide/costs" },
          { title: "검사 전 주의사항" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 대장내시경 전처치 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">
          대장내시경 전처치 방법
        </h2>
        <p className="text-text-gray mb-6 leading-relaxed">
          대장내시경 검사의 정확도를 위해 장 정결이 매우 중요합니다.
          처방받은 전처치제에 따라 아래 방법을 따라주세요.
        </p>

        {/* 탭 선택 */}
        <div className="flex gap-2 mb-6">
          {colonoscopyTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                activeTab === idx
                  ? "bg-primary text-white"
                  : "bg-bg-light text-text-gray hover:text-text-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-16">
          <h3 className="font-bold text-primary text-lg mb-4">
            {colonoscopyTabs[activeTab].content.title}
          </h3>
          <div className="space-y-6">
            {colonoscopyTabs[activeTab].content.steps.map((step, sIdx) => (
              <div key={sIdx}>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {step.time}
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-text-gray">
                      <span className="text-primary font-bold mt-0.5">{iIdx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-primary/10 rounded-lg p-4">
            <p className="text-xs text-text-dark">
              <strong>주의:</strong> 전처치 후 대변이 맑은 노란색 물처럼 나오면 장 정결이 완료된 것입니다.
              전처치 중 구토, 심한 복통 등 이상 증상 시 병원(042-000-0000)으로 연락해 주세요.
            </p>
          </div>
        </div>

        {/* 위내시경 주의사항 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">
          위내시경 주의사항
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-16">
          <ul className="space-y-3">
            {gastroscopyPrecautions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-xs">{idx + 1}</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 일반검사 주의사항 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">
          일반검사 주의사항
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <ul className="space-y-3">
            {generalPrecautions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-gray">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-xs">{idx + 1}</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
