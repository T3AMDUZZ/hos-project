import PageBanner from "@/components/PageBanner";

export const metadata = { title: "비급여항목안내 | 성모영상의학과" };

export default function NonCoveredPage() {
  return (
    <>
      <PageBanner
        title="비급여항목안내"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "비급여항목안내" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-primary/10 rounded-xl p-6 mb-8">
          <p className="text-sm text-text-dark">
            <strong>안내:</strong> 의료법 제45조에 의거하여 비급여 진료비용을
            공개합니다. 아래 비용은 2026년 2월 기준이며, 변동될 수 있습니다.
            정확한 비용은 병원으로 문의해 주시기 바랍니다.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">분류</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">항목</th>
                <th className="text-right px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">비용</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold hidden md:table-cell">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["초음파", "복부 초음파", "별도 문의", ""],
                ["초음파", "갑상선 초음파", "별도 문의", ""],
                ["초음파", "유방 초음파", "별도 문의", ""],
                ["초음파", "전립선 초음파", "별도 문의", ""],
                ["초음파", "심장 초음파", "별도 문의", ""],
                ["CT", "흉부 CT", "별도 문의", ""],
                ["CT", "복부 CT", "별도 문의", ""],
                ["내시경", "위내시경 (비수면)", "별도 문의", ""],
                ["내시경", "위내시경 (수면)", "별도 문의", "수면비 별도"],
                ["내시경", "대장내시경 (비수면)", "별도 문의", ""],
                ["내시경", "대장내시경 (수면)", "별도 문의", "수면비 별도"],
                ["검진", "종합검진 A형", "별도 문의", ""],
                ["검진", "종합검진 B형", "별도 문의", ""],
                ["검진", "종합검진 C형", "별도 문의", ""],
                ["기타", "골밀도 검사", "별도 문의", ""],
                ["기타", "동맥경화 검사", "별도 문의", ""],
                ["예방접종", "독감 예방접종", "별도 문의", "시즌별 변동"],
                ["예방접종", "폐렴 예방접종", "별도 문의", ""],
                ["증명서", "일반진단서", "별도 문의", ""],
                ["증명서", "영문진단서", "별도 문의", ""],
              ].map(([cat, item, cost, note], idx) => (
                <tr key={idx} className="hover:bg-bg-light">
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium text-primary">{cat}</td>
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-dark">{item}</td>
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-dark text-right font-medium">{cost}</td>
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-light hidden md:table-cell">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-text-light">
          * 상기 비용은 참고용이며, 실제 비용은 진료 내용에 따라 달라질 수 있습니다.
          자세한 내용은 전화(042-274-9885)로 문의해 주시기 바랍니다.
        </p>
      </div>
    </>
  );
}
