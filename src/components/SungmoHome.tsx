"use client";

/* 성모영상의학과 — 메인 홈 본문 (티케이병원 www.toptk.co.kr 참고 디자인)
   헤더/푸터는 LayoutShell의 SiteHeader/SiteFooter 공용 사용
   스타일은 src/app/tkhome.css (.smx.tkx 스코프) */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    tag: "SUNGMO RADIOLOGY CLINIC",
    title: ["정밀한 진단을 넘어,", "마음까지 살피는 진료"],
    desc: "첨단 영상장비와 전문의의 세심한 시선으로 당신의 건강을 지킵니다.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=75&auto=format&fit=crop",
  },
  {
    tag: "HEALTH CHECKUP CENTER",
    title: ["검진부터 진료까지,", "하나의 흐름으로"],
    desc: "종합검진·국가검진·5대암검진을 예약부터 결과 상담까지 원스톱으로 진행합니다.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=75&auto=format&fit=crop",
  },
  {
    tag: "WOMEN'S CLINIC",
    title: ["여성을 위한,", "세심하고 편안한 검진"],
    desc: "여성건강검진과 여성암 검사를 전문적이고 편안한 환경에서 시행합니다.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=75&auto=format&fit=crop",
  },
];

const CARES = [
  {
    eng: "Checkup",
    tit: "종합검진",
    txt: "A/B/C형 맞춤 종합검진으로 몸 전체를 꼼꼼하게 살핍니다.",
    href: "/checkup/comprehensive",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=70&auto=format&fit=crop",
  },
  {
    eng: "Radiology",
    tit: "영상의학과",
    txt: "CT·초음파 등 첨단 장비 기반의 정밀 영상 진단을 시행합니다.",
    href: "/medical/radiology",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=70&auto=format&fit=crop",
  },
  {
    eng: "Endoscopy",
    tit: "내시경검사",
    txt: "위·대장 내시경으로 소화기 질환을 조기에 발견합니다.",
    href: "/medical/endoscopy",
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=70&auto=format&fit=crop",
  },
  {
    eng: "Women",
    tit: "여성클리닉",
    txt: "여성건강검진과 여성암 검사를 세심하고 편안하게 진행합니다.",
    href: "/women/types",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=70&auto=format&fit=crop",
  },
];

const DEPTS = [
  { no: "01", name: "내과", sub: "만성질환 관리와 생활습관병 진료", href: "/medical/internal" },
  { no: "02", name: "영상의학과", sub: "CT·초음파 등 정밀 영상 진단", href: "/medical/radiology" },
  { no: "03", name: "내시경검사", sub: "위·대장 내시경 및 조기 진단", href: "/medical/endoscopy" },
  { no: "04", name: "예방접종·혈액검사", sub: "성인 예방접종과 기본 혈액검사", href: "/medical/vaccination" },
];

const PROGRAMS = [
  { eng: "Comprehensive", tit: "종합검진", txt: "A/B/C형 맞춤 구성으로 전신 건강 상태를 정밀하게 확인합니다.", href: "/checkup/comprehensive" },
  { eng: "National", tit: "국가건강검진", txt: "국민건강보험공단 일반검진을 편리하게 받아보실 수 있습니다.", href: "/checkup/national" },
  { eng: "Cancer", tit: "국가 5대암검진", txt: "위암·대장암·간암·유방암·자궁경부암을 조기에 발견합니다.", href: "/checkup/cancer" },
  { eng: "Employment", tit: "채용검진·보건증", txt: "채용검진과 보건증 발급을 빠르고 정확하게 진행합니다.", href: "/checkup/employment" },
];

