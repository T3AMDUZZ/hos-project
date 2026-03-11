import PageBanner from "@/components/PageBanner";

export const metadata = { title: "영상의학과 | 성모영상의학과" };

const services = [
  {
    title: "일반 X선 촬영",
    desc: "흉부, 복부, 골격계 등의 기본적인 영상 검사를 디지털 X선 장비로 시행합니다.",
  },
  {
    title: "CT (컴퓨터 단층촬영)",
    desc: "인체의 단면을 촬영하여 정밀한 진단이 가능합니다. 흉부, 복부, 뇌, 척추 등 다양한 부위를 검사합니다.",
  },
  {
    title: "초음파 검사",
    desc: "복부, 갑상선, 유방, 전립선, 심장 등 다양한 장기를 실시간으로 확인합니다. 방사선 피폭 없이 안전하게 검사할 수 있습니다.",
  },
  {
    title: "유방촬영",
    desc: "디지털 유방촬영장치를 이용하여 유방암 조기 발견을 위한 정밀 검사를 시행합니다.",
  },
  {
    title: "위장조영검사",
    desc: "조영제를 이용하여 식도, 위, 십이지장의 형태와 기능을 확인하는 검사입니다.",
  },
  {
    title: "골밀도 검사",
    desc: "골다공증 진단을 위한 검사로, 뼈의 밀도를 정밀하게 측정합니다.",
  },
];

export default function RadiologyPage() {
  return (
    <>
      <PageBanner
        title="영상의학과"
        breadcrumb={[
          { title: "진료안내", href: "/medical/radiology" },
          { title: "영상의학과" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            영상의학 전문의가 직접 검사하고 판독합니다
          </h2>
          <p className="text-text-gray leading-relaxed">
            최신 영상진단 장비를 갖추고 정확하고 신속한 진단 결과를 제공합니다.
            영상의학과 전문의가 직접 검사에 참여하여 보다 정밀한 진단이 가능합니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-text-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
