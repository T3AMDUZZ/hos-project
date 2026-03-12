import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumb: { title: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <div className="page-banner pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="hover:text-white">
            홈
          </Link>
          {breadcrumb.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
                  {item.title}
                </Link>
              ) : (
                <span className="text-white">{item.title}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
