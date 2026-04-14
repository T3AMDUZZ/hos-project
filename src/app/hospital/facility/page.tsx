import PageBanner from "@/components/PageBanner";

export const metadata = { title: "병원 소개 | 성모영상의학과" };

const highlights = [
  {
    title: "자체 검진 판독 및 임상병리실 자동화 운영",
    desc: "병원 내에서 검진 판독과 임상병리 업무를 자체 수행하여 정확하고 신속한 결과를 제공합니다.",
  },
  {
    title: "보험공단 직장검사 및 학생검진 출장버스 운영",
    desc: "성인병 출장검진버스 및 암검진버스를 자체 운영하여 현장까지 찾아가는 검진 서비스를 제공합니다.",
  },
];

const equipmentList = [
  "전신 컴퓨터 단층촬영 CT (TOSHIBA)",
  "최신 초음파 장비 (LOGIQ S7 EXPERT)",
  "임상병리실 자체운영 (HITACHI 등 최신 기종)",
  "각종 X-RAY 촬영 (DR 장비)",
  "암검진 장비 완비 (최신 투시촬영기 TOSHIBA)",
  "전자내시경 (올림푸스) 및 자동세척기 각 2대",
  "자율신경계 이상측정 (심장박동 변이도 및 심호흡 검사)",
  "체지방 및 근감소 분석 (인바디)",
];

const cooperation = [
  "영상의학과·내과 전문의 근무 — 검진 후 내과 진료 및 영상의학과 진료 가능",
  "검진 후 이상 소견 시 초음파 및 CT 자체 내 검사 및 판독 가능",
  "필요시 투약 및 일반 진료 가능 (당일 후송 조치 가능)",
  "대학병원(성모병원, 충남대 의과대학 등)과의 진료 협력체계 구축",
];

const certifications = [
  "보험공단 지정 병원",
  "20년 이상의 노하우를 가진 신뢰성 있는 검진 전문기관",
  "검진에 대한 철저한 관리 및 정확한 결과 처리 (결과 판정 5일 이내)",
];

const building = [
  "최신 설계에 의한 전문 병원 건물에 입주 (3층 전층 사용)",
  "엘리베이터 2대 운영 (승객용, 환자용)",
  "주차장 확보",
];

export default function FacilityPage() {
  return (
    <>
      <PageBanner
        title="병원 소개"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "병원 소개" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* 인트로 */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            20년 노하우의 신뢰,
            <br />
            <span className="text-primary">성모영상의학과 종합검진센터</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* 상단 2개 강점 - 큰 카드 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <span className="text-2xl font-bold">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 검진장비의 최신성 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-primary font-semibold tracking-widest">FACILITY 01</p>
              <h3 className="text-2xl font-bold text-text-dark">검진 장비의 최신성</h3>
            </div>
          </div>

          <div className="bg-bg-light rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {equipmentList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-dark leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 연합진료 체계 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-primary font-semibold tracking-widest">FACILITY 02</p>
              <h3 className="text-2xl font-bold text-text-dark">연합진료 체계 확립</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <ul className="space-y-4">
              {cooperation.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-text-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 국가 일반검진 및 암검진 전문병원 */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 text-white">
            <p className="text-xs font-semibold tracking-widest mb-2 opacity-90">
              FACILITY 03
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              국가 일반검진 및 암검진 전문병원
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/15 backdrop-blur rounded-xl p-5 border border-white/20"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <span className="font-bold text-sm">0{idx + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 병원 건물 */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-primary font-semibold tracking-widest">FACILITY 04</p>
              <h3 className="text-2xl font-bold text-text-dark">쾌적한 병원 건물</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {building.map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-light rounded-2xl p-6 border border-primary/10"
              >
                <div className="text-3xl font-bold text-primary/30 mb-2">
                  0{idx + 1}
                </div>
                <p className="text-sm text-text-dark leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 하단 CTA */}
        <div className="mt-16 bg-bg-light rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">
            검진 예약 및 상담
          </h3>
          <p className="text-text-gray mb-6 text-sm">
            20년 노하우의 성모영상의학과 종합검진센터에서 정확한 검진을 받아보세요.
          </p>
          <a
            href="tel:042-274-9885"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            042-274-9885
          </a>
        </div>
      </div>
    </>
  );
}
