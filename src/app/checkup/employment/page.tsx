import PageBanner from "@/components/PageBanner";

export const metadata = { title: "채용검진 및 보건증 | 성모영상의학과" };

const employmentItems = [
  {
    title: "일반 채용검진",
    desc: "취업 및 채용 시 필요한 기본 건강검진입니다. 신체계측, 혈압, 시력, 흉부 X선, 혈액검사, 소변검사 등을 시행합니다.",
    docs: "신분증",
    time: "약 30분~1시간",
  },
  {
    title: "공무원 채용검진",
    desc: "공무원 채용 시 요구되는 건강검진으로, 일반 채용검진 항목에 추가 검사가 포함될 수 있습니다.",
    docs: "신분증, 채용검진 서식 (해당 시)",
    time: "약 1시간",
  },
  {
    title: "보건증 (건강진단결과서)",
    desc: "식품 관련 업종, 유흥업소 등 종사자에게 필요한 건강진단서입니다. 장티푸스, 전염성 피부질환 등을 검사합니다.",
    docs: "신분증, 반명함판 사진 1매",
    time: "약 20분 (결과: 3~5일 소요)",
  },
];

export default function EmploymentPage() {
  return (
    <>
      <PageBanner
        title="채용검진 및 보건증"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "채용검진 및 보건증" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            채용검진 및 보건증 발급 안내
          </h2>
          <p className="text-text-gray leading-relaxed">
            취업, 입사 시 필요한 채용건강검진과 식품업 등 종사에 필요한 보건증(건강진단결과서)을
            신속하게 발급해 드립니다. 예약 없이 방문하셔도 당일 검진이 가능합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {employmentItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed mb-4">{item.desc}</p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="font-semibold text-text-dark shrink-0">준비물:</span>
                  <span className="text-text-gray">{item.docs}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-text-dark shrink-0">소요시간:</span>
                  <span className="text-text-gray">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-xl p-6">
          <h3 className="font-bold text-text-dark mb-3">유의사항</h3>
          <ul className="space-y-2 text-sm text-text-dark">
            <li className="flex items-start gap-2">
              <span className="text-primary">&#8226;</span>
              <span>채용검진은 <strong>공복 상태(8시간 이상 금식)</strong>로 오시면 당일 검사가 가능합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">&#8226;</span>
              <span>보건증 결과는 검사 후 <strong>3~5일</strong> 소요되며, 직접 수령 또는 등기 발송이 가능합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">&#8226;</span>
              <span>검진 비용은 항목에 따라 다르므로 전화(042-000-0000)로 문의해 주시기 바랍니다.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
