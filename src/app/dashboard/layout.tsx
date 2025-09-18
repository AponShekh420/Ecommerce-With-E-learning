import Header from "@/components/dashboard/common/header/Header";
import Sidebar from "@/components/dashboard/common/sidebar/Sidebar";
import { AllUtilityProvider } from "@/context-provider/UtilityProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AllUtilityProvider>
      <div className="min-h-screen">
        <div className="lg:flex">
          <div className={`lg:w-64 2xl:w-72`}>
            <Sidebar />
          </div>
          <div className="lg:flex-1  mt-4 lg:mt-0">
            <Header />
            <div className="px-8">{children}</div>
          </div>
        </div>
      </div>
    </AllUtilityProvider>
  );
}
