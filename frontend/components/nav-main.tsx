"use client"

import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { LayoutDashboard } from 'lucide-react';
import { ListChecks } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <div className="py-12 flex flex-col gap-3">
      <div className="bg-amber-200 flex gap-4 py-2 px-8 items-center hover:scale-105"><LayoutDashboard className="text-black"/>
      <Link href="/dashboard" className="text-black">Dashboard</Link></div>
      <div className="bg-amber-200 flex gap-4 py-2 px-8 items-center hover:scale-105"><ListChecks className="text-black"/>
      <Link href="/dashboard/tasks" className="text-black">My Tasks</Link></div>
    </div>
    // <SidebarGroup>
    //   <SidebarGroupLabel>Tasks</SidebarGroupLabel>
    //   <SidebarMenu>
    //     {items.map((item) => (
    //       <Collapsible
    //         key={item.title}
    //         asChild
    //         defaultOpen={item.isActive}
    //         className="group/collapsible"
    //       >
    //         <SidebarMenuItem>
    //           <CollapsibleTrigger asChild>
    //             <SidebarMenuButton tooltip={item.title}>
    //               {item.icon && <item.icon />}
    //               <span>{item.title}</span>
    //               <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
    //             </SidebarMenuButton>
    //           </CollapsibleTrigger>
    //           <CollapsibleContent>
    //             <SidebarMenuSub>
    //               {item.items?.map((subItem) => (
    //                 <SidebarMenuSubItem key={subItem.title}>
    //                   <SidebarMenuSubButton asChild>
    //                     <a href={subItem.url}>
    //                       <span>{subItem.title}</span>
    //                     </a>
    //                   </SidebarMenuSubButton>
    //                 </SidebarMenuSubItem>
    //               ))}
    //             </SidebarMenuSub>
    //           </CollapsibleContent>
    //         </SidebarMenuItem>
    //       </Collapsible>
    //     ))}
    //   </SidebarMenu>
    // </SidebarGroup>
  )
}
