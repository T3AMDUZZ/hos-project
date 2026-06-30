import PageBanner from "@/components/PageBanner";

export const metadata = { title: "검사비용안내 | 성모영상의학과" };

type Row = { name: string; code?: string; price: string; note?: string };

const ultrasound: Row[] = [
  { name: "상복부 초음파", code: "sono-ao", price: "60,000" },
  { name: "자궁 초음파 (UP)", code: "sono-po", price: "60,000" },
  { name: "갑상선 / 경부 초음파 (THS/UN)", code: "sono-to", price: "60,000" },
  { name: "유방 초음파 (BS)", code: "sono-bro", price: "60,000" },
  { name: "경부 연부조직 초음파", code: "sono-no", price: "60,000" },
  { name: "피부 연부조직 초음파", code: "sono-sko", price: "60,000" },
  { name: "전립선 초음파", code: "sono-pro", price: "80,000" },
  { name: "경동맥 초음파", code: "sono-co", price: "90,000" },
];

const functional: Row[] = [
  { name: "자율신경계 검사 (HRV · Deep Breathing)", code: "SA", price: "30,000", note: "자율신경계 및 심박변이도" },
  { name: "비만도 검사 (인바디)", code: "BFATM", price: "20,000", note: "체지방분석 · 근감소증" },
  { name: "성장판 검사", code: "GP-1", price: "50,000" },
];

const female: Row[] = [
  { name: "자궁암 세포진 검사 (PAP)", code: "PAP-1", price: "20,000" },
  { name: "자궁 확대경 검사", code: "PAP-22", price: "40,000" },
];

const brain: Row[] = [
  { name: "경동맥 검사", code: "sono-co", price: "90,000" },
  { name: "뇌졸중 검사", code: "CVT", price: "150,000", note: "경동맥 + 뇌 CT 촬영 포함" },
];

const vaccines: Row[] = [
  { name: "B형 간염 예방접종", code: "HBVA", price: "35,000" },
  { name: "A형 간염 예방접종", code: "HAV8", price: "80,000" },
  { name: "독감 예방접종", code: "INF", price: "매년 따로 고지", note: "무료 대상자는 지역 안내" },
  { name: "자궁경부백신 (SK 가다실)", code: "GDS18", price: "180,000" },
  { name: "파상풍 예방접종", code: "TD", price: "40,000" },
  { name: "폐렴구균 예방접종", code: "PPV", price: "120,000" },
  { name: "대상포진 예방접종", code: "dds18", price: "180,000" },
];

const admin: Row[] = [
  { name: "채용검진", code: "ADMC3", price: "30,000" },
  { name: "공무원 건강검진", code: "ADMC4", price: "40,000" },
  { name: "보건증 검사", code: "ADMC3", price: "30,000" },
  { name: "어린이 단체 건강검진", code: "CADMC", price: "30,000" },
];

const docs: Row[] = [
  { name: "일반 진단서", code: "gr", price: "20,000" },
  { name: "근로능력평가 진단서", code: "gr1", price: "10,000" },
  { name: "영문 진단서", code: "gr2", price: "20,000" },
  { name: "진료확인서", code: "a113", price: "3,000" },
  { name: "진료기록부 사본 (1~5매)", code: "a2", price: "1,000", note: "1매당" },
  { name: "진료기록부 사본 (6매 이상)", code: "a21", price: "100", note: "1매당" },
];

const etc: Row[] = [
  { name: "수면내시경 (수면비용)", code: "SLEEP", price: "35,000" },
  { name: "영상자료 CD (CT · 초음파)", code: "CD5", price: "5,000" },
];

type Section = { title: string; rows: Row[]; accent?: "primary" | "accent" };

const sections: Section[] = [
  { title: "초음파 검사", rows: ultrasound, accent: "primary" },
  { title: "기능 검사", rows: functional, accent: "primary" },
  { title: "여성 검사", rows: female, accent: "primary" },
  { title: "뇌혈관 검사", rows: brain, accent: "primary" },
  { title: "예방접종", rows: vaccines, accent: "accent" },
  { title: "검진 · 보건증", rows: admin, accent: "accent" },
  { title: "진단서 · 증명서", rows: docs, accent: "accent" },
  { title: "기타", rows: etc, accent: "accent" },
];

function CostTable({ section }: { section: Section }) {
  const headerBg = section.accent === "accent" ? "bg-accent" : "bg-primary";
  return (
    <div className="mb-10">
      <h3 className="text-lg font-bold text-text-dark mb-4">{section.title}</h3>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className={`${headerBg} text-white`}>
              <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold">항목</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold hidden sm:table-cell">코드</th>
              <th className="text-right px-4 md:px-6 py-3 text-xs md:text-sm font-semibold">가격 (원)</th>
              <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold hidden md:table-cell">비고</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {section.rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-bg-light transition-colors">
                <td className="px-4 md:px-6 py-3 text-sm text-text-dark font-medium">{row.name}</td>
                <td className="px-4 md:px-6 py-3 text-xs text-text-light font-mono hidden sm:table-cell">
                  {row.code ?? "-"}
                </td>
                <td className="px-4 md:px-6 py-3 text-sm text-text-dark text-right font-semibold tabular-nums">
                  {row.price}
                </td>
                <td className="px-4 md:px-6 py-3 text-xs text-text-gray hidden md:table-cell">
                  {row.note ?? ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text-dark mb-3">비급여 항목 및 수가</h2>
          <p className="text-text-gray leading-relaxed">
            의료법 제45조에 의거하여 성모영상의학과의 비급여 진료비용을 공개합니다.
            아래 가격은 <strong className="text-text-dark">2024년 1월 기준</strong>이며, 사정에 따라 변동될 수 있습니다.
          </p>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-sm text-text-gray leading-relaxed">
            <p className="mb-1">
              건강보험 적용 여부 및 검사 내용에 따라 실제 본인부담금이 달라질 수 있습니다.
            </p>
            <p>
              정확한 비용은 <strong className="text-primary">042-274-9885~7</strong>로 문의해 주시기 바랍니다.
            </p>
          </div>
        </div>

        {sections.map((section, idx) => (
          <CostTable key={idx} section={section} />
        ))}

        <p className="mt-4 text-xs text-text-light leading-relaxed">
          * 상기 비용은 2024년 1월 기준이며, 진료 내용에 따라 달라질 수 있습니다.
          종합건강검진 비용은 검진 종류에 따라 별도이며, 상세 내역은 병원으로 문의해 주시기 바랍니다.
        </p>
      </div>
    </>
  );
}
