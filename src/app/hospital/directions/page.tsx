import PageBanner from "@/components/PageBanner";

export const metadata = { title: "오시는길 | 성모영상의학과" };

export default function DirectionsPage() {
  return (
    <>
      <PageBanner
        title="오시는길"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "오시는길" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 지도 영역 */}
        <div className="rounded-2xl overflow-hidden bg-gray-200 h-[450px] flex items-center justify-center mb-12">
          <div className="text-center text-text-light">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-semibold">카카오맵 영역</p>
            <p className="text-sm mt-1">API 키 설정 후 지도가 표시됩니다</p>
          </div>
        </div>

        {/* 정보 카드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-bg-light rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-dark mb-2">주소</h3>
            <p className="text-sm text-text-gray">대전광역시 OO구 OO로 000</p>
          </div>
          <div className="bg-bg-light rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-dark mb-2">전화번호</h3>
            <a href="tel:042-000-0000" className="text-sm text-primary font-semibold">
              042-000-0000
            </a>
          </div>
          <div className="bg-bg-light rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-dark mb-2">진료시간</h3>
            <div className="text-sm text-text-gray space-y-0.5">
              <p>평일 09:00~18:00</p>
              <p>토요일 09:00~13:00</p>
              <p>점심 12:00~13:30</p>
            </div>
          </div>
          <div className="bg-bg-light rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-text-dark mb-2">교통안내</h3>
            <div className="text-sm text-text-gray space-y-0.5">
              <p>버스: OOO번</p>
              <p>주차 가능</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
