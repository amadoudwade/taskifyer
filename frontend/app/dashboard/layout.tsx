import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/dashboard/_components/app-sidebar"
import { Navigation } from "./_components/navigation"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Navigation />
      <main className="py-20 -mx-80">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
