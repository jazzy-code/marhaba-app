import Header from "@/components/dashboard/Header";
import SideMenu from "@/components/dashboard/SideMenu";

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <SideMenu />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-stone-50/50 dark:bg-background-dark relative">
        <Header />
        {children}
      </main>
    </div>
  );
}