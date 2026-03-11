import PageBanner from "@/components/PageBanner";

export const metadata = { title: "여성건강검진종류 | 성모영상의학과" };

const checkupTypes = [
  {
    title: "유방촬영 (맘모그래피)",
    desc: "디지털 유방촬영장치를 이용하여 유방의 미세석회화, 종괴 등을 확인하는 검사입니다. 유방암 조기 발견에 가장 기본적인 검사로, 만 40세 이상 여성에게 권장됩니다.",
    target: "만 40세 이상 여성 (2년 주기)",
  },
  {
    title: "유방 초음파",
    desc: "초음파를 이용하여 유방 조직을 실시간으로 관찰하는 검사입니다. 유방이 치밀한 젊은 여성이나 맘모그래피 보완 검사로 시행합니다.",
    target: "치밀 유방 여성, 유방촬영 보완 필요 시",
  },
  {
    title: "자궁경부암검사 (Pap Smear)",
    desc: "자궁경부의 세포를 채취하여 암세포 유무를 확인하는 검사입니다. 자궁경부암의 조기 발견을 위해 만 20세 이상 여성에게 권장됩니다.",
    target: "만 20세 이상 여성 (2년 주기)",
  },
  {
    title: "자궁 초음파",
    desc: "초음파를 이용하여 자궁과 난소의 상태를 확인하는 검사입니다. 자궁근종, 난소낭종, 자궁내막 이상 등을 진단할 수 있습니다.",
    target: "복부 불편감, 생리불순, 정기검진 여성",
  },
  {
    title: "골밀도검사 (DEXA)",
    desc: "뼈의 밀도를 측정하여 골다공증을 진단하는 검사입니다. 폐경 후 여성은 골밀도가 급격히 감소하므로 정기적인 검사가 중요합니다.",
    target: "폐경 후 여성, 만 65세 이상 여성",
  },
  {
    title: "갑상선 초음파",
    desc: "갑상선의 결절, 낭종, 크기 변화 등을 초음파로 확인하는 검사입니다. 여성에게 갑상선 질환이 많아 정기적인 검사를 권장합니다.",
    target: "갑상선 이상 의심 시, 정기검진",
  },
];

export default function WomenTypesPage() {
  return (
    <>
      <PageBanner
        title="여성건강검진종류"
        breadcrumb={[
          { title: "여성클리닉", href: "/women/types" },
          { title: "여성건강검진종류" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            여성을 위한 맞춤 건강검진
          </h2>
          <p className="text-text-gray leading-relaxed">
            여성은 연령대별로 특별히 관리해야 할 건강 항목이 다릅니다.
            성모영상의학과에서는 여성 전문 검진 프로그램을 통해 유방, 자궁, 골밀도 등
            여성에게 중요한 건강 항목을 꼼꼼하게 확인합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {checkupTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-text-gray leading-relaxed mb-3">{item.desc}</p>
                  <div className="inline-block bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    대상: {item.target}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 rounded-xl p-6">
          <p className="text-sm text-text-dark">
            <strong>안내:</strong> 여성 건강검진은 예약 후 방문하시면 보다 편리하게 검진받으실 수 있습니다.
            검진 관련 문의는 전화(042-000-0000)로 연락해 주시기 바랍니다.
          </p>
        </div>
      </div>
    </>
  );
}
