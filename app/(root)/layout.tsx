import { HeaderMain } from "@/components/header/header-main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-4 md:px-0">
      <HeaderMain />
      <main className="pt-16 pb-8">{children}</main>
    </div>
  );
}
