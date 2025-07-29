import { HeaderMain } from "@/components/header/header-main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
    </>
  );
}