export default function SungmoHome() {
  const [slide, setSlide] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-mo]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="smx tkx" ref={rootRef}>
      {/* 메인 비주얼 슬라이더 */}
      <section className="hero" aria-label="메인 비주얼">
        {SLIDES.map((s, i) => (
          <div className={`slide ${slide === i ? "on" : ""}`} key={s.tag} aria-hidden={slide !== i}>
            <div className="bg" style={{ backgroundImage: `url('${s.img}')` }} />
            <div className="dim" />
            <div className="container">
              <p className="tag">{s.tag}</p>
              <h2>{s.title[0]}<br />{s.title[1]}</h2>
              <p className="hdesc">{s.desc}</p>
              <div className="hbtns">
                <Link href="/checkup/comprehensive" className="primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" /><path d="M3 9h18M8 2.5v4M16 2.5v4M8.5 14l2 2 4-4" /></svg>
                  종합검진 안내
                </Link>
                <a href="tel:042-274-9885" className="ghost">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 5c0 9 6 15 15 15l1.5-3.5-4-1.6-1.4 1.4a11 11 0 0 1-5.4-5.4l1.4-1.4-1.6-4L5 5Z" /></svg>
                  042-274-9885
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="ctrl">
          <div className="container">
            <div className="dots" role="tablist" aria-label="비주얼 슬라이드 선택">
              {SLIDES.map((s, i) => (
                <button key={s.tag} className={slide === i ? "on" : ""} aria-label={`${i + 1}번 슬라이드`} onClick={() => setSlide(i)} />
              ))}
            </div>
            <span className="count">{String(slide + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>
        <span className="scrolldown" aria-hidden>SCROLL</span>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">
          <p className="sec-label" data-mo>Mission</p>
          <h2 className="sec-title" data-mo>우리는 정확한 진단이<br /><strong>가장 따뜻한 진료</strong>의 시작이라 믿습니다</h2>
          <p className="sec-desc" data-mo>
            성모영상의학과는 첨단 영상장비와 숙련된 전문의의 진단으로<br className="pc" />
            질환을 조기에 발견하고, 검진 이후의 삶까지 함께 살핍니다.
          </p>
          <div className="line" data-mo aria-hidden />
        </div>
      </section>

      {/* Sungmo Care — 4대 진료 카드 */}
      <section className="care">
        <div className="container">
          <div className="head">
            <div>
              <p className="sec-label" data-mo>Sungmo Care</p>
              <h2 className="sec-title" data-mo>진단부터 검진까지,<br />함께 만드는 건강</h2>
            </div>
          </div>
          <div className="grid">
            {CARES.map((c, i) => (
              <Link href={c.href} className="card" key={c.tit} data-mo style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="thumb" style={{ backgroundImage: `url('${c.img}')` }} />
                <div className="body">
                  <p className="eng">{c.eng}</p>
                  <p className="tit">{c.tit}</p>
                  <p className="txt">{c.txt}</p>
                  <span className="more">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Departments */}
      <section className="dept">
        <div className="container">
          <div className="top">
            <div>
              <p className="sec-label" data-mo>Medical Departments</p>
              <h2 className="sec-title" data-mo>정확성과 안전성을<br />기반으로 한 진료과목</h2>
            </div>
            <p className="sec-desc" data-mo="right">
              내과 진료와 영상 진단, 내시경검사까지 —
              과 사이의 벽 없이 유기적으로 연결된 진료를 제공합니다.
              궁금한 항목을 선택해 자세한 안내를 확인하세요.
            </p>
          </div>
          <ol data-mo>
            {DEPTS.map((d) => (
              <li key={d.no}>
                <Link href={d.href}>
                  <span className="no">{d.no}</span>
                  <span className="name">{d.name}</span>
                  <span className="sub">{d.sub}</span>
                  <span className="arrow" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 검진 프로그램 */}
      <section className="program">
        <div className="container">
          <div className="head">
            <p className="sec-label" data-mo>Checkup Program</p>
            <h2 className="sec-title" data-mo>나에게 맞는<br />맞춤 건강검진 프로그램</h2>
          </div>
          <div className="grid">
            {PROGRAMS.map((p, i) => (
              <Link href={p.href} className="item" key={p.tit} data-mo style={{ transitionDelay: `${i * 90}ms` }}>
                <p className="eng">{p.eng}</p>
                <p className="tit">{p.tit}</p>
                <p className="txt">{p.txt}</p>
                <span className="more">
                  프로그램 보기
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Directions · 진료안내 */}
      <section className="visit">
        <div className="container">
          <div className="wrap">
            <div>
              <p className="sec-label" data-mo>Directions</p>
              <h2 className="sec-title" data-mo>진료안내<br />· 오시는 길</h2>
              <a className="tel-big" href="tel:042-274-9885" data-mo>
                <span className="k">대표 · 검진예약</span>
                <span className="v">042-274-9885~7</span>
              </a>
              <div className="btns" data-mo>
                <Link href="/hospital/directions" className="fill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  오시는 길
                </Link>
                <Link href="/guide/precautions" className="lineb">검사 전 주의사항</Link>
              </div>
            </div>
            <div className="info" data-mo="right">
              <div className="row">
                <span className="k">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
                  진료시간
                </span>
                <span className="v"><b>평일</b> 08:30 – 17:30 · <b>토요일</b> 08:30 – 13:00<br /><b>점심시간</b> 12:00 – 13:30 · <span className="off">일요일·공휴일 휴진</span></span>
              </div>
              <div className="row">
                <span className="k">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  찾아오시는 곳
                </span>
                <span className="v">대전광역시 동구 보문로 4, 플러스크리닉 3층<br />(구 주소 · 대전 동구 효동 253-1)</span>
              </div>
              <div className="row">
                <span className="k">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 5c0 9 6 15 15 15l1.5-3.5-4-1.6-1.4 1.4a11 11 0 0 1-5.4-5.4l1.4-1.4-1.6-4L5 5Z" /></svg>
                  전화 · 팩스
                </span>
                <span className="v"><b>TEL</b> 042-274-9885~7 · <b>FAX</b> 042-274-9888</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
