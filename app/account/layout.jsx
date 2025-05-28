import SideNavigation from "@/app/_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="grid gap-12 grid-cols-[16rem_1fr] h-full">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
