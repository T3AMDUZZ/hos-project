import PageBanner from "@/components/PageBanner";

export const metadata = { title: "출장검진 | 성모영상의학과" };

const features = [
  {
    title: "맞춤형 검진 설계",
    desc: "기업의 업종, 인원, 예산에 맞춘 맞춤형 건강검진 프로그램을 설계해 드립니다.",
  },
  {
    title: "전문 의료진 파견",
    desc: "영상의학과 전문의를 포함한 숙련된 의료팀이 직접 방문하여 검진을 시행합니다.",
  },
  {
    title: "최신 이동형 장비",
    desc: "이동형 X선 촬영기, 초음파, 심전도 등 최신 장비를 갖추고 방문합니다.",
  },
  {
    title: "신속한 결과 통보",
    desc: "검진 후 빠른 시일 내에 개인별 결과지를 회사로 발송해 드립니다.",
  },
];

const steps = [
  { step: "전화 상담", desc: "검진 인원, 희망 일정, 검진 항목 등을 상담합니다." },
  { step: "검진 설계", desc: "기업 맞춤형 검진 프로그램 및 비용을 안내합니다." },
  { step: "일정 확정", desc: "방문 일시와 장소를 확정합니다." },
  { step: "현장 검진", desc: "의료팀이 방문하여 검진을 시행합니다." },
  { step: "결과 통보", desc: "개인별 결과지를 발송합니다." },
];

export default function OnsiteCheckupPage() {
  return (
    <>
      <PageBanner
        title="출장검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "출장검진" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            기업 출장검진 서비스
          </h2>
          <p className="text-text-gray leading-relaxed">
            산업안전보건법에 따른 직장인 건강검진을 기업 현장에서 편리하게 받으실 수 있습니다.
            전문 의료진이 직접 방문하여 근로자들의 건강을 확인합니다.
          </p>
        </div>

        {/* 특장점 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 진행 절차 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">출장검진 진행 절차</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {steps.map((item, idx) => (
            <div key={idx} className="flex-1 relative">
              <div className="bg-bg-light rounded-xl p-6 text-center h-full">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-text-dark mb-1">{item.step}</h3>
                <p className="text-sm text-text-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-xl p-6 text-center">
          <p className="text-text-dark mb-3">
            출장검진에 대한 자세한 상담은 전화로 문의해 주시기 바랍니다.
          </p>
          <a
            href="tel:042-274-9885"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            042-274-9885 상담 전화
          </a>
        </div>
      </div>
    </>
  );
}
