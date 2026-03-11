import PageBanner from "@/components/PageBanner";

export const metadata = { title: "건강상식 | 성모영상의학과" };

const articles = [
  {
    id: 8,
    title: "대장내시경, 왜 정기적으로 받아야 할까?",
    summary: "대장암은 조기 발견 시 완치율이 높은 암입니다. 50세 이상이라면 정기적인 대장내시경 검사가 중요한 이유를 알아봅니다.",
    date: "2026-02-15",
    category: "내시경",
  },
  {
    id: 7,
    title: "겨울철 심혈관 질환 예방법",
    summary: "추운 날씨에 혈관이 수축하면서 심혈관 질환의 위험이 높아집니다. 겨울철 심장 건강을 지키는 생활 습관을 소개합니다.",
    date: "2026-01-20",
    category: "내과",
  },
  {
    id: 6,
    title: "골다공증 예방을 위한 생활 습관",
    summary: "특히 폐경 후 여성에게 많이 발생하는 골다공증. 칼슘 섭취와 운동 등 일상에서 실천할 수 있는 예방법을 알아봅니다.",
    date: "2025-12-10",
    category: "여성건강",
  },
  {
    id: 5,
    title: "건강검진 결과 보는 법",
    summary: "건강검진 결과표에 나오는 수치들이 무엇을 의미하는지, 정상 범위와 주의가 필요한 수치를 쉽게 설명합니다.",
    date: "2025-11-05",
    category: "검진",
  },
  {
    id: 4,
    title: "갑상선 결절, 꼭 수술해야 할까?",
    summary: "건강검진에서 갑상선 결절이 발견되었을 때 어떻게 해야 하는지, 추적 관찰과 치료 기준에 대해 알아봅니다.",
    date: "2025-10-15",
    category: "영상의학",
  },
  {
    id: 3,
    title: "독감 예방접종의 중요성",
    summary: "매년 가을 시작되는 독감 예방접종. 접종 시기, 대상, 효과에 대해 정리합니다.",
    date: "2025-09-20",
    category: "예방접종",
  },
  {
    id: 2,
    title: "CT 검사, 방사선 걱정은 없을까?",
    summary: "CT 검사 시 방사선 피폭에 대한 궁금증을 해소하고, 저선량 CT의 장점을 설명합니다.",
    date: "2025-08-10",
    category: "영상의학",
  },
  {
    id: 1,
    title: "위내시경 수면 vs 비수면, 어떤 것이 좋을까?",
    summary: "위내시경 검사 시 수면과 비수면 방식의 차이점, 장단점을 비교하여 알아봅니다.",
    date: "2025-07-05",
    category: "내시경",
  },
];

export default function HealthArticlesPage() {
  return (
    <>
      <PageBanner
        title="건강상식"
        breadcrumb={[
          { title: "커뮤니티", href: "/community/notice" },
          { title: "건강상식" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-text-light">{article.date}</span>
              </div>
              <h3 className="font-bold text-text-dark text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-text-gray leading-relaxed line-clamp-2">
                {article.summary}
              </p>
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
