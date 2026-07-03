"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* 성모영상의학과 공용 푸터 + TOP 버튼 (참고 프레임)
   스타일은 src/app/frame.css (.smx 스코프) */

export default function SiteFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="smx">
      <footer className="footer">
        <div className="footmain">
          <div className="container">
            <div className="top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="flogo"><img src="/images/logo-v2.png" alt="성모영상의학과" /><b>성모영상의학과</b></div>
              <nav className="flinks" aria-label="푸터 메뉴">
                <Link href="/hospital/greeting" className="strong">병원소개</Link><Link href="/medical/internal">진료안내</Link><Link href="/checkup/comprehensive">건강검진</Link><Link href="/women/types">여성클리닉</Link><Link href="/hospital/directions">오시는 길</Link>
              </nav>
            </div>
            <address>대전광역시 동구 보문로 4 플러스크리닉 3층<span className="sp">|</span>대표전화 042-274-9885~7<br />FAX 042-274-9888<span className="sp">|</span>진료시간 평일 08:30~17:30 · 토 08:30~13:00 (일·공휴일 휴진)</address>
            <p className="copy">© 2026 SUNGMO RADIOLOGY CLINIC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showTop && (
        <div className="floating">
          <button className="btn-top" aria-label="맨 위로" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="m6 15 6-6 6 6" /></svg>TOP
          </button>
        </div>
      )}
    </div>
  );
}
