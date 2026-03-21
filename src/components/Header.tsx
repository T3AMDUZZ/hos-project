"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "병원안내",
    href: "/hospital/greeting",
    sub: [
      { title: "인사말", href: "/hospital/greeting" },
      { title: "연혁", href: "/hospital/history" },
      { title: "병원소개", href: "/hospital/facility" },
      { title: "의료진소개", href: "/hospital/doctors" },
      { title: "병원둘러보기", href: "/hospital/gallery" },
      { title: "오시는길", href: "/hospital/directions" },
    ],
  },
  {
    title: "진료안내",
    href: "/medical/internal",
    sub: [
      { title: "내과", href: "/medical/internal" },
      { title: "영상의학과", href: "/medical/radiology" },
      { title: "내시경검사", href: "/medical/endoscopy" },
      { title: "예방접종/혈액검사", href: "/medical/vaccination" },
      { title: "비급여항목안내", href: "/medical/non-covered" },
    ],
  },
  {
    title: "건강검진",
    href: "/checkup/comprehensive",
    sub: [
      { title: "종합검진", href: "/checkup/comprehensive" },
      { title: "국민건강보험공단 검진", href: "/checkup/national" },
      { title: "국가 5대암검진", href: "/checkup/cancer" },
      { title: "채용검진 및 보건증", href: "/checkup/employment" },
      { title: "학생검진", href: "/checkup/student" },
      { title: "출장검진", href: "/checkup/onsite" },
    ],
  },
  {
    title: "여성클리닉",
    href: "/women/types",
    sub: [
      { title: "여성건강검진종류", href: "/women/types" },
      { title: "기타선택검사", href: "/women/optional" },
      { title: "여성암", href: "/women/cancer" },
    ],
  },
  {
    title: "이용안내",
    href: "/guide/costs",
    sub: [
      { title: "검사비용안내", href: "/guide/costs" },
      { title: "검사장비소개", href: "/guide/equipment" },
      { title: "검사 전 주의사항", href: "/guide/precautions" },
    ],
  },
  {
    title: "커뮤니티",
    href: "/community/notice",
    sub: [
      { title: "공지사항", href: "/community/notice" },
      { title: "건강상식", href: "/community/health" },
      { title: "쉼터", href: "/community/rest" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 홈에서 현재 섹션의 dark/light 상태 감지
  useEffect(() => {
    if (!isHome) return;
    const check = () => {
      setIsDarkSection(document.documentElement.dataset.heroDark === "true");
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-hero-dark"] });
    return () => observer.disconnect();
  }, [isHome]);

  // 홈이면서 dark 섹션일 때만 흰색 텍스트
  const useWhiteText = isHome && isDarkSection;

  const headerBg = isHome
    ? isDarkSection
      ? "bg-transparent h-24"
      : "bg-white/95 backdrop-blur-sm shadow-sm h-24"
    : scrolled
    ? "bg-white shadow-md h-20"
    : "bg-white/95 backdrop-blur-sm h-24";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="성모영상의학과 로고"
            width={48}
            height={48}
            className="w-11 h-11 md:w-12 md:h-12"
          />
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-tight tracking-tight transition-colors ${useWhiteText ? "text-white" : "text-primary"}`}>
              성모영상의학과
            </span>
            <span className={`text-sm transition-colors ${useWhiteText ? "text-white/70" : "text-text-gray"}`}>종합검진센터</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full">
          {menuItems.map((menu, idx) => (
            <div
              key={idx}
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveMenu(idx)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={menu.href}
                className={`px-3 xl:px-6 h-full flex items-center text-sm xl:text-base font-semibold transition-colors ${useWhiteText ? "text-white/90 hover:text-white" : "text-text-dark hover:text-primary"}`}
              >
                {menu.title}
              </Link>
              {activeMenu === idx && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 border-t-2 border-primary">
                  {menu.sub.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.href}
                      className="block px-5 py-3 text-sm text-text-gray hover:text-primary hover:bg-bg-light transition-colors"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone number - desktop */}
        <a
          href="tel:042-000-0000"
          className={`hidden lg:flex items-center gap-2 font-bold text-base ${useWhiteText ? "text-white" : "text-primary"}`}
        >
          <svg
            className="w-5 h-5"
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
          042-000-0000
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-6 h-0.5 ${useWhiteText ? "bg-white" : "bg-text-dark"} transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 ${useWhiteText ? "bg-white" : "bg-text-dark"} transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 ${useWhiteText ? "bg-white" : "bg-text-dark"} transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[80vh] overflow-y-auto">
          {menuItems.map((menu, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button
                className="w-full px-6 py-4 text-left font-semibold text-base text-text-dark flex justify-between items-center"
                onClick={() =>
                  setActiveMenu(activeMenu === idx ? null : idx)
                }
              >
                {menu.title}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeMenu === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeMenu === idx && (
                <div className="bg-bg-light">
                  {menu.sub.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.href}
                      className="block px-8 py-3 text-sm text-text-gray hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
