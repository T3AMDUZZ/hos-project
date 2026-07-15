import PageBanner from "@/components/PageBanner";

export const metadata = { title: "예방접종 / 각종 혈액검사 | 성모영상의학과" };

const adultVaccines = [
  {
    title: "A형 · B형 · C형 간염 예방접종",
    desc: "간염 바이러스로부터 간을 보호하기 위한 필수 예방접종입니다. 항체 검사 후 미형성자 대상 시행합니다.",
  },
  {
    title: "독감(인플루엔자) 예방접종",
    desc: "매년 유행 시즌 전 접종 권장. 만 65세 이상 대전 동구 거주자는 지역 무료 접종이 가능합니다.",
    badge: "지역 무료 대상 운영",
  },
  {
    title: "국가 폐렴구균 예방접종",
    desc: "65세 이상 어르신을 대상으로 국가에서 지원하는 폐렴구균 예방접종을 시행합니다.",
    badge: "국가 지원",
  },
];

type ScheduleRow = {
  vaccine: string;
  schedule: { month: string; dose: string }[];
};

const infantSchedule: ScheduleRow[] = [
  {
    vaccine: "B형 간염",
    schedule: [
      { month: "0세", dose: "1차" },
      { month: "2개월", dose: "2차" },
      { month: "6개월", dose: "3차" },
    ],
  },
  {
    vaccine: "BCG (경피용)",
    schedule: [{ month: "4주 이내", dose: "1회" }],
  },
  {
    vaccine: "DPT + 소아마비",
    schedule: [
      { month: "2개월", dose: "1차" },
      { month: "4개월", dose: "2차" },
      { month: "6개월", dose: "3차" },
      { month: "15개월", dose: "추가" },
    ],
  },
  {
    vaccine: "세균성 뇌수막염",
    schedule: [
      { month: "2개월", dose: "1차" },
      { month: "4개월", dose: "2차" },
      { month: "6개월", dose: "3차" },
    ],
  },
  {
    vaccine: "MMR (홍역 · 볼거리 · 풍진)",
    schedule: [
      { month: "12~15개월", dose: "1차" },
      { month: "4~6세", dose: "2차" },
    ],
  },
  {
    vaccine: "수두",
    schedule: [{ month: "12~15개월", dose: "1회" }],
  },
  {
    vaccine: "일본뇌염",
    schedule: [
      { month: "12개월부터", dose: "기본 2~4주 간격 2회 + 1년 후 1회 추가" },
    ],
  },
  {
    vaccine: "A형 간염",
    schedule: [
      { month: "12개월", dose: "1차" },
      { month: "18개월 이후", dose: "추가" },
    ],
  },
];

const cancerMarkers = [
  { name: "AFP", target: "간암" },
  { name: "CEA", target: "대장암" },
  { name: "CA 19-9", target: "췌장암" },
  { name: "CA-125", target: "난소암" },
  { name: "PSA", target: "전립선암" },
];

const hormoneTests = [
  { name: "E2", desc: "에스트라디올 - 여성호르몬 수치" },
  { name: "E3", desc: "에스트리올 - 임신 및 폐경 지표" },
  { name: "LH", desc: "황체형성호르몬 - 생식기능 평가" },
];

export default function VaccinationPage() {
  return (
    <>
      <PageBanner
        title="예방접종 / 각종 혈액검사"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "예방접종 / 각종 혈액검사" },
        ]}
      />

      {/* 섹션 1: 예방접종 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">예방접종</h2>
          <p className="text-text-gray leading-relaxed">
            성인부터 영유아까지 다양한 예방접종을 안전하게 시행합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {adultVaccines.map((v, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-sm hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-dark mb-2">{v.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed mb-3">{v.desc}</p>
              {v.badge && (
                <span className="inline-block text-xs font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                  {v.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 2: 영유아 예방접종 일정 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">영유아 예방접종 일정</h2>
          <p className="text-text-gray leading-relaxed">
            월령에 따라 시기별 필수 예방접종을 안내해 드립니다. 정확한 일정은 접종 당일 의료진과 상담하세요.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 md:px-6 py-4 text-sm font-semibold w-1/3">예방접종</th>
                <th className="text-left px-4 md:px-6 py-4 text-sm font-semibold">접종 시기</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {infantSchedule.map((row, idx) => (
                <tr key={idx} className="hover:bg-bg-light">
                  <td className="px-4 md:px-6 py-4 text-sm font-semibold text-text-dark align-top">
                    {row.vaccine}
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {row.schedule.map((s, sIdx) => (
                        <div
                          key={sIdx}
                          className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-3 py-1.5"
                        >
                          <span className="text-xs font-bold text-primary">{s.month}</span>
                          <span className="text-xs text-text-gray">{s.dose}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-text-light">
          * 일본뇌염 추가 접종은 35개월까지 0.5ml, 36개월부터 1ml로 시행합니다.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 섹션 3: 각종 혈액검사 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">각종 혈액검사</h2>
          <p className="text-text-gray leading-relaxed">
            암 조기 발견을 위한 종양 표지자 검사와 여성 호르몬 검사를 시행합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 암 표지자 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-dark">암 표식자 검사</h3>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-5">
              혈액 내 특정 표식자 수치를 측정하여 각종 암의 가능성을 선별 검사합니다.
            </p>
            <ul className="space-y-2.5">
              {cancerMarkers.map((m, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-text-dark font-semibold">{m.target}</span>
                  <span className="text-xs text-primary font-mono font-bold bg-primary/5 px-3 py-1 rounded-full">
                    {m.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 폐경기 호르몬 */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-dark">폐경기 호르몬 검사</h3>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-5">
              폐경 전후 여성의 호르몬 변화를 확인하여 건강한 갱년기 관리를 돕습니다.
            </p>
            <ul className="space-y-3">
              {hormoneTests.map((h, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md font-mono shrink-0 mt-0.5">
                    {h.name}
                  </span>
                  <span className="text-sm text-text-gray leading-relaxed">{h.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
