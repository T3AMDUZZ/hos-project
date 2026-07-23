import PageBanner from "@/components/PageBanner";

export const metadata = { title: "인사말 | 성모영상의학과" };

export default function GreetingPage() {
  return (
    <>
      <PageBanner
        title="인사말"
        breadcrumb={[
          { title: "병원안내", href: "/hospital/greeting" },
          { title: "인사말" },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 원장 사진 */}
          <div className="relative rounded-2xl aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/doctor-jeeungyeong.png"
              alt="성모영상의학과 원장 제은경"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "50% 28%" }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="text-white/80 text-xs font-semibold tracking-widest">DIRECTOR</p>
              <p className="text-white text-lg font-bold mt-0.5">
                제은경 <span className="text-white/80 text-sm font-medium">영상의학과 전문의</span>
              </p>
            </div>
          </div>

          {/* 인사말 */}
          <div>
            <p className="text-primary font-semibold text-sm mb-3">GREETING</p>
            <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-6 leading-tight">
              안녕하세요.
              <br />
              대전 성모영상의학과입니다.
            </h2>
            <div className="space-y-4 text-text-gray leading-relaxed">
              <p>
                저희 성모영상의학과는 대전 지역에서 오랜 시간 동안 영상의학 진료와
                종합검진 서비스를 제공해 오고 있습니다.
              </p>
              <p>
                최신 의료장비와 풍부한 임상경험을 바탕으로 정확하고 신속한 진단을
                약속드리며, 환자 한 분 한 분의 건강을 최우선으로 생각하는
                병원이 되겠습니다.
              </p>
              <p>
                영상의학 전문의가 직접 검사하고 판독하여 보다 정밀한 진단 결과를
                제공하며, 종합검진센터를 운영하여 원스톱 건강관리 서비스를
                받으실 수 있습니다.
              </p>
              <p>
                앞으로도 지역 주민 여러분의 건강을 위해 최선을 다하는
                성모영상의학과가 되겠습니다.
              </p>
              <p>감사합니다.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-text-dark font-bold text-lg">
                성모영상의학과 원장
                <span className="text-primary ml-2">제은경</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
