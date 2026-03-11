import PageBanner from "@/components/PageBanner";

export const metadata = { title: "공지사항 | 성모영상의학과" };

const notices = [
  { id: 10, title: "2026년 설 연휴 진료 안내", date: "2026-01-20", important: true },
  { id: 9, title: "국가건강검진 연말 마감 안내", date: "2025-11-15", important: true },
  { id: 8, title: "독감 예방접종 시작 안내", date: "2025-10-01", important: false },
  { id: 7, title: "추석 연휴 진료 안내", date: "2025-09-25", important: false },
  { id: 6, title: "여름철 건강검진 할인 이벤트", date: "2025-07-01", important: false },
  { id: 5, title: "대장내시경 전처치 약제 변경 안내", date: "2025-06-10", important: false },
  { id: 4, title: "어린이날 휴진 안내", date: "2025-04-28", important: false },
  { id: 3, title: "봄철 종합검진 프로모션 안내", date: "2025-03-15", important: false },
  { id: 2, title: "신규 CT 장비 도입 안내", date: "2025-02-20", important: false },
  { id: 1, title: "홈페이지 리뉴얼 안내", date: "2025-01-10", important: false },
];

export default function NoticePage() {
  return (
    <>
      <PageBanner
        title="공지사항"
        breadcrumb={[
          { title: "커뮤니티", href: "/community/notice" },
          { title: "공지사항" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 공지 목록 */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-bg-light border-b border-gray-200">
                <th className="text-center px-4 py-3 text-sm font-semibold text-text-dark w-16">번호</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-text-dark">제목</th>
                <th className="text-center px-4 py-3 text-sm font-semibold text-text-dark w-32 hidden sm:table-cell">작성일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-bg-light/50 cursor-pointer">
                  <td className="text-center px-4 py-3 text-sm text-text-light">
                    {notice.important ? (
                      <span className="inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">
                        중요
                      </span>
                    ) : (
                      notice.id
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-dark">
                    <span className={notice.important ? "font-bold" : ""}>
                      {notice.title}
                    </span>
                  </td>
                  <td className="text-center px-4 py-3 text-sm text-text-light hidden sm:table-cell">
                    {notice.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 플레이스홀더 */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="w-9 h-9 rounded-lg border border-gray-200 text-sm text-text-light hover:border-primary hover:text-primary transition-colors">
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
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
