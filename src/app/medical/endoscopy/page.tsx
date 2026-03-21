import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = { title: "내시경검사 | 성모영상의학과" };

export default function EndoscopyPage() {
  return (
    <>
      <PageBanner
        title="내시경검사"
        breadcrumb={[
          { title: "진료안내", href: "/medical/internal" },
          { title: "내시경검사" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 위내시경 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-dark mb-4">위내시경</h2>
            <div className="space-y-3 text-text-gray text-sm leading-relaxed">
              <p>
                위내시경은 식도, 위, 십이지장을 직접 관찰하여 위염, 위궤양,
                위암 등을 조기에 발견할 수 있는 검사입니다.
              </p>
              <h3 className="font-semibold text-text-dark pt-2">검사 전 주의사항</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  검사 전날 저녁 9시 이후 금식
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  검사 당일 아침 물, 약 복용 금지
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  수면내시경 시 보호자 동반 및 자차 운전 금지
                </li>
              </ul>
            </div>
          </div>

          {/* 대장내시경 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-dark mb-4">대장내시경</h2>
            <div className="space-y-3 text-text-gray text-sm leading-relaxed">
              <p>
                대장내시경은 대장 전체를 관찰하여 용종, 대장암 등을 조기에
                발견하고 치료할 수 있는 검사입니다.
              </p>
              <h3 className="font-semibold text-text-dark pt-2">전처치 안내</h3>
              <p>
                대장내시경은 정확한 검사를 위해 전처치(장 정결)가 필수입니다.
                아래 전처치 방법을 확인해 주세요.
              </p>
              <div className="flex gap-3 pt-2">
                <Link
                  href="/guide/precautions"
                  className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition-colors"
                >
                  쿨프렙 전처치
                </Link>
                <Link
                  href="/guide/precautions"
                  className="px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary/5 transition-colors"
                >
                  오라팡 전처치
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 주의사항 안내 배너 */}
        <div className="mt-12 bg-primary/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">
              내시경 검사 전 주의사항을 꼭 확인하세요
            </h3>
            <p className="text-sm text-text-gray">
              정확한 검사 결과를 위해 검사 전 주의사항을 반드시 확인해 주시기 바랍니다.
            </p>
          </div>
          <Link
            href="/guide/precautions"
            className="shrink-0 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            주의사항 보기
          </Link>
        </div>
      </div>
    </>
  );
}
