"use client";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 grid grid-cols-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <a
        href="tel:042-000-0000"
        className="flex flex-col items-center justify-center py-3 text-primary"
      >
        <svg
          className="w-5 h-5 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-xs font-semibold">전화</span>
      </a>
      <a
        href="https://pf.kakao.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-3 text-[#391B1B] border-x border-gray-200"
      >
        <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.52 6.6-.2.74-.72 2.68-.82 3.1-.13.52.19.51.4.37.17-.11 2.62-1.78 3.69-2.5.7.1 1.42.15 2.16.15 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
        <span className="text-xs font-semibold">카카오톡</span>
      </a>
      <a
        href="/hospital/directions"
        className="flex flex-col items-center justify-center py-3 text-primary"
      >
        <svg
          className="w-5 h-5 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-xs font-semibold">길찾기</span>
      </a>
    </div>
  );
}
