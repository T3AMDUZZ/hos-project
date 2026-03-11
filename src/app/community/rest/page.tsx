import PageBanner from "@/components/PageBanner";

export const metadata = { title: "쉼터 | 성모영상의학과" };

const galleryItems = [
  { title: "봄꽃이 만개한 병원 앞 풍경", date: "2025-04-10" },
  { title: "직원들의 나눔 봉사활동", date: "2025-03-20" },
  { title: "건강 걷기 대회 참여", date: "2025-05-15" },
  { title: "환자분들을 위한 작은 음악회", date: "2025-06-08" },
  { title: "여름철 건강 특강", date: "2025-07-12" },
  { title: "추석맞이 한복 입기 행사", date: "2025-09-28" },
  { title: "가을 단풍 나들이", date: "2025-10-20" },
  { title: "연말 송년 행사", date: "2025-12-28" },
  { title: "새해 건강 다짐 이벤트", date: "2026-01-05" },
];

export default function RestPage() {
  return (
    <>
      <PageBanner
        title="쉼터"
        breadcrumb={[
          { title: "커뮤니티", href: "/community/notice" },
          { title: "쉼터" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            성모영상의학과의 따뜻한 이야기
          </h2>
          <p className="text-text-gray leading-relaxed">
            병원의 일상과 소식, 직원들의 활동, 지역사회와 함께하는 이야기를 전합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* 이미지 플레이스홀더 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 aspect-[4/3] flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-text-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-light mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 플레이스홀더 */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="w-9 h-9 rounded-lg border border-gray-200 text-sm text-text-light hover:border-primary hover:text-primary transition-colors">
            &lt;
          </button>
          {[1, 2].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                page === 1
                  ? "bg-primary text-white"
                  : "border border-gray-200 text-text-light hover:border-primary hover:text-primary"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-9 h-9 rounded-lg border border-gray-200 text-sm text-text-light hover:border-primary hover:text-primary transition-colors">
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
