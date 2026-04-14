import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내과(소아과) | 성모영상의학과",
  description:
    "호흡기 질환, 내분비 질환, 소화기계 질환, 간장 질환, 이비인후과 질환, 부인과적 질환, 소아과 진료 안내",
};

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
