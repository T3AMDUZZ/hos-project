import PageBanner from "@/components/PageBanner";

export const metadata = { title: "국민건강보험공단 검진 | 성모영상의학과" };

const eligibility = [
  {
    type: "지역가입자",
    target: "세대주 및 만 20세 이상 세대원 중 짝수년도 출생자",
    cycle: "2년에 1회",
  },
  {
    type: "직장가입자",
    target: "비사무직 전체, 사무직 중 짝수년도 출생자",
    cycle: "비사무직 매년 / 사무직 2년에 1회",
  },
  {
    type: "직장 피부양자",
    target: "만 20세 이상 짝수년도 출생자",
    cycle: "2년에 1회",
  },
  {
    type: "의료급여 수급권자",
    target: "만 19세~64세 세대주 중 짝수년도 출생자",
    cycle: "2년에 1회",
  },
];

const coveredItems = [
  { name: "문진 및 상담", desc: "건강위험평가, 생활습관평가" },
  { name: "신체계측", desc: "신장, 체중, 허리둘레, 체질량지수" },
  { name: "혈압측정", desc: "수축기/이완기 혈압" },
  { name: "시력·청력", desc: "시력, 청력 검사" },
  { name: "혈액검사", desc: "혈색소, 공복혈당, AST/ALT, 감마GTP, 혈청크레아티닌, e-GFR, 총콜레스테롤, HDL, LDL, 중성지방" },
  { name: "소변검사", desc: "요단백" },
  { name: "흉부 X선", desc: "폐결핵, 폐질환" },
  { name: "구강검진", desc: "구강질환 확인" },
];

export default function NationalCheckupPage() {
  return (
    <>
      <PageBanner
        title="국민건강보험공단 검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "국민건강보험공단 검진" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 소개 */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            국민건강보험공단에서 제공하는 건강검진
          </h2>
          <p className="text-text-gray leading-relaxed">
            국민건강보험공단은 국민의 건강 증진을 위해 일반건강검진을 실시하고 있습니다.
            대상자에게는 무료로 기본적인 건강검진을 받으실 수 있으며,
            질환의 조기 발견과 예방에 큰 도움이 됩니다.
          </p>
        </div>

        {/* 대상자 안내 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">검진 대상자</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto mb-12">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-6 py-3 text-sm font-semibold">구분</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">대상</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">검진주기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {eligibility.map((item, idx) => (
                <tr key={idx} className="hover:bg-bg-light/50">
                  <td className="px-6 py-3 text-sm font-medium text-primary">{item.type}</td>
                  <td className="px-6 py-3 text-sm text-text-gray">{item.target}</td>
                  <td className="px-6 py-3 text-sm text-text-gray">{item.cycle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 검진 항목 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">일반건강검진 항목</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {coveredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-text-dark mb-1">{item.name}</h3>
              <p className="text-sm text-text-gray">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 대상자 확인 방법 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">대상자 확인 방법</h2>
        <div className="bg-accent/10 rounded-xl p-6">
          <ul className="space-y-3 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">1.</span>
              <span>
                <strong>국민건강보험공단 홈페이지</strong>에서 로그인 후 건강검진 대상자 조회
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">2.</span>
              <span>
                <strong>The건강보험 앱</strong>에서 건강검진 대상 여부 확인
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">3.</span>
              <span>
                <strong>고객센터(1577-1000)</strong>에 전화하여 확인
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">4.</span>
              <span>
                본원에 <strong>신분증 지참 후 방문</strong>하시면 확인해 드립니다
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
