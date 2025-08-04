import { HeaderMain } from "@/components/header/header-main";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <HeaderMain />
        <main>{children}</main>
      </div>
    </div>
  );
}
