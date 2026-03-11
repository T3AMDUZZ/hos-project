import PageBanner from "@/components/PageBanner";

export const metadata = { title: "병원소개 | 성모영상의학과" };

export default function FacilityPage() {
  return (
    <>
      <PageBanner
        title="병원소개"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "병원소개" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            최신 시설과 장비로 정확한 진단을 약속합니다
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            성모영상의학과는 환자분들의 편안한 진료를 위해 쾌적한 환경과
            최신 의료장비를 갖추고 있습니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "복도 전경",
            "내과 진료실",
            "기초검사실",
            "X선 촬영실",
            "CT 촬영실",
            "초음파 검사실",
            "내시경실",
            "유방촬영실",
            "심전도 검사실",
          ].map((room, idx) => (
            <div
              key={idx}
              className="bg-bg-light rounded-xl aspect-[4/3] flex items-center justify-center"
            >
              <div className="text-center text-text-light">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm font-medium">{room}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
