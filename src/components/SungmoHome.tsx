/* 성모영상의학과 — 메인 홈 본문 (참고 프레임)
   헤더/푸터는 LayoutShell의 SiteHeader/SiteFooter 공용 사용
   스타일은 src/app/frame.css (.smx 스코프) */

import Link from "next/link";

export default function SungmoHome() {
  return (
    <div className="smx">
      {/* 메인 비주얼 */}
      <section className="visual">
        <div className="bg" />
        <div className="container">
          <p className="slogan">정밀한 진단, <br />따뜻한 진료</p>
          <p className="desc">첨단 영상장비와 전문의의 세심한 진료로, 성모영상의학과가 건강을 지킵니다.</p>
          <div className="vbtns">
            <Link href="/checkup/comprehensive" className="primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="16" /><path d="M3 9h18M8 2.5v4M16 2.5v4M8.5 14l2 2 4-4" /></svg>
              종합검진 안내
            </Link>
            <Link href="/hospital/directions" className="ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
              오시는 길
            </Link>
          </div>
        </div>
      </section>

      {/* 아이콘 바로가기 */}
      <section className="shortcut">
        <div className="container">
          <h2 className="sr-only">바로가기</h2>
          <ul>
            <li><Link href="/hospital/doctors"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><path d="M16 19a4 4 0 0 0-8 0" /><circle cx="12" cy="9" r="3.4" /><path d="M5.5 19a8 8 0 0 1 13 0" /></svg></span><b>의료진 소개</b></Link></li>
            <li><Link href="/medical/internal"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v14H4z" /><path d="M8 3v4M16 3v4M4 9h16M8 13h3M8 16h6" /></svg></span><b>진료 안내</b></Link></li>
            <li><Link href="/checkup/comprehensive"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6v3l-3 2-3-2V3Z" /><path d="M7 8c-2 1.5-3 4-3 7a8 8 0 0 0 16 0c0-3-1-5.5-3-7" /><path d="M12 13v3M10.5 14.5h3" /></svg></span><b>건강검진 안내</b></Link></li>
            <li><Link href="/guide/equipment"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="1" /><path d="M8 21h8M12 18v3M7 9l3 3 4-5 3 4" /></svg></span><b>검사장비 소개</b></Link></li>
            <li><Link href="/guide/costs"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h4.2a1.8 1.8 0 0 1 0 3.6H10a1.8 1.8 0 0 0 0 3.6h4.5" /></svg></span><b>검사비용 안내</b></Link></li>
            <li><Link href="/hospital/directions"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg></span><b>오시는 길</b></Link></li>
          </ul>
        </div>
      </section>

      {/* info 박스 + quick_link */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div><h2><span className="bar" />진료·검진 안내</h2><p>예약부터 검진·비용 안내까지 한 번에 이용하세요.</p></div>
          </div>

          <div className="info-list">
            <div className="box">
              <div className="tit"><span className="n">01</span>진료과 안내</div>
              <p className="desc">내과·영상의학과·내시경 등 전문 진료 항목과 의료진 정보를 확인하실 수 있습니다.</p>
              <div className="btns"><Link href="/medical/internal">진료안내</Link><Link href="/hospital/doctors">의료진</Link></div>
            </div>
            <div className="box">
              <div className="tit"><span className="n">02</span>예약·상담</div>
              <p className="desc">예약·상담 <strong>042-274-9885~7</strong><br />평일 08:30 ~ 17:30<br />검진 및 진료 절차를 안내합니다.</p>
              <div className="btns"><a href="tel:042-274-9885">전화상담</a><Link href="/hospital/directions">오시는길</Link></div>
            </div>
            <div className="box">
              <div className="tit"><span className="n">03</span>종합검진 예약</div>
              <p className="desc">A/B/C형 맞춤 종합검진을 전화·방문 상담으로 예약하실 수 있습니다.</p>
              <div className="btns"><Link href="/checkup/comprehensive" className="full">종합검진 바로가기</Link></div>
            </div>
            <div className="box">
              <div className="tit"><span className="n">04</span>여성클리닉</div>
              <p className="desc">여성건강검진과 여성암 검사를 세심하고 편안하게 진행합니다.</p>
              <div className="btns"><Link href="/women/types" className="full">여성클리닉 바로가기</Link></div>
            </div>
          </div>

          <div className="qlink">
            <Link href="/checkup/comprehensive"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V8l-4-5Z" /><path d="M14 3v5h4M8.5 13l1.5 1.5 3-3" /></svg></span><em>종합검진</em></Link>
            <Link href="/checkup/national"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z" /><path d="M9 12l2 2 4-4" /></svg></span><em>국가검진</em></Link>
            <Link href="/checkup/cancer"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9.2C.8 8.4 2.6 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.4 0 5.2 3.4 3.5 6.8C19 16.5 12 21 12 21Z" /></svg></span><em>5대암검진</em></Link>
            <Link href="/guide/costs"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h4.2a1.8 1.8 0 0 1 0 3.6H10a1.8 1.8 0 0 0 0 3.6h4.5" /></svg></span><em>검사비용</em></Link>
            <Link href="/guide/equipment"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="1" /><path d="M8 21h8M12 18v3M7 9l3 3 4-5 3 4" /></svg></span><em>검사장비</em></Link>
            <Link href="/medical/non-covered"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" /><path d="M8 9h8M8 13h8M8 17h5" /></svg></span><em>비급여안내</em></Link>
            <Link href="/community/notice"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M4 5c0 9 6 15 15 15l1.5-3.5-4-1.6-1.4 1.4a11 11 0 0 1-5.4-5.4l1.4-1.4-1.6-4L5 5Z" /></svg></span><em>공지사항</em></Link>
          </div>
        </div>
      </section>

      {/* 진료시간 · 연락처 */}
      <section className="section alt">
        <div className="container">
          <div className="sec-head">
            <div><h2><span className="bar" />진료시간 · 오시는 길</h2><p>편안한 진료를 위해 방문 전 확인해 주세요.</p></div>
          </div>
          <div className="info-2">
            <div className="aside-box">
              <div className="ab-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg><b>진료시간 안내</b></div>
              <div className="rows">
                <div className="row"><span className="d">평일</span><span className="t">08:30 – 17:30</span></div>
                <div className="row"><span className="d">토요일</span><span className="t">08:30 – 13:00</span></div>
                <div className="row"><span className="d">점심시간</span><span className="t">12:00 – 13:30</span></div>
                <div className="row"><span className="d">일요일 · 공휴일</span><span className="t off">휴진</span></div>
              </div>
              <div className="tel">
                <a href="tel:042-274-9885"><span className="k">대표 · 검진예약</span><span className="v">042-274-9885~7</span></a>
              </div>
            </div>

            <div className="aside-box">
              <div className="ab-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg><b>연락처 · 오시는 길</b></div>
              <div className="rows">
                <div className="row"><span className="d">대표전화</span><span className="t">042-274-9885~7</span></div>
                <div className="row"><span className="d">팩스</span><span className="t">042-274-9888</span></div>
                <div className="row"><span className="d">구 주소</span><span className="t">대전 동구 효동 253-1</span></div>
              </div>
              <div className="tel">
                <Link href="/hospital/directions"><span className="k">오시는 길</span><span className="v sm">대전광역시 동구 보문로 4<br />플러스크리닉 3층</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
