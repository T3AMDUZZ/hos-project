"use client";

import { useState } from "react";

export type CancerImage = { src: string; caption: string };
export type CancerGroup = { label: string; images: CancerImage[] };
export type FlowStep = { step: string; title: string; desc: string };
export type FlowOutcome = { label: string; desc: string; tone: "good" | "bad" | "warn" | "neutral" };
export type Diagnosis = { label: string; steps: FlowStep[]; branchTitle: string; outcomes: FlowOutcome[] };
export type DefItem = { t: string; d: string };
export type DetailBlock =
  | { type: "para"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "deflist"; items: DefItem[] };
export type DetailSection = { heading: string; blocks: DetailBlock[] };
export type Cancer = {
  n: string;
  title: string;
  anatomy: CancerImage;
  description: string;
  symptoms: string[];
  screening: string[];
  groups: CancerGroup[];
  details?: DetailSection[];
  diagnosis?: Diagnosis;
};

const TONE: Record<FlowOutcome["tone"], string> = {
  good: "border-emerald-200 bg-emerald-50 text-emerald-900",
  bad: "border-rose-200 bg-rose-50 text-rose-900",
  warn: "border-amber-200 bg-amber-50 text-amber-900",
  neutral: "border-slate-200 bg-slate-50 text-slate-800",
};

function DetailBlockView({ block }: { block: DetailBlock }) {
  if (block.type === "para") {
    return <p className="text-sm md:text-[15px] text-text-gray leading-relaxed max-w-3xl">{block.text}</p>;
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-gray">
            <span className="text-primary mt-0.5">&#8226;</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "numbered") {
    return (
      <ol className="space-y-2">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-text-gray">
            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ol>
    );
  }
  // deflist
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {block.items.map((it, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-100 p-4">
          <p className="font-bold text-text-dark text-sm mb-1.5">{it.t}</p>
          <p className="text-sm text-text-gray leading-relaxed">{it.d}</p>
        </div>
      ))}
    </div>
  );
}

function DiagnosisFlow({ steps, branchTitle, outcomes }: Omit<Diagnosis, "label">) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
      <ol className="space-y-0">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="w-0.5 grow bg-primary/20 my-1" />
            </div>
            <div className="pb-6">
              <p className="text-[11px] font-bold text-primary tracking-widest">{s.step}</p>
              <h4 className="font-bold text-text-dark mt-1">{s.title}</h4>
              <p className="text-sm text-text-gray mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* 결과 분기 */}
      <div className="ml-14">
        <p className="text-sm font-bold text-text-dark mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          {branchTitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {outcomes.map((o) => (
            <div key={o.label} className={`rounded-xl border p-4 ${TONE[o.tone]}`}>
              <p className="font-bold text-sm">{o.label}</p>
              <p className="text-xs mt-1.5 leading-relaxed opacity-90">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageCard({ src, caption }: CancerImage) {
  return (
    <figure className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] flex items-center justify-center bg-bg-light p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} loading="lazy" className="max-w-full max-h-full object-contain" />
      </div>
      <figcaption className="px-3 py-2.5 text-xs md:text-sm text-text-gray text-center border-t border-gray-100 leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function CancerTabs({ cancers }: { cancers: Cancer[] }) {
  const [active, setActive] = useState(0);
  const c = cancers[active];

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10" role="tablist" aria-label="여성암 선택">
        {cancers.map((cc, i) => (
          <button
            key={cc.n}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-bold border transition-colors ${
              active === i
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-text-dark border-gray-200 hover:border-primary/50 hover:text-primary"
            }`}
          >
            {cc.title}
          </button>
        ))}
      </div>

      {/* 선택된 암 콘텐츠 */}
      <section key={c.n}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
            {c.n}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark">{c.title}</h2>
        </div>

        {/* 해부 구조 + 개요/증상/검진 */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          <figure className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="aspect-[4/3] flex items-center justify-center bg-bg-light p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.anatomy.src}
                alt={c.anatomy.caption}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-text-gray text-center border-t border-gray-100">
              {c.anatomy.caption}
            </figcaption>
          </figure>

          <div>
            <p className="text-text-gray leading-relaxed mb-6">{c.description}</p>

            <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />주요 증상
            </h3>
            <ul className="space-y-2 mb-6">
              {c.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-gray">
                  <span className="text-primary mt-0.5">&#8226;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-text-dark mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />검진 방법
            </h3>
            <ul className="space-y-2">
              {c.screening.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-gray">
                  <span className="text-primary font-bold mt-0.5">{i + 1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 이미지 그룹 (영상 소견·진단·치료) */}
        {c.groups.map((g) => (
          <div key={g.label} className="mb-8">
            <h3 className="font-bold text-text-dark mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              {g.label}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {g.images.map((im) => (
                <ImageCard key={im.src} {...im} />
              ))}
            </div>
          </div>
        ))}

        {/* 상세 정보 섹션 */}
        {c.details && (
          <div className="space-y-8 mb-8">
            {c.details.map((sec) => (
              <div key={sec.heading}>
                <h3 className="font-bold text-text-dark mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full" />
                  {sec.heading}
                </h3>
                <div className="space-y-3">
                  {sec.blocks.map((b, i) => (
                    <DetailBlockView key={i} block={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 진단 과정 (직접 구성한 다이어그램) */}
        {c.diagnosis && (
          <div className="mb-8 last:mb-0">
            <h3 className="font-bold text-text-dark mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              {c.diagnosis.label}
            </h3>
            <DiagnosisFlow
              steps={c.diagnosis.steps}
              branchTitle={c.diagnosis.branchTitle}
              outcomes={c.diagnosis.outcomes}
            />
          </div>
        )}
      </section>
    </div>
  );
}
