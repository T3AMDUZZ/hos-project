import PageBanner from "@/components/PageBanner";

export const metadata = { title: "연혁 | 성모영상의학과" };

const timeline = [
  { year: "2026", events: ["비급여 항목 공개 업데이트", "검진장비 업그레이드"] },
  { year: "2024", events: ["홈페이지 리뉴얼", "종합검진 프로그램 개편"] },
  { year: "2020", events: ["반응형 홈페이지 구축", "도메인 등록 (성모영상의학과.kr)"] },
  { year: "2013", events: ["종합검진센터 확장", "최신 장비 도입"] },
  { year: "2010", events: ["병원 시설 리모델링", "내시경실 신설"] },
  { year: "개원", events: ["성모영상의학과의원 개원"] },
];

export default function HistoryPage() {
  return (
    <>
      <PageBanner
        title="연혁"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "연혁" },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="relative">
          {/* 세로 라인 */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 md:gap-10">
                <div className="w-[60px] md:w-[80px] shrink-0 text-right">
                  <span className="text-primary font-bold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="absolute -left-[13px] md:-left-[17px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-white" />
                  <ul className="space-y-2">
                    {item.events.map((event, eIdx) => (
                      <li key={eIdx} className="text-text-gray">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
