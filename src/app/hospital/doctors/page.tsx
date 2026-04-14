import PageBanner from "@/components/PageBanner";

export const metadata = { title: "의료진 소개 | 성모영상의학과" };

const doctors = [
  {
    room: "제 1 진료실",
    name: "고은영",
    specialty: "내과 전문의",
    education: ["전남대학교 의과대학 졸업"],
    memberships: [
      "대한내과의학회 정회원",
      "대한내시경의학회 정회원",
      "대한검진의학회 정회원",
    ],
    fields: ["호흡기 질환", "간 및 위장관 질환"],
    color: "primary",
  },
  {
    room: "제 2 진료실",
    name: "제은경",
    specialty: "영상의학과 전문의",
    role: "원장",
    education: ["이화여자대학교 의과대학 졸업"],
    memberships: [
      "대한영상의학회 정회원",
      "대한갑상선학회 정회원",
      "대한유방영상의학회 정회원",
    ],
    fields: [
      "비뇨생식기 질환",
      "여성질환 및 유방질환",
      "초음파 검사 및 CT 영상 관리·판독",
    ],
    color: "primary",
  },
  {
    room: "출장검진",
    name: "신정순",
    specialty: "외과 전문의",
    education: ["전북대학교 의과대학 졸업"],
    memberships: [],
    fields: ["건강검진 상담 및 문진 전담"],
    color: "primary",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageBanner
        title="의료진 소개"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "의료진 소개" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* 인트로 */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            MEDICAL STAFF
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            전문성과 신뢰로 진료하는
            <br />
            <span className="text-primary">성모영상의학과 의료진</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* 의료진 카드 */}
        <div className="space-y-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* 프로필 영역 */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-bg-light p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-5 border-4 border-white">
                    <svg
                      className="w-16 h-16 text-primary/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3 tracking-wide">
                    {doc.room}
                  </span>
                  <h3 className="text-2xl font-bold text-text-dark flex items-center gap-2">
                    {doc.name}
                    {doc.role && (
                      <span className="text-xs bg-primary-dark text-white px-2 py-0.5 rounded">
                        {doc.role}
                      </span>
                    )}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {doc.specialty}
                  </p>
                </div>

                {/* 정보 영역 */}
                <div className="p-8 space-y-6">
                  {/* 학력 */}
                  {doc.education.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h4 className="text-sm font-bold text-text-dark tracking-wide">
                          학력
                        </h4>
                      </div>
                      <ul className="space-y-1.5 pl-3">
                        {doc.education.map((item, i) => (
                          <li key={i} className="text-sm text-text-gray">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 소속 학회 */}
                  {doc.memberships.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <h4 className="text-sm font-bold text-text-dark tracking-wide">
                          소속 학회
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-3">
                        {doc.memberships.map((item, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 bg-bg-light text-text-dark text-xs rounded-full border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 진료 분야 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-primary rounded-full" />
                      <h4 className="text-sm font-bold text-text-dark tracking-wide">
                        진료 분야
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-3">
                      {doc.fields.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-dark"
                        >
                          <svg
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내 */}
        <div className="mt-16 bg-bg-light rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">
            진료 예약 및 상담
          </h3>
          <p className="text-text-gray mb-6 text-sm leading-relaxed">
            영상의학과·내과 전문의의 협진 체계로
            <br className="md:hidden" />
            정확하고 빠른 진료를 제공합니다.
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
