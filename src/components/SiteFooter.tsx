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
        <div className="fbg" aria-hidden />
        <div className="footmain">
          <div className="container">
            <div className="frow">
              {/* 좌측: 로고 + 바로가기 알약 버튼 */}
              <div className="fleft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="flogo"><img src="/images/logo-v2.png" alt="성모영상의학과" /><b>성모영상의학과</b></div>
                <div className="fpills">
                  <Link href="/hospital/directions">
                    오시는 길
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  </Link>
                  <Link href="/checkup/comprehensive">
                    종합검진 안내
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  </Link>
                </div>
              </div>

              {/* 우측: 진료시간 안내 + 사업자 정보 */}
              <div className="fright">
                <div className="finfo">
                  <h3>진료시간 안내</h3>
                  <div className="finfo-cols">
                    <div className="fdesc">
                      <p>평일 점심시간 12:00 ~ 13:30 에는 진료가 중단됩니다.</p>
                      <p>일요일 · 공휴일은 휴진입니다. (검진 예약 문의 042-274-9885~7)</p>
                    </div>
                    <div className="fhours">
                      <div className="h"><span className="k">평일 진료</span><span className="v">08:30 ~ 17:30</span></div>
                      <div className="h"><span className="k">토요일 진료</span><span className="v">08:30 ~ 13:00</span></div>
                      <div className="h"><span className="k">일·공휴일</span><span className="v off">휴진</span></div>
                    </div>
                  </div>
                  <div className="flegal">
                    <p className="l1">
                      <span className="privacy">개인정보처리방침</span>
                      <span className="sp">|</span>성모영상의학과
                      <span className="sp">|</span>대표전화 042-274-9885~7
                      <span className="sp">|</span>FAX 042-274-9888
                    </p>
                    <span className="addr">대전광역시 동구 보문로 4 플러스크리닉 3층 · 3F Plus Clinic, 4 Bomun-ro, Dong-gu, Daejeon, Republic of Korea<br />© 2026 SUNGMO RADIOLOGY CLINIC. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
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
