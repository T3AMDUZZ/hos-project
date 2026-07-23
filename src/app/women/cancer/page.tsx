import PageBanner from "@/components/PageBanner";

export const metadata = { title: "여성암 | 성모영상의학과" };

const cancers = [
  {
    title: "유방암",
    anatomy: "유방 해부학적 모식도",
    description:
      "유방암은 한국 여성에게 가장 흔하게 발생하는 암 중 하나입니다. 유방의 유관과 소엽에서 발생하며, 조기에 발견해 치료하면 생존율이 매우 높습니다. 정기적인 유방촬영과 초음파 검사로 조기 발견이 가능합니다.",
    symptoms: [
      "유방에 만져지는 단단한 덩어리(멍울)",
      "유두에서 나오는 비정상 분비물 (특히 혈성)",
      "유방 피부의 함몰·발적·오렌지 껍질 모양 변화",
      "유두 함몰 또는 모양 변화",
      "겨드랑이 림프절이 만져지거나 부음",
    ],
    screening: [
      "유방 자가검진: 매월 1회 (생리 후 3~5일)",
      "유방촬영(맘모그래피): 만 40세 이상, 2년 주기",
      "유방 초음파: 치밀 유방 등 보완 검사",
    ],
  },
  {
    title: "난소암",
    anatomy: "난소 및 골반 구조",
    description:
      "난소암은 여성 생식기 암 중 사망률이 가장 높은 암으로, 초기에는 뚜렷한 증상이 없어 '침묵의 암'으로 불립니다. 조기 발견이 어렵기 때문에 정기적인 골반 초음파와 종양표지자 검사가 중요합니다.",
    symptoms: [
      "복부 팽만감과 더부룩함",
      "골반·하복부의 지속적인 통증 또는 압박감",
      "식욕 저하와 조기 포만감",
      "소화불량 및 잦은 소변",
      "원인을 알 수 없는 체중 감소 또는 증가",
    ],
    screening: [
      "골반(경질) 초음파: 난소 크기·모양·종괴 확인",
      "종양표지자 검사(CA-125): 혈액검사",
      "골반 진찰 및 필요 시 정밀 영상검사",
    ],
  },
  {
    title: "자궁암",
    anatomy: "자궁 및 자궁경부 구조",
    description:
      "자궁암은 자궁경부에 생기는 자궁경부암과 자궁 내막에 생기는 자궁내막암으로 나뉩니다. 특히 자궁경부암은 인유두종바이러스(HPV) 감염이 주요 원인으로, 정기 검진과 예방접종으로 예방이 가능하며 조기에 발견하면 완치율이 매우 높습니다.",
    symptoms: [
      "비정상적인 질 출혈 (성관계 후·폐경 후·생리 사이)",
      "악취가 나는 질 분비물 증가",
      "골반통 또는 하복부 통증",
      "성관계 시 통증",
    ],
    screening: [
      "자궁경부세포검사(Pap Smear): 만 20세 이상, 2년 주기",
      "HPV(인유두종바이러스) 검사: 세포검사와 병행",
      "질 초음파: 자궁내막 두께 및 이상 확인",
      "HPV 예방접종: 만 9~26세 권장",
    ],
  },
  {
    title: "갑상선암",
    anatomy: "갑상선 구조",
    description:
      "갑상선암은 여성에게 특히 많이 발생하는 암으로, 목 앞쪽의 갑상선에서 발생합니다. 대부분 예후가 좋고 성장 속도가 느리며, 초음파 검사를 통해 작은 결절도 조기에 발견할 수 있습니다.",
    symptoms: [
      "목 앞쪽에 만져지는 결절(혹)",
      "쉰 목소리 등 목소리 변화",
      "음식을 삼키기 어렵거나 이물감",
      "목(경부) 림프절이 만져지거나 부음",
    ],
    screening: [
      "갑상선 초음파: 결절 발견 및 정기검진",
      "갑상선기능검사(혈액): TSH, Free T4",
      "세침흡인세포검사: 의심 결절 확인",
    ],
  },
];

export default function WomenCancerPage() {
  return (
    <>
      <PageBanner
        title="여성암"
        breadcrumb={[
          { title: "여성클리닉", href: "/women/types" },
          { title: "여성암" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            여성에게 흔한 암과 조기 검진의 중요성
          </h2>
          <p className="text-text-gray leading-relaxed">
            여성에게 많이 발생하는 유방암, 난소암, 자궁암, 갑상선암 네 가지에 대해 안내합니다.
            정기적인 검진을 통해 조기에 발견하면 치료 성공률이 매우 높습니다.
          </p>
        </div>

        <div className="space-y-16">
          {cancers.map((cancer, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h2 className="text-2xl font-bold text-text-dark">{cancer.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 해부학적 이미지 플레이스홀더 */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl aspect-[4/3] flex flex-col items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/30 mb-3"
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
                  <span className="text-sm text-primary/50 font-medium">
                    {cancer.anatomy}
                  </span>
                </div>

                {/* 설명 */}
                <div>
                  <p className="text-text-gray leading-relaxed mb-6">
                    {cancer.description}
                  </p>

                  <h3 className="font-bold text-text-dark mb-3">주요 증상</h3>
                  <ul className="space-y-2 mb-6">
                    {cancer.symptoms.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-sm text-text-gray">
                        <span className="text-primary mt-0.5">&#8226;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-bold text-text-dark mb-3">검진 방법</h3>
                  <ul className="space-y-2">
                    {cancer.screening.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-sm text-text-gray">
                        <span className="text-primary font-bold mt-0.5">{sIdx + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 rounded-xl p-6">
          <p className="text-sm text-text-dark">
            <strong>조기 검진이 가장 중요합니다.</strong> 증상이 없더라도 정기적인 검진을 받으시면
            암을 초기 단계에서 발견하여 치료 성공률을 크게 높일 수 있습니다.
            검진 예약 및 상담: 042-274-9885
          </p>
        </div>
      </div>
    </>
  );
}
