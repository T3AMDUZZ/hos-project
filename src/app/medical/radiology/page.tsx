"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";

const generalXray = [
  {
    title: "흉부 X선 촬영",
    desc: "폐결핵, 폐암 및 기타 흉부질환 진단",
  },
  {
    title: "경추 / 흉추 / 요추 X선 검사",
    desc: "골격계의 기본질환, 골절 및 암 진단 / 척추측만증 검사",
  },
  {
    title: "골반부 X선 검사",
    desc: "고관절 골괴사 및 암 진단",
  },
  {
    title: "기타 X선 검사",
    desc: "골절, 암, 선천적 이상 진단",
  },
];

const specialXray = [
  {
    title: "위장조영검사",
    desc: "위, 식도, 십이지장, 소장 검사",
  },
  {
    title: "대장조영검사",
    desc: "대장암, 궤양성 질환 진단",
  },
  {
    title: "신장조영촬영",
    desc: "신장기능 및 암 혹은 결석 검사",
  },
  {
    title: "근골격계 검사",
    desc: "퇴행성 관절염 및 골성질환 / 척추 측만증 및 골절 / 골다공증 진단 및 치료",
  },
  {
    title: "수신증 검사",
    desc: "요로 폐쇄로 인한 신장 이상 진단",
  },
  {
    title: "방광요관역류 검사",
    desc: "방광의 소변이 요관으로 역류하는지 확인",
  },
];

const ultrasound = [
  {
    title: "복부초음파검사",
    desc: "간, 담낭, 췌장, 비장 및 신장 질환을 확인합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: "갑상선초음파검사",
    desc: "갑상선 결절 및 물혹, 갑상선 비대 여부를 확인합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "전립선초음파검사",
    desc: "전립선 비대증 및 암을 진단합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "경동맥초음파검사",
    desc: "뇌혈관 협착 및 동맥경화 진행 정도를 측정합니다.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const breastCancer = [
  {
    title: "유방 X선 검사",
    desc: "유방암 진단을 위한 필수적 기본 검사입니다. 디지털 유방촬영장치로 유방암 조기 발견을 위한 정밀 검사를 시행합니다.",
  },
  {
    title: "유방초음파검사",
    desc: "유방암 진단을 위한 보조적 검사로, 치밀유방이나 X선 검사의 한계를 보완합니다.",
  },
];

const uterineCancer = [
  {
    title: "자궁초음파검사",
    desc: "자궁 및 부속기의 상태를 확인하는 검사입니다.",
  },
  {
    title: "세포진 및 자궁확대경검사",
    desc: "자궁경부암의 가장 기본적 검사로, 자궁경부 세포를 채취하여 이상 여부를 확인합니다.",
  },
  {
    title: "경부바이러스검사(DNA검사)",
    desc: "자궁경부암을 유발하는 바이러스(HPV)의 DNA를 확인하는 검사입니다.",
  },
];

const ovarianCancer = [
  {
    title: "난소암표지자검사 (CA-125)",
    desc: "혈액 속에 있는 표지자를 통해 난소암의 유무를 진단하는 방법입니다.",
  },
  {
    title: "초음파검사",
    desc: "초음파를 통해 난소암을 진단합니다. 크기, 모양, 전이 여부를 확인할 수 있습니다.",
  },
];

export default function RadiologyPage() {
  const [xrayTab, setXrayTab] = useState<"general" | "special">("general");
  const [womenTab, setWomenTab] = useState<"breast" | "uterine" | "ovarian">("breast");

  return (
    <>
      <PageBanner
        title="영상의학과"
        breadcrumb={[
          { title: "진료안내", href: "/medical/radiology" },
          { title: "영상의학과" },
        ]}
      />

      {/* 인트로 */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            영상의학 전문의가 직접 검사하고 판독합니다
          </h2>
          <p className="text-text-gray leading-relaxed">
            최신 영상진단 장비를 갖추고 정확하고 신속한 진단 결과를 제공합니다.
            영상의학과 전문의가 직접 검사에 참여하여 보다 정밀한 진단이 가능합니다.
          </p>
        </div>
      </section>

      {/* 섹션 1: X선 촬영 (일반/특수) */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">X선 촬영</h2>
          <p className="text-text-gray leading-relaxed">
            일반 X선 촬영과 조영제를 이용한 특수 촬영을 통해 다양한 질환을 진단합니다.
          </p>
        </div>

        {/* 탭 */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setXrayTab("general")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              xrayTab === "general"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            일반 촬영
          </button>
          <button
            onClick={() => setXrayTab("special")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              xrayTab === "special"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            특수 촬영
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(xrayTab === "general" ? generalXray : specialXray).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 font-bold">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 2: CT 검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">CT 검사</h2>
          <p className="text-text-gray leading-relaxed">
            컴퓨터 단층촬영을 통해 인체의 단면을 정밀하게 진단합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-3">컴퓨터 단층촬영 검사</h3>
            <p className="text-sm text-text-gray leading-relaxed">
              뇌, 경부, 폐, 복부, 골반, 상하지 및 무릎의 병변 및 골절을 진단합니다.
              정밀한 단면 영상을 통해 다양한 질환을 확인할 수 있습니다.
            </p>
          </div>

          <div className="bg-accent/5 rounded-2xl border border-accent/10 p-8">
            <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-3">저선량 흉부 CT</h3>
            <p className="text-sm text-text-gray leading-relaxed">
              조기 폐암 진단을 위한 검사로, 일반 CT보다 방사선 노출량을 크게 줄여
              안전하게 폐 상태를 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 3: 초음파 검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">초음파 검사</h2>
          <p className="text-text-gray leading-relaxed">
            방사선 피폭 없이 안전하게 다양한 장기를 실시간으로 확인할 수 있는 검사입니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ultrasound.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 4: 골다공증 검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">골다공증 검사</h2>
          <p className="text-text-gray leading-relaxed">
            뼈의 밀도를 정밀하게 측정하여 골다공증을 진단하고 치료 방향을 결정합니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-dark mb-2">정량적 골밀도 검사 (QCT)</h3>
            <p className="text-sm text-text-gray leading-relaxed">
              CT를 이용하여 뼈의 밀도를 정량적으로 측정하는 정밀 검사입니다.
              일반 골밀도 검사보다 정확한 측정이 가능하며, 골다공증의 조기 진단과
              치료 경과 확인에 활용됩니다.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 5: 여성암 검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">여성암 검사</h2>
          <p className="text-text-gray leading-relaxed">
            유방암, 자궁암, 난소암의 조기 진단을 위한 다양한 검사를 시행합니다.
          </p>
        </div>

        {/* 탭 */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            onClick={() => setWomenTab("breast")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              womenTab === "breast"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            유방암 검사
          </button>
          <button
            onClick={() => setWomenTab("uterine")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              womenTab === "uterine"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            자궁암 검사
          </button>
          <button
            onClick={() => setWomenTab("ovarian")}
            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
              womenTab === "ovarian"
                ? "border-primary text-primary"
                : "border-transparent text-text-gray hover:text-text-dark"
            }`}
          >
            난소암 검사
          </button>
        </div>

        <div className="space-y-4">
          {(womenTab === "breast"
            ? breastCancer
            : womenTab === "uterine"
            ? uterineCancer
            : ovarianCancer
          ).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/30 transition-colors flex items-start gap-5"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-text-dark mb-1">{item.title}</h3>
                <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
