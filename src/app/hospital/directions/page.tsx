import PageBanner from "@/components/PageBanner";

export const metadata = { title: "오시는 길 | 성모영상의학과" };

export default function DirectionsPage() {
  return (
    <>
      <PageBanner
        title="오시는 길"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "오시는 길" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* 인트로 */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            LOCATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            찾아오시는 길
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
          <p className="text-text-gray mt-6 text-sm md:text-base">
            성모영상의학과의원 · 성모종합검진센터
          </p>
        </div>

        {/* 지도 */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-10">
          <iframe
            src="https://maps.google.com/maps?q=%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%8F%99%EA%B5%AC+%EB%B3%B4%EB%AC%B8%EB%A1%9C+4&t=m&z=16&output=embed&iwloc=near"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="성모영상의학과 위치"
          />
        </div>

        {/* 주소 + 지도 앱 연결 */}
        <div className="bg-gradient-to-br from-primary/10 via-bg-light to-primary/5 rounded-2xl p-8 md:p-10 mb-10 border border-primary/10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-primary font-semibold tracking-widest mb-1">ADDRESS</p>
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                대전광역시 동구 보문로 4 플러스크리닉 3층
              </h3>
              <p className="text-base text-text-gray">구 주소: 대전광역시 동구 효동 253-1</p>
            </div>
          </div>

          {/* 지도 앱 연결 버튼 */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://map.kakao.com/link/search/대전광역시 동구 보문로 4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FEE500] text-[#391B1B] text-base font-semibold rounded-lg hover:brightness-95 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.52 6.6-.2.74-.72 2.68-.82 3.1-.13.52.19.51.4.37.17-.11 2.62-1.78 3.69-2.5.7.1 1.42.15 2.16.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
              </svg>
              카카오맵
            </a>
            <a
              href="https://map.naver.com/p/search/대전광역시 동구 보문로 4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#03C75A] text-white text-base font-semibold rounded-lg hover:brightness-95 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845 7.376 0H0v24h7.727V11.156L16.624 24H24V0h-7.727z" />
              </svg>
              네이버맵
            </a>
            <a
              href="https://maps.google.com/?q=대전광역시 동구 보문로 4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-text-dark text-base font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              구글맵
            </a>
          </div>
        </div>

        {/* 정보 카드 그리드 */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* 연락처 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-dark">연락처</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-base text-text-gray">대표전화</span>
                <a
                  href="tel:042-274-9885"
                  className="text-xl md:text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  042-274-9885~7
                </a>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-base text-text-gray">팩스</span>
                <span className="text-base font-semibold text-text-dark">042-274-9888</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-base text-text-gray">이메일</span>
                <a
                  href="mailto:ekek7205@hanmail.net"
                  className="text-base font-semibold text-text-dark hover:text-primary transition-colors"
                >
                  ekek7205@hanmail.net
                </a>
              </div>
            </div>
          </div>

          {/* 진료시간 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-dark">진료시간</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-base font-semibold text-text-dark">평일</span>
                <span className="text-base text-text-dark font-medium">AM 08:30 ~ PM 17:30</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-base font-semibold text-text-dark">토요일</span>
                <span className="text-base text-text-dark font-medium">AM 08:30 ~ PM 13:00</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-base text-text-gray">점심시간</span>
                <span className="text-base text-text-gray">PM 12:00 ~ PM 13:30</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-base text-text-gray">일요일·공휴일</span>
                <span className="text-base font-semibold text-red-500">휴진</span>
              </div>
            </div>
          </div>
        </div>

        {/* 교통 안내 */}
        <div className="bg-bg-light rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-dark">교통 안내</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h4 className="font-bold text-text-dark text-base">지하철</h4>
              </div>
              <p className="text-base text-text-gray leading-relaxed">
                대전 지하철 1호선<br />
                <span className="text-text-dark font-semibold">대동역</span> 하차 후 도보
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2m-7 4l3-3m0 0l3 3m-3-3v9" />
                </svg>
                <h4 className="font-bold text-text-dark text-base">버스</h4>
              </div>
              <p className="text-base text-text-gray leading-relaxed">
                보문로 인근 버스 정류장<br />
                <span className="text-text-dark font-semibold">플러스크리닉</span> 인근 하차
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <h4 className="font-bold text-text-dark text-base">자가용</h4>
              </div>
              <p className="text-base text-text-gray leading-relaxed">
                <span className="text-text-dark font-semibold">주차 가능</span><br />
                건물 내 주차장 이용
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
