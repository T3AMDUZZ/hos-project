import PageBanner from "@/components/PageBanner";

export const metadata = { title: "내과 | 성모영상의학과" };

export default function InternalPage() {
  return (
    <>
      <PageBanner
        title="내과"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "내과" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">내과 진료 안내</h2>
          <p className="text-text-gray leading-relaxed">
            일반 내과 질환부터 만성 질환 관리까지, 환자 중심의 진료를 제공합니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "일반 내과 진료", desc: "감기, 소화불량, 두통 등 일반적인 내과 질환 진료" },
            { title: "만성 질환 관리", desc: "고혈압, 당뇨, 고지혈증 등 만성 질환 관리" },
            { title: "소화기 질환", desc: "위장관 질환, 간질환 등 소화기 계통 진료" },
            { title: "호흡기 질환", desc: "기관지염, 천식, 폐렴 등 호흡기 질환 진료" },
            { title: "순환기 질환", desc: "심장 질환, 부정맥 등 순환기 계통 진료" },
            { title: "건강상담", desc: "생활습관 개선 및 질병 예방을 위한 건강상담" },
          ].map((item, idx) => (
            <div key={idx} className="bg-bg-light rounded-xl p-6">
              <h3 className="font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-text-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
