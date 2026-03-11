import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-gray-300 pb-20 lg:pb-0">
      {/* 진료시간 + 전화번호 바 */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-white">
            <div className="text-center sm:text-left">
              <p className="text-sm opacity-80 mb-1">진료시간</p>
              <p className="font-semibold">
                평일 09:00~18:00 | 토요일 09:00~13:00
              </p>
              <p className="text-sm opacity-80 mt-1">
                점심 12:00~13:30 | 일요일/공휴일 휴진
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/80 mb-1">대표전화</p>
            <a
              href="tel:042-000-0000"
              className="text-3xl font-bold text-accent"
            >
              042-000-0000
            </a>
          </div>
        </div>
      </div>

      {/* 푸터 본문 */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              성모영상의학과의원
            </h3>
            <div className="text-sm space-y-1.5 text-gray-400">
              <p>대표: 홍길동 | 사업자등록번호: 000-00-00000</p>
              <p>대전광역시 OO구 OO로 000</p>
              <p>Tel: 042-000-0000 | Fax: 042-000-0000</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                바로가기
              </h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/hospital/greeting" className="block hover:text-white">
                  병원소개
                </Link>
                <Link href="/checkup/comprehensive" className="block hover:text-white">
                  종합검진
                </Link>
                <Link href="/guide/costs" className="block hover:text-white">
                  검사비용
                </Link>
                <Link href="/hospital/directions" className="block hover:text-white">
                  오시는길
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-white">
              이용약관
            </Link>
          </div>
          <p>&copy; 2026 성모영상의학과. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
