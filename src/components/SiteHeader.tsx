"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* 성모영상의학과 공용 헤더 (참고 프레임) — 유틸바 + GNB 메가메뉴 + 모바일 드로어
   스타일은 src/app/frame.css (.smx 스코프) */

export const MENUS = [
  {
    title: "병원안내",
    slogan: "SUNGMO RADIOLOGY",
    lead: "믿을 수 있는 진단,\n가까이에서",
    desc: "성모영상의학과의 인사말과 연혁, 의료진을 한 곳에서 확인하세요.",
    sub: [
      { title: "인사말", href: "/hospital/greeting" },
      { title: "연혁", href: "/hospital/history" },
      { title: "병원소개", href: "/hospital/facility" },
      { title: "의료진소개", href: "/hospital/doctors" },
      { title: "병원둘러보기", href: "/hospital/gallery" },
      { title: "오시는길", href: "/hospital/directions" },
    ],
  },
  {
    title: "진료안내",
    slogan: "PRECISE CARE",
    lead: "정밀한 진단,\n따뜻한 진료",
    desc: "내과·영상의학과·내시경 등 전문 진료 항목을 안내합니다.",
    sub: [
      { title: "내과", href: "/medical/internal" },
      { title: "영상의학과", href: "/medical/radiology" },
      { title: "내시경검사", href: "/medical/endoscopy" },
      { title: "예방접종/혈액검사", href: "/medical/vaccination" },
      { title: "비급여항목안내", href: "/medical/non-covered" },
    ],
  },
  {
    title: "건강검진",
    slogan: "HEALTH CHECKUP",
    lead: "나에게 맞는\n맞춤 건강검진",
    desc: "종합검진부터 국가검진·6대암검진까지 폭넓게 시행합니다.",
    sub: [
      { title: "종합검진", href: "/checkup/comprehensive" },
      { title: "국민건강보험공단 검진", href: "/checkup/national" },
      { title: "국가 6대암검진", href: "/checkup/cancer" },
      { title: "채용검진 및 보건증", href: "/checkup/employment" },
      { title: "학생검진", href: "/checkup/student" },
    ],
  },
  {
    title: "여성클리닉",
    slogan: "WOMEN'S CARE",
    lead: "여성을 위한\n세심한 검진",
    desc: "여성건강검진과 여성암 검사를 전문적으로 진행합니다.",
    sub: [
      { title: "여성건강검진종류", href: "/women/types" },
      { title: "기타선택검사", href: "/women/optional" },
      { title: "여성암", href: "/women/cancer" },
    ],
  },
  {
    title: "이용안내",
    slogan: "GUIDE",
    lead: "검사 이용이\n한결 편안하게",
    desc: "검사 비용과 장비, 검사 전 주의사항을 단계별로 안내합니다.",
    sub: [
      { title: "검사비용안내", href: "/guide/costs" },
      { title: "검사장비소개", href: "/guide/equipment" },
      { title: "검사 전 주의사항", href: "/guide/precautions" },
    ],
  },
  {
    title: "커뮤니티",
    slogan: "WITH YOU",
    lead: "건강한 소식을\n함께 나눕니다",
    desc: "공지사항과 건강상식을 전해드립니다.",
    sub: [
      { title: "공지사항", href: "/community/notice" },
      { title: "건강상식", href: "/community/health" },
    ],
  },
];

export default function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setDrawerOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="smx">
      <nav className="skip"><a href="#main">본문 바로가기</a></nav>

      {/* 유틸 바 */}
      <div className="utilbar">
        <div className="container">
          <a href="tel:042-274-9885">진료예약</a>
          <Link href="/hospital/directions">오시는 길</Link>
          <Link href="/community/notice">공지사항</Link>
        </div>
      </div>

      {/* 헤더 / GNB */}
      <header className="header">
        <div className="container gnb-row">
          <Link href="/" className="logo" aria-label="성모영상의학과 홈">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-v2.png" alt="성모영상의학과 로고" />
            <span className="txt"><b>성모영상의학과</b><span>SUNGMO RADIOLOGY CLINIC</span></span>
          </Link>

          <nav className="gnb" aria-label="주메뉴">
            <ul>
              {MENUS.map((menu) => (
                <li key={menu.title}>
                  <Link href={menu.sub[0].href}>{menu.title}</Link>
                  <div className="mega"><div className="container inner">
                    <div className="lead">
                      <p className="slogan">{menu.slogan}</p>
                      <h3>{menu.lead.split("\n").map((l, i) => (<span key={i}>{l}{i === 0 && <br />}</span>))}</h3>
                      <p>{menu.desc}</p>
                    </div>
                    <div className="links">
                      {menu.sub.map((s) => (<Link key={s.href} href={s.href}>{s.title}</Link>))}
                    </div>
                  </div></div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-tools">
            <a href="tel:042-274-9885" className="btn-reserve">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" /><path d="M3 9h18M8 2.5v4M16 2.5v4M8.5 14l2 2 4-4" /></svg>
              <span>검진예약</span>
            </a>
            <button className="hamb" aria-label="전체 메뉴 열기" onClick={() => setDrawerOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 */}
      {drawerOpen && <div className="drawer-scrim" onClick={closeDrawer} />}
      {drawerOpen && (
        <aside className="drawer" role="dialog" aria-label="전체 메뉴">
          <div className="drawer-head">
            <b>전체 메뉴</b>
            <button aria-label="메뉴 닫기" onClick={closeDrawer}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <nav aria-label="모바일 주메뉴">
            {MENUS.map((menu, i) => (
              <div className="dgroup" key={menu.title}>
                <button className={`dgroup-t ${openGroup === i ? "on" : ""}`} onClick={() => setOpenGroup(openGroup === i ? null : i)}>
                  {menu.title}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {openGroup === i && (
                  <div className="dsub">
                    {menu.sub.map((s) => (<Link key={s.href} href={s.href} onClick={closeDrawer}>{s.title}</Link>))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="drawer-tel">
            <span className="k">대표 · 검진예약</span>
            <a className="v" href="tel:042-274-9885">042-274-9885~7</a>
          </div>
        </aside>
      )}
    </div>
  );
}
