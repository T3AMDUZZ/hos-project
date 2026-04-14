import PageBanner from "@/components/PageBanner";

export const metadata = { title: "연혁 | 성모영상의학과" };

const timeline = [
  {
    year: "현재",
    events: [
      "국가 5대암 및 직장·지역 성인병 검진지정기관",
      "직장 및 학교 내·학교 밖 검진지정기관",
      "출장검진 지정기관",
      "각종 종합건강검진 (보건증, 채용검진, 공무원검진 등)",
    ],
  },
  {
    year: "2013년~2024년",
    events: ["동구 신협직원 종합검진지정기관"],
  },
  {
    year: "2011년",
    events: [
      "대전시내 택시회사 내원 및 출장검진",
      "롯데삼강·CU 대전지부 직원 종합검진",
    ],
  },
  {
    year: "2010년",
    events: ["대전 및 충북 지역 학교검진기관 지정"],
  },
  {
    year: "2009년",
    events: ["기무 607부대 직장검진 시행"],
  },
  {
    year: "2008년",
    events: [
      "대전·충남북 농공단지 검진기관 지정",
      "성모진단방사선과에서 성모영상의학과로 상호 변경",
    ],
  },
  {
    year: "2007년",
    events: ["초·중·고 학생검진 및 교직원검진 시행"],
  },
  {
    year: "2006년",
    events: ["대전시청 및 5개 구청 공무원 종합검진 시행"],
  },
  {
    year: "2005년",
    events: [
      "전국 도서지역 성인병 출장검진 및 암검진(5대암) 시행",
      "동대전농협 조합원 및 임직원·수자원공사 종합검진 시행",
    ],
  },
  {
    year: "2004년",
    events: ["대전시내 성인병검진 시행"],
  },
  {
    year: "2003년",
    events: [
      "동구 효동 253-1번지에서 2월 개원",
      "내과, 소아과, 영상의학과 진료",
      "국민건강보험공단 검진기관으로 지정",
      "대전 어린이집 건강검진·직장검진 및 종합검진 시행",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageBanner
        title="병원 연혁"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "연혁" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            HISTORY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            성모영상의학과의 발자취
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* 연혁 테이블 */}
        <div className="divide-y divide-gray-200 border-t-2 border-primary">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12 py-8 md:py-10 px-2 md:px-6 transition-colors hover:bg-bg-light ${
                item.year === "현재" ? "bg-primary/5" : ""
              }`}
            >
              {/* 연도 */}
              <div className="md:text-right">
                {item.year === "현재" ? (
                  <span className="inline-block px-5 py-2 bg-primary text-white font-bold rounded-full text-lg shadow-sm">
                    현재
                  </span>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark leading-none">
                    {item.year}
                  </h3>
                )}
              </div>

              {/* 이벤트 리스트 */}
              <ul className="space-y-3 md:pl-12 md:border-l md:border-gray-200">
                {item.events.map((event, eIdx) => (
                  <li
                    key={eIdx}
                    className="flex items-start gap-3 text-text-dark leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span className="text-base">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <div className="mt-16 text-center">
          <p className="text-text-gray leading-relaxed">
            2003년 개원 이래, 성모영상의학과는
            <br className="md:hidden" />
            <span className="text-primary font-semibold"> 20여 년간 지역사회 건강검진</span>의
            중심이 되어왔습니다.
          </p>
        </div>
      </div>
    </>
  );
}
