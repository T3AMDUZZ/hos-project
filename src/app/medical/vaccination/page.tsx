import PageBanner from "@/components/PageBanner";

export const metadata = { title: "예방접종/혈액검사 | 성모영상의학과" };

export default function VaccinationPage() {
  return (
    <>
      <PageBanner
        title="예방접종/각종혈액검사"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "예방접종/혈액검사" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-text-dark mb-6">예방접종</h2>
            <div className="space-y-4">
              {[
                { name: "독감(인플루엔자)", desc: "매년 10~12월 접종 권장" },
                { name: "폐렴구균", desc: "65세 이상 성인 권장" },
                { name: "대상포진", desc: "50세 이상 성인 권장" },
                { name: "A형/B형 간염", desc: "항체 미형성자 대상" },
                { name: "파상풍", desc: "10년마다 추가 접종" },
              ].map((v, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-bg-light rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark">{v.name}</h3>
                    <p className="text-sm text-text-gray">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-dark mb-6">각종 혈액검사</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-3 text-sm font-semibold">검사항목</th>
                    <th className="text-left px-6 py-3 text-sm font-semibold">관련질환</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["일반혈액검사(CBC)", "빈혈, 감염, 혈액질환"],
                    ["간기능검사", "간염, 간경변, 지방간"],
                    ["신장기능검사", "신장질환, 요독증"],
                    ["당뇨검사", "당뇨병, 내당능장애"],
                    ["지질검사", "고지혈증, 동맥경화"],
                    ["갑상선기능검사", "갑상선 기능 이상"],
                    ["종양표지자검사", "각종 암 선별검사"],
                    ["염증표지자(CRP)", "감염, 염증성 질환"],
                  ].map(([test, disease], idx) => (
                    <tr key={idx} className="hover:bg-bg-light">
                      <td className="px-6 py-3 text-sm font-medium text-text-dark">{test}</td>
                      <td className="px-6 py-3 text-sm text-text-gray">{disease}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
