import PageBanner from "@/components/PageBanner";

export const metadata = { title: "기타선택검사 | 성모영상의학과" };

const optionalTests = [
  {
    category: "혈액검사",
    items: [
      { name: "여성호르몬 검사", desc: "에스트로겐, 프로게스테론 등 호르몬 수치 확인" },
      { name: "갑상선기능검사", desc: "TSH, Free T4 검사로 갑상선 기능 이상 확인" },
      { name: "빈혈 정밀검사", desc: "철분, 페리틴, TIBC 등 빈혈 원인 분석" },
      { name: "류마티스 인자", desc: "류마티스 관절염 관련 혈액검사" },
      { name: "비타민D 검사", desc: "비타민D 결핍 여부 확인" },
    ],
  },
  {
    category: "영상검사",
    items: [
      { name: "경동맥 초음파", desc: "경동맥 혈관 상태 확인, 동맥경화 평가" },
      { name: "심장 초음파", desc: "심장 구조와 기능 평가" },
      { name: "복부 CT", desc: "복부 장기 정밀 검사" },
      { name: "흉부 CT (저선량)", desc: "폐암 조기 발견을 위한 저선량 CT" },
    ],
  },
  {
    category: "기능검사",
    items: [
      { name: "동맥경화 검사", desc: "혈관 탄성도 및 동맥경화 정도 측정" },
      { name: "스트레스 검사", desc: "자율신경 균형 및 스트레스 수치 측정" },
      { name: "체성분 분석", desc: "체지방률, 근육량, 체수분 등 분석" },
    ],
  },
  {
    category: "암표지자 검사",
    items: [
      { name: "CA-125", desc: "난소암 관련 종양표지자" },
      { name: "CA 15-3", desc: "유방암 관련 종양표지자" },
      { name: "CEA", desc: "대장암 등 소화기암 관련 종양표지자" },
      { name: "AFP", desc: "간암 관련 종양표지자" },
    ],
  },
];

export default function WomenOptionalPage() {
  return (
    <>
      <PageBanner
        title="기타선택검사"
        breadcrumb={[
          { title: "여성클리닉", href: "/women/types" },
          { title: "기타선택검사" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            기본 검진 외 선택 가능한 추가 검사
          </h2>
          <p className="text-text-gray leading-relaxed">
            기본 여성 건강검진 외에 개인의 건강 상태와 필요에 따라 선택하실 수 있는
            추가 검사 항목입니다. 전문의 상담 후 본인에게 적합한 검사를 선택하시기 바랍니다.
          </p>
        </div>

        <div className="space-y-8">
          {optionalTests.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 className="text-lg font-bold text-primary mb-3">{section.category}</h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg-light">
                      <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                        검사항목
                      </th>
                      <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                        설명
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {section.items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-bg-light/50">
                        <td className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium text-text-dark">
                          {item.name}
                        </td>
                        <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-gray">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-text-light">
          * 선택검사 비용은 항목에 따라 다르며, 자세한 내용은 전화(042-000-0000)로 문의해 주시기 바랍니다.
        </p>
      </div>
    </>
  );
}
