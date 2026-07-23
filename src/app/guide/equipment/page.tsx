import PageBanner from "@/components/PageBanner";

export const metadata = { title: "검사장비소개 | 성모영상의학과" };

type Equipment = {
  name: string;
  model: string;
  country: string;
  qty: string;
  purpose: string;
  category: "image" | "lab" | "support";
};

const equipments: Equipment[] = [
  {
    name: "컴퓨터 단층촬영기 (CT)",
    model: "SITEC 2000I (삼성 GE)",
    country: "KOREA",
    qty: "1대",
    purpose: "뇌, 골격, 내부장기를 단면상으로 세부 검사",
    category: "image",
  },
  {
    name: "초음파 진단기",
    model: "LOGIQ 7 EXPERT",
    country: "JAPAN",
    qty: "1대",
    purpose: "간 · 담낭 · 췌장 · 신장 · 이자 · 유방 · 전립선 · 갑상선 등 장기 검사",
    category: "image",
  },
  {
    name: "방사선 직접촬영 장치",
    model: "R-640-150 DXG 525R / R-500-125 (에스지헬스케어)",
    country: "KOREA",
    qty: "3대",
    purpose: "흉부, 복부, 골격계 기본 X선 영상 촬영",
    category: "image",
  },
  {
    name: "위장조영 촬영기",
    model: "RF-630-150 DOSHIBA",
    country: "JAPAN",
    qty: "1대",
    purpose: "식도 · 위 · 십이지장 · 소장 · 대장의 암, 궤양, 염증 등 병변 검사",
    category: "image",
  },
  {
    name: "유방촬영장치 (맘모그래피)",
    model: "MHR-100-39 / DMX-600",
    country: "KOREA",
    qty: "1대",
    purpose: "유방암 · 섬유종 · 유선 질환 진단",
    category: "image",
  },
  {
    name: "골밀도 측정기 (QCT)",
    model: "QCT",
    country: "KOREA",
    qty: "1대",
    purpose: "CT를 이용한 정량적 골다공증 · 골감소증 검사",
    category: "image",
  },
  {
    name: "내시경",
    model: "OLYMPUS",
    country: "JAPAN",
    qty: "2대",
    purpose: "소화기 계통의 암 · 궤양 · 염증 병변 검사",
    category: "image",
  },
  {
    name: "혈액화학 분석기",
    model: "Cobas C311 HITACHI",
    country: "JAPAN",
    qty: "1대",
    purpose: "혈액 생화학 검사",
    category: "lab",
  },
  {
    name: "혈액학 검사기",
    model: "celltac L",
    country: "JAPAN",
    qty: "1대",
    purpose: "혈색소, 헤마토크리트, 백혈구수, 적혈구수 측정",
    category: "lab",
  },
  {
    name: "뇨화학 자동분석기",
    model: "UROTRONRL9",
    country: "GERMANY",
    qty: "1대",
    purpose: "소변 화학 자동 분석",
    category: "lab",
  },
  {
    name: "자율신경계 검사기",
    model: "SA3000NE",
    country: "KOREA",
    qty: "1대",
    purpose: "심장 및 자율신경계 활동도 평가 (심박동 변이도)",
    category: "lab",
  },
  {
    name: "체지방 측정기 (인바디)",
    model: "인바디 9770",
    country: "KOREA",
    qty: "1대",
    purpose: "체지방 · 근감소증 분석",
    category: "lab",
  },
  {
    name: "고압 멸균기",
    model: "MEMMERT",
    country: "GERMANY",
    qty: "1대",
    purpose: "의료기구 멸균 및 건조",
    category: "support",
  },
  {
    name: "내시경 세척기",
    model: "HTW-01 (휴온스메디케어)",
    country: "KOREA",
    qty: "2대",
    purpose: "내시경 세척 및 멸균",
    category: "support",
  },
];

const cancerEquipment = [
  {
    exam: "위암",
    method: "위장조영 촬영",
    equipment: "위장조영 촬영기",
    model: "IR-500-125",
    country: "KOREA",
    bought: "2003",
    made: "2002",
  },
  {
    exam: "상부 소화관",
    method: "내시경 검사",
    equipment: "내시경",
    model: "OLYMPUS",
    country: "JAPAN",
    bought: "2003",
    made: "-",
  },
  {
    exam: "유방암",
    method: "유방 촬영",
    equipment: "유방촬영장치",
    model: "HF-47",
    country: "JAPAN",
    bought: "2003",
    made: "1997",
  },
  {
    exam: "초음파 영상",
    method: "진단",
    equipment: "초음파기",
    model: "LOGIQ 400CL",
    country: "KOREA",
    bought: "2003",
    made: "2002",
  },
];

const categoryConfig = {
  image: { label: "영상 · 진단 장비", color: "primary" },
  lab: { label: "검사 · 분석 장비", color: "accent" },
  support: { label: "지원 장비", color: "primary" },
} as const;

