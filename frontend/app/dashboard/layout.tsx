import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/dashboard/_components/app-sidebar"
import { Navigation } from "./_components/navigation"
import { verifySession } from "@/lib/auth"

export default async function Layout({ children }: { children: React.ReactNode }) {

  const currentUser = await verifySession()

  return (
    <SidebarProvider>
      <AppSidebar currentUser={ currentUser}/>
      <Navigation />
      <main className="py-20 -mx-80">
        {children}
      </main>
    </SidebarProvider>
  )
}
