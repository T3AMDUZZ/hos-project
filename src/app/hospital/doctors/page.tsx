import PageBanner from "@/components/PageBanner";

export const metadata = { title: "의료진소개 | 성모영상의학과" };

const doctors = [
  {
    name: "홍길동",
    role: "원장",
    specialty: "영상의학과 전문의",
    career: [
      "OO대학교 의과대학 졸업",
      "OO대학교병원 영상의학과 전공의",
      "영상의학과 전문의 취득",
      "대한영상의학회 정회원",
    ],
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageBanner
        title="의료진소개"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "의료진소개" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 aspect-[3/4] flex items-center justify-center">
                <div className="text-center text-primary/40">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-xs">프로필 사진</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-text-dark">
                    {doc.name}
                  </h3>
                  <span className="px-3 py-1 bg-primary text-white text-xs rounded-full font-semibold">
                    {doc.role}
                  </span>
                </div>
                <p className="text-primary font-semibold text-sm mb-4">
                  {doc.specialty}
                </p>
                <ul className="space-y-2">
                  {doc.career.map((item, cIdx) => (
                    <li
                      key={cIdx}
                      className="flex items-start gap-2 text-sm text-text-gray"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