const countryFlag: Record<string, string> = {
  JAPAN: "🇯🇵",
  KOREA: "🇰🇷",
  GERMANY: "🇩🇪",
};

export default function EquipmentPage() {
  const groupedByCategory = (["image", "lab", "support"] as const).map((cat) => ({
    cat,
    items: equipments.filter((e) => e.category === cat),
  }));

  return (
    <>
      <PageBanner
        title="검사장비소개"
        breadcrumb={[
          { title: "이용안내", href: "/guide/costs" },
          { title: "검사장비소개" },
        ]}
      />

      {/* 인트로 */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            최신 의료 장비로 정확한 진단을 제공합니다
          </h2>
          <p className="text-text-gray leading-relaxed">
            성모영상의학과는 국내외 검증된 의료 장비를 도입하여 정확하고 신뢰할 수 있는
            진단 결과를 제공합니다. 영상의학과 전문의가 직접 장비를 운용하고 판독합니다.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          <div className="bg-white rounded-xl border border-gray-100 p-5 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{equipments.length}</div>
            <div className="text-xs text-text-gray">보유 장비 종류</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {equipments.reduce((sum, e) => sum + parseInt(e.qty), 0)}+
            </div>
            <div className="text-xs text-text-gray">총 장비 대수</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              {new Set(equipments.map((e) => e.country)).size}
            </div>
            <div className="text-xs text-text-gray">제조국</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 장비 카테고리별 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {groupedByCategory.map(({ cat, items }) => (
          <div key={cat} className="mb-14 last:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-1 h-7 rounded-full ${
                  categoryConfig[cat].color === "accent" ? "bg-accent" : "bg-primary"
                }`}
              />
              <h2 className="text-xl font-bold text-text-dark">{categoryConfig[cat].label}</h2>
              <span className="text-sm text-text-light">({items.length}종)</span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-bg-light border-b border-gray-100">
                    <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark">
                      장비명
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark hidden md:table-cell">
                      모델명
                    </th>
                    <th className="text-center px-3 py-3 text-xs md:text-sm font-semibold text-text-dark w-16">
                      수량
                    </th>
                    <th className="text-center px-3 py-3 text-xs md:text-sm font-semibold text-text-dark w-24">
                      제조국
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 text-xs md:text-sm font-semibold text-text-dark hidden lg:table-cell">
                      용도
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((eq, idx) => (
                    <tr key={idx} className="hover:bg-bg-light/50">
                      <td className="px-4 md:px-6 py-4">
                        <div className="font-semibold text-sm text-text-dark">{eq.name}</div>
                        <div className="md:hidden text-xs text-text-light mt-1 font-mono">{eq.model}</div>
                        <div className="lg:hidden text-xs text-text-gray mt-1.5">{eq.purpose}</div>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-text-gray font-mono hidden md:table-cell">
                        {eq.model}
                      </td>
                      <td className="px-3 py-4 text-sm text-text-dark text-center font-semibold">
                        {eq.qty}
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span className="inline-flex items-center gap-1 text-xs text-text-gray">
                          <span>{countryFlag[eq.country] ?? ""}</span>
                          <span>{eq.country}</span>
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 text-sm text-text-gray hidden lg:table-cell">
                        {eq.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* 특정암 검사 장비 */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-dark mb-3">특정암 검사 장비</h2>
          <p className="text-text-gray leading-relaxed">
            국가 6대암 검진에 사용되는 지정 장비 정보입니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-accent text-white">
                <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold">검사명</th>
                <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold">장비명</th>
                <th className="text-left px-4 md:px-6 py-3 text-sm font-semibold hidden md:table-cell">모델명</th>
                <th className="text-center px-3 py-3 text-sm font-semibold hidden md:table-cell">제조국</th>
                <th className="text-center px-3 py-3 text-sm font-semibold hidden lg:table-cell">구입/제조년도</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cancerEquipment.map((eq, idx) => (
                <tr key={idx} className="hover:bg-bg-light/50">
                  <td className="px-4 md:px-6 py-4">
                    <div className="font-semibold text-sm text-text-dark">{eq.exam}</div>
                    <div className="text-xs text-text-light mt-0.5">{eq.method}</div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-text-dark">
                    {eq.equipment}
                    <div className="md:hidden text-xs text-text-gray font-mono mt-1">{eq.model}</div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm text-text-gray font-mono hidden md:table-cell">
                    {eq.model}
                  </td>
                  <td className="px-3 py-4 text-center hidden md:table-cell">
                    <span className="inline-flex items-center gap-1 text-xs text-text-gray">
                      <span>{countryFlag[eq.country] ?? ""}</span>
                      <span>{eq.country}</span>
                    </span>
                  </td>
                  <td className="px-3 py-4 text-center text-xs text-text-gray hidden lg:table-cell">
                    {eq.bought} / {eq.made}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
