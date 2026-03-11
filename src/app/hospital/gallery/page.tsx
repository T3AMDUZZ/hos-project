import PageBanner from "@/components/PageBanner";

export const metadata = { title: "병원둘러보기 | 성모영상의학과" };

const gallery = [
  { title: "복도 전경", desc: "쾌적하고 넓은 복도" },
  { title: "내과 진료실", desc: "편안한 진료 환경" },
  { title: "방사선과 진료실", desc: "전문 진료실" },
  { title: "기초검사실", desc: "혈압, 시력, 청력, 폐활량 검사" },
  { title: "심전도 검사실", desc: "심장 건강 체크" },
  { title: "부인과 검사실", desc: "여성 전용 검사 공간" },
  { title: "X선 촬영실", desc: "디지털 X선 촬영" },
  { title: "유방촬영실", desc: "디지털 유방촬영장치" },
  { title: "위장조영 검사실", desc: "위장관 검사" },
  { title: "내시경실", desc: "위/대장 내시경" },
  { title: "초음파 검사실", desc: "정밀 초음파 진단" },
  { title: "CT 촬영실", desc: "컴퓨터 단층촬영" },
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="병원둘러보기"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "병원둘러보기" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
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
                <h3 className="font-semibold text-text-dark">{item.title}</h3>
                <p className="text-sm text-text-gray mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
