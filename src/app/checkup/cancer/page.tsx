import PageBanner from "@/components/PageBanner";

export const metadata = { title: "국가 5대암검진 | 성모영상의학과" };

const cancerScreenings = [
  {
    cancer: "위암",
    target: "만 40세 이상 남녀",
    cycle: "2년마다",
    method: "위내시경 (또는 위장조영검사)",
  },
  {
    cancer: "대장암",
    target: "만 50세 이상 남녀",
    cycle: "1년마다",
    method: "분변잠혈검사 → 양성 시 대장내시경",
  },
  {
    cancer: "간암",
    target: "만 40세 이상 고위험군",
    cycle: "6개월마다",
    method: "복부 초음파 + 혈액검사(AFP)",
  },
  {
    cancer: "유방암",
    target: "만 40세 이상 여성",
    cycle: "2년마다",
    method: "유방촬영(맘모그래피)",
  },
  {
    cancer: "자궁경부암",
    target: "만 20세 이상 여성",
    cycle: "2년마다",
    method: "자궁경부세포검사(Pap Smear)",
  },
];

export default function CancerScreeningPage() {
  return (
    <>
      <PageBanner
        title="국가 5대암검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "국가 5대암검진" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            국가에서 지원하는 5대 암검진 프로그램
          </h2>
          <p className="text-text-gray leading-relaxed">
            국가암검진은 암을 조기에 발견하여 치료율을 높이기 위해 정부에서 시행하는 검진
            프로그램입니다. 대상자에게는 무료 또는 본인부담금 10%로 검진을 받으실 수 있습니다.
          </p>
        </div>

        {/* 5대암 테이블 */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">암 종류</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">대상</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">검진주기</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">검사방법</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cancerScreenings.map((item, idx) => (
                <tr key={idx} className="hover:bg-bg-light/50">
                  <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm font-bold text-primary">{item.cancer}</td>
                  <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-text-dark">{item.target}</td>
                  <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-text-gray">{item.cycle}</td>
                  <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-text-gray">{item.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 카드 형태 요약 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">암종별 안내</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancerScreenings.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{idx + 1}</span>
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">{item.cancer}</h3>
              <ul className="space-y-1.5 text-sm text-text-gray">
                <li><strong className="text-text-dark">대상:</strong> {item.target}</li>
                <li><strong className="text-text-dark">주기:</strong> {item.cycle}</li>
                <li><strong className="text-text-dark">방법:</strong> {item.method}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-primary/10 rounded-xl p-6">
          <p className="text-sm text-text-dark">
            <strong>참고:</strong> 간암 고위험군은 B형/C형 간염 바이러스 보유자, 간경변증 환자 등이 해당됩니다.
            정확한 대상 여부는 국민건강보험공단(1577-1000)에서 확인하실 수 있습니다.
          </p>
        </div>
      </div>
    </>
  );
}
