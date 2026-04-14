import PageBanner from "@/components/PageBanner";

export const metadata = { title: "종합검진 | 성모영상의학과" };

const checkupData = [
  {
    category: "기초검사",
    items: [
      { name: "신체계측", test: "신장, 체중, 체질량지수, 비만도", related: "비만" },
      { name: "시력검사", test: "시력측정기", related: "시력이상" },
      { name: "안압검사", test: "안압측정", related: "녹내장" },
      { name: "청력검사", test: "청력측정기", related: "난청" },
      { name: "혈압측정", test: "혈압계", related: "고혈압, 저혈압" },
      { name: "폐활량검사", test: "Spirometer", related: "폐기능 이상" },
      { name: "심전도검사", test: "흉부 6유도, 전극 부착", related: "부정맥, 심장질환" },
    ],
  },
  {
    category: "혈액검사",
    items: [
      { name: "일반혈액", test: "CBC", related: "빈혈, 혈액질환" },
      { name: "간기능", test: "AST, ALT, GGT, ALP", related: "간염, 간질환" },
      { name: "신장기능", test: "BUN, Creatinine", related: "신장질환" },
      { name: "당뇨", test: "공복혈당", related: "당뇨병" },
      { name: "지질검사", test: "총콜레스테롤, HDL, LDL, 중성지방", related: "고지혈증, 동맥경화" },
      { name: "통풍", test: "Uric Acid", related: "통풍" },
      { name: "췌장기능", test: "Amylase", related: "췌장질환" },
    ],
  },
  {
    category: "영상검사",
    items: [
      { name: "흉부 X선", test: "흉부 촬영", related: "폐질환, 심비대" },
      { name: "복부 초음파", test: "간, 담낭, 췌장, 신장, 비장", related: "복부장기 질환" },
      { name: "위장검사", test: "위내시경 또는 위장조영", related: "위염, 위궤양, 위암" },
    ],
  },
  {
    category: "소변검사",
    items: [
      { name: "요검사", test: "요당, 요단백, 잠혈 등", related: "신장질환, 요로감염" },
    ],
  },
];

export default function ComprehensivePage() {
  return (
    <>
      <PageBanner
        title="종합검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "종합검진" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 검진 유형 소개 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {["A형 (기본)", "B형 (정밀)", "C형 (프리미엄)"].map((type, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 text-center ${
                idx === 1
                  ? "bg-primary text-white"
                  : "bg-bg-light text-text-dark"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{type}</h3>
              <p
                className={`text-sm mb-4 ${
                  idx === 1 ? "text-white/80" : "text-text-gray"
                }`}
              >
                {idx === 0
                  ? "기본적인 건강상태 확인"
                  : idx === 1
                  ? "주요 장기 정밀 검사 포함"
                  : "CT, 대장내시경 등 최고급 검진"}
              </p>
              <p className="text-lg font-bold">비용: 별도 문의</p>
              <a
                href="tel:042-274-9885"
                className={`inline-block mt-4 px-6 py-2 rounded-lg font-semibold text-sm ${
                  idx === 1
                    ? "bg-primary-light text-white"
                    : "bg-primary text-white"
                }`}
              >
                예약 상담
              </a>
            </div>
          ))}
        </div>

        {/* 검사 항목 테이블 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">
          종합검진 검사 항목
        </h2>
        <div className="space-y-8">
          {checkupData.map((section, sIdx) => (
            <div key={sIdx}>
              <h3 className="text-lg font-bold text-primary mb-3">
                {section.category}
              </h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-bg-light">
                      <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                        검사항목
                      </th>
                      <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                        검사내용
                      </th>
                      <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                        관련질환
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {section.items.map((item, idx) => (
                      <tr key={idx} className="hover:bg-bg-light/50">
                        <td className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium text-text-dark">
                          {item.name}
                        </td>
                        <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-gray">
                          {item.test}
                        </td>
                        <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-gray">
                          {item.related}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
