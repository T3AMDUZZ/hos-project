import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumb: { title: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <div className="page-banner">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <h1 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-text-dark mb-4 tracking-tight">
          <span className="inline-block w-[5px] h-7 bg-primary" />
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-text-light pl-[17px]">
          <Link href="/" className="hover:text-primary">
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
                <Link href={item.href} className="hover:text-primary">
                  {item.title}
                </Link>
              ) : (
                <span className="text-text-dark font-medium">{item.title}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
