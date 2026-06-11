import MainLayout from "@/components/layout/MainLayout";
import PageLoader from "@/components/common/PageLoader";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageLoader />
      <MainLayout>{children}</MainLayout>
      <ScrollToTop />
    </>
  );
}
