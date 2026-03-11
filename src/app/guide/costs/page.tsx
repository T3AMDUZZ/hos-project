import PageBanner from "@/components/PageBanner";

export const metadata = { title: "검사비용안내 | 성모영상의학과" };

export default function CostsPage() {
  return (
    <>
      <PageBanner
        title="검사비용안내"
        breadcrumb={[
          { title: "이용안내", href: "/guide/costs" },
          { title: "검사비용안내" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-accent/10 rounded-xl p-6 mb-8">
          <p className="text-sm text-text-dark">
            <strong>안내:</strong> 아래 비용은 참고용이며, 검사 항목 및 상황에 따라 변동될 수 있습니다.
            정확한 비용은 전화(042-000-0000)로 문의해 주시기 바랍니다.
            건강보험 적용 여부에 따라 본인부담금이 달라질 수 있습니다.
          </p>
        </div>

        {/* 건강검진 비용 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">건강검진 비용</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-6 py-3 text-sm font-semibold">분류</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">항목</th>
                <th className="text-right px-6 py-3 text-sm font-semibold">비용</th>
                <th className="text-left px-6 py-3 text-sm font-semibold hidden md:table-cell">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["종합검진", "A형 (기본)", "별도 문의", "기초검사 + 혈액 + 영상"],
                ["종합검진", "B형 (정밀)", "별도 문의", "A형 + 추가 정밀검사"],
                ["종합검진", "C형 (프리미엄)", "별도 문의", "B형 + CT, 대장내시경 등"],
                ["국가검진", "일반건강검진", "무료", "대상자에 한함"],
                ["국가검진", "5대암검진", "무료~10%", "대상자에 한함"],
                ["채용검진", "일반 채용검진", "별도 문의", ""],
                ["채용검진", "공무원 채용검진", "별도 문의", ""],
                ["보건증", "건강진단결과서", "별도 문의", ""],
                ["학생검진", "학생 건강검진", "무료", "지정 기간 내"],
              ].map(([cat, item, cost, note], idx) => (
                <tr key={idx} className="hover:bg-bg-light">
                  <td className="px-6 py-3 text-sm font-medium text-primary">{cat}</td>
                  <td className="px-6 py-3 text-sm text-text-dark">{item}</td>
                  <td className="px-6 py-3 text-sm text-text-dark text-right font-medium">{cost}</td>
                  <td className="px-6 py-3 text-sm text-text-light hidden md:table-cell">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 개별 검사 비용 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">개별 검사 비용</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-6 py-3 text-sm font-semibold">분류</th>
                <th className="text-left px-6 py-3 text-sm font-semibold">항목</th>
                <th className="text-right px-6 py-3 text-sm font-semibold">비용</th>
                <th className="text-left px-6 py-3 text-sm font-semibold hidden md:table-cell">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["영상검사", "흉부 X선", "별도 문의", ""],
                ["영상검사", "복부 초음파", "별도 문의", ""],
                ["영상검사", "갑상선 초음파", "별도 문의", ""],
                ["영상검사", "유방 초음파", "별도 문의", ""],
                ["영상검사", "유방촬영", "별도 문의", ""],
                ["CT", "흉부 CT", "별도 문의", ""],
                ["CT", "복부 CT", "별도 문의", ""],
                ["CT", "뇌 CT", "별도 문의", ""],
                ["내시경", "위내시경 (비수면)", "별도 문의", ""],
                ["내시경", "위내시경 (수면)", "별도 문의", "수면비 별도"],
                ["내시경", "대장내시경 (비수면)", "별도 문의", ""],
                ["내시경", "대장내시경 (수면)", "별도 문의", "수면비 별도"],
                ["기능검사", "골밀도 검사", "별도 문의", ""],
                ["기능검사", "동맥경화 검사", "별도 문의", ""],
                ["기능검사", "심전도 검사", "별도 문의", ""],
                ["기능검사", "폐기능 검사", "별도 문의", ""],
              ].map(([cat, item, cost, note], idx) => (
                <tr key={idx} className="hover:bg-bg-light">
                  <td className="px-6 py-3 text-sm font-medium text-primary">{cat}</td>
                  <td className="px-6 py-3 text-sm text-text-dark">{item}</td>
                  <td className="px-6 py-3 text-sm text-text-dark text-right font-medium">{cost}</td>
                  <td className="px-6 py-3 text-sm text-text-light hidden md:table-cell">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-text-light">
          * 상기 비용은 참고용이며, 실제 비용은 진료 내용에 따라 달라질 수 있습니다.
          자세한 내용은 전화(042-000-0000)로 문의해 주시기 바랍니다.
        </p>
      </div>
    </>
  );
}
