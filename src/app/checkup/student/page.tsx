import PageBanner from "@/components/PageBanner";

export const metadata = { title: "학생검진 | 성모영상의학과" };

const gradeItems = [
  {
    grade: "초등학교 1학년",
    items: "신체계측, 시력, 청력, 소변검사, 구강검진",
  },
  {
    grade: "초등학교 4학년",
    items: "신체계측, 시력, 청력, 소변검사, 혈액검사(빈혈), 구강검진",
  },
  {
    grade: "중학교 1학년",
    items: "신체계측, 시력, 청력, 소변검사, 혈액검사, 구강검진",
  },
  {
    grade: "고등학교 1학년",
    items: "신체계측, 시력, 청력, 소변검사, 혈액검사, 흉부 X선, 구강검진",
  },
];

export default function StudentCheckupPage() {
  return (
    <>
      <PageBanner
        title="학생검진"
        breadcrumb={[
          { title: "건강검진", href: "/checkup/comprehensive" },
          { title: "학생검진" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-text-dark mb-4">
            학생 건강검진 안내
          </h2>
          <p className="text-text-gray leading-relaxed">
            학교보건법에 따라 초·중·고등학교 학생을 대상으로 실시하는 건강검진입니다.
            학생의 성장 발달 상태와 건강 상태를 확인하여 질병을 조기에 발견하고 예방할 수 있습니다.
          </p>
        </div>

        {/* 학년별 검사항목 */}
        <h2 className="text-2xl font-bold text-text-dark mb-6">학년별 검사항목</h2>
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">대상 학년</th>
                <th className="text-left px-3 md:px-6 py-3 text-xs md:text-sm font-semibold">검사항목</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {gradeItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-bg-light/50">
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm font-medium text-primary">{item.grade}</td>
                  <td className="px-3 md:px-6 py-3 text-xs md:text-sm text-text-gray">{item.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 안내사항 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-light rounded-xl p-6">
            <h3 className="font-bold text-text-dark mb-3">준비사항</h3>
            <ul className="space-y-2 text-sm text-text-gray">
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>학교에서 배부한 건강검진 서류 지참</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>검진 전 8시간 이상 금식 (혈액검사 포함 시)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>소변검사를 위해 아침 첫 소변은 참고 내원</span>
              </li>
            </ul>
          </div>
          <div className="bg-bg-light rounded-xl p-6">
            <h3 className="font-bold text-text-dark mb-3">검진 안내</h3>
            <ul className="space-y-2 text-sm text-text-gray">
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>검진 기간: 학교별 지정 기간 내 실시</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>소요 시간: 약 30분~1시간</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">&#8226;</span>
                <span>결과 통보: 학교를 통해 개별 통보</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
