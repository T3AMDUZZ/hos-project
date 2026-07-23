import PageBanner from "@/components/PageBanner";

export const metadata = { title: "병원 둘러보기 | 성모영상의학과" };

const gallery = [
  {
    title: "접수대",
    category: "RECEPTION",
    desc: "친절하게 맞이하는 접수·검진 안내 공간",
    img: "/images/gallery/reception.jpg",
  },
  {
    title: "복도 전경",
    category: "CORRIDOR",
    desc: "쾌적하고 편안한 검진 동선",
    img: "/images/gallery/corridor.jpg",
  },
  {
    title: "내시경실",
    category: "ENDOSCOPY",
    desc: "위·대장 내시경 검사실 (OLYMPUS)",
    img: "/images/gallery/endoscopy.jpg",
  },
  {
    title: "초음파 검사실",
    category: "ULTRASOUND",
    desc: "정밀 초음파 진단 장비 (Canon Aplio i700)",
    img: "/images/gallery/ultrasound.jpg",
  },
  {
    title: "CT 촬영실",
    category: "CT",
    desc: "전신 컴퓨터 단층촬영 (TOSHIBA Alexion)",
    img: "/images/gallery/ct.jpg",
  },
  {
    title: "일반 X선 촬영실",
    category: "X-RAY",
    desc: "디지털 X선 촬영 장비 (DRGEM)",
    img: "/images/gallery/xray.jpg",
  },
  {
    title: "유방촬영실",
    category: "MAMMOGRAPHY",
    desc: "디지털 유방촬영 장치",
    img: "/images/gallery/mammography.jpg",
  },
  {
    title: "위장촬영실",
    category: "FLUOROSCOPY",
    desc: "위장 투시촬영 검사실",
    img: "/images/gallery/fluoroscopy.jpg",
  },
  {
    title: "자궁암 검사실",
    category: "CERVIX",
    desc: "자궁경부암 검사 전용 공간",
    img: "/images/gallery/cervix.jpg",
  },
  {
    title: "수면 회복실",
    category: "RECOVERY",
    desc: "내시경 검사 후 편안한 회복 공간",
    img: "/images/gallery/recovery.jpg",
  },
  {
    title: "탈의실",
    category: "DRESSING",
    desc: "검사 전 준비를 위한 탈의 공간",
    img: "/images/gallery/dressing.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="병원 둘러보기"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "병원 둘러보기" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* 인트로 */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest mb-3">
            GALLERY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark leading-tight">
            쾌적하고 전문적인
            <br />
            <span className="text-primary">진료 공간을 소개합니다</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6" />
          <p className="text-text-gray mt-6 max-w-2xl mx-auto leading-relaxed">
            성모영상의학과는 환자분들의 편안한 검진을 위해
            <br className="hidden md:block" />
            각 검사실을 쾌적하고 전문적인 환경으로 구성했습니다.
          </p>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* 이미지 영역 (실제 시설 사진) */}
              <div className="relative aspect-[4/3] bg-bg-light overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* 가독성용 그라디언트 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

                {/* 번호 배지 */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-primary text-xs font-bold rounded-full shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 카테고리 */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-semibold text-white tracking-widest drop-shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* 하단 호버 오버레이 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
              </div>

              {/* 정보 영역 */}
              <div className="p-5">
                <h3 className="font-bold text-text-dark text-lg mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내 */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-bg-light to-primary/10 rounded-2xl p-8 md:p-10 text-center border border-primary/10">
          <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">
            병원 방문 상담
          </h3>
          <p className="text-text-gray mb-6 text-sm leading-relaxed">
            직접 방문하여 병원 시설을 둘러보고 싶으시다면
            <br className="md:hidden" />
            언제든지 편하게 문의해 주세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:042-274-9885"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              042-274-9885
            </a>
            <a
              href="/hospital/directions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              오시는 길
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
