import PageBanner from "@/components/PageBanner";

export const metadata = { title: "병원 둘러보기 | 성모영상의학과" };

const gallery = [
  {
    title: "접수대",
    category: "RECEPTION",
    desc: "친절한 직원이 맞이하는 안내 공간",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "대기실",
    category: "LOUNGE",
    desc: "쾌적하고 편안한 대기 공간",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "내시경실",
    category: "ENDOSCOPY",
    desc: "위·대장 내시경 검사 및 자궁암 검사실",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "X선 촬영실",
    category: "X-RAY",
    desc: "디지털 X선 촬영 장비 완비",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "위장투시 검사실",
    category: "FLUOROSCOPY",
    desc: "최신 투시촬영기로 정밀 진단",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "유방촬영실",
    category: "MAMMOGRAPHY",
    desc: "디지털 유방촬영 장치",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "전신단층촬영실",
    category: "CT",
    desc: "전신 컴퓨터 단층촬영 (TOSHIBA)",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "초음파 검사실",
    category: "ULTRASOUND",
    desc: "최신 초음파 장비 (LOGIQ S7 EXPERT)",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "수면 회복실",
    category: "RECOVERY",
    desc: "내시경 검사 후 편안한 회복 공간",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: "기초검사실",
    category: "BASIC",
    desc: "혈압·시력·청력·체성분 분석 (인바디)",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="병원 둘러보기"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "병원 둘러보기" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* 인트로 */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            GALLERY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            쾌적하고 전문적인
            <br />
            <span className="text-primary">진료 공간을 소개합니다</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
          <p className="text-text-gray mt-6 max-w-2xl mx-auto leading-relaxed">
            성모영상의학과는 환자분들의 편안한 검진을 위해
            <br className="hidden md:block" />
            각 검사실을 쾌적하고 전문적인 환경으로 구성했습니다.
          </p>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* 이미지 영역 (현재는 아이콘 + 그라디언트) */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/15 via-primary/5 to-bg-light overflow-hidden">
                {/* 번호 배지 */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-primary text-xs font-bold rounded-full shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 카테고리 */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-semibold text-primary/70 tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* 중앙 아이콘 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 text-primary/40 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* 하단 호버 오버레이 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* 정보 영역 */}
              <div className="p-5">
                <h3 className="font-bold text-text-dark text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내 */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-bg-light to-primary/10 rounded-2xl p-8 md:p-10 text-center border border-primary/10">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">
            병원 방문 상담
          </h3>
          <p className="text-text-gray mb-6 text-sm leading-relaxed">
            직접 방문하여 병원 시설을 둘러보고 싶으시다면
            <br className="md:hidden" />
            언제든지 편하게 문의해 주세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:042-274-9885"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              042-274-9885
            </a>
            <a
              href="/hospital/directions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              오시는 길
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
