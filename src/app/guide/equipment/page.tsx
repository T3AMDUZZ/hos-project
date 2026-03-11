import PageBanner from "@/components/PageBanner";

export const metadata = { title: "검사장비소개 | 성모영상의학과" };

const equipments = [
  {
    title: "CT (컴퓨터 단층촬영)",
    desc: "인체의 횡단면을 촬영하여 3차원 영상으로 재구성하는 정밀 진단 장비입니다. 흉부, 복부, 뇌, 척추 등 다양한 부위의 질환을 정확하게 진단할 수 있습니다.",
  },
  {
    title: "초음파 진단장치",
    desc: "초음파를 이용하여 복부, 갑상선, 유방, 심장 등 체내 장기를 실시간으로 영상화하는 장비입니다. 방사선 피폭 없이 안전하게 검사할 수 있습니다.",
  },
  {
    title: "디지털 X선 촬영장치",
    desc: "흉부, 복부, 골격계 등의 기본적인 영상 검사를 시행하는 디지털 X선 장비입니다. 기존 아날로그 방식보다 적은 방사선량으로 선명한 영상을 얻을 수 있습니다.",
  },
  {
    title: "디지털 유방촬영기 (맘모그래피)",
    desc: "유방암 조기 발견을 위한 전용 X선 촬영 장비입니다. 디지털 방식으로 미세석회화와 작은 종괴까지 정밀하게 검출할 수 있습니다.",
  },
  {
    title: "내시경 장비",
    desc: "위내시경과 대장내시경을 시행하는 최신 전자내시경 장비입니다. 고화질 영상으로 소화기관 내부를 직접 관찰하며, 필요 시 조직검사도 동시에 가능합니다.",
  },
  {
    title: "심전도 검사기 (ECG)",
    desc: "심장의 전기적 활동을 기록하여 부정맥, 심근허혈, 심비대 등 심장 질환을 진단하는 장비입니다.",
  },
  {
    title: "폐활량측정기 (Spirometer)",
    desc: "폐의 환기 기능을 평가하는 장비로, 폐활량과 호기량을 측정하여 천식, COPD 등 폐기능 이상을 진단합니다.",
  },
  {
    title: "골밀도측정기 (DEXA)",
    desc: "이중에너지 X선 흡수법을 이용하여 뼈의 밀도를 정밀하게 측정하는 장비입니다. 골다공증 진단과 추적 관찰에 필수적입니다.",
  },
  {
    title: "스트레스측정기 (HRV)",
    desc: "심박변이도(HRV) 분석을 통해 자율신경계 균형 상태와 스트레스 수치를 측정하는 장비입니다.",
  },
  {
    title: "동맥경화측정기",
    desc: "사지의 혈압과 맥파를 동시에 측정하여 동맥의 탄성도와 혈관 나이를 평가하는 장비입니다. 동맥경화의 조기 발견에 도움을 줍니다.",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <PageBanner
        title="검사장비소개"
        breadcrumb={[
          { title: "이용안내", href: "/guide/costs" },
          { title: "검사장비소개" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            최신 의료장비로 정확한 진단을 제공합니다
          </h2>
          <p className="text-text-gray leading-relaxed">
            성모영상의학과는 정확한 진단과 편안한 검진을 위해 최신 의료장비를 갖추고 있습니다.
            영상의학과 전문의가 직접 검사하고 판독하여 신뢰할 수 있는 결과를 제공합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* 이미지 플레이스홀더 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 aspect-[4/3] flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary/30"
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
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
