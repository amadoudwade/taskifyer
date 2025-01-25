"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
//   user: {
//     name: "amadou",
//     email: "amadouwade@gmail.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
  teams: [
    {
      name: "Taskifyer",
      logo: GalleryVerticalEnd,
      plan: "Task Manager App",
    },
    
  ],
  navMain: [
    {
      title: "Tasks",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All tasks",
          url: "#",
        },
        {
          title: "Completed tasks",
          url: "#",
        },
        {
          title: "Tasks overdue",
          url: "#",
        },
      ]
    },
//     // {
//     //   title: "Models",
//     //   url: "#",
//     //   icon: Bot,
//     //   items: [
//     //     {
//     //       title: "Genesis",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Explorer",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Quantum",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Documentation",
//     //   url: "#",
//     //   icon: BookOpen,
//     //   items: [
//     //     {
//     //       title: "Introduction",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Get Started",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Tutorials",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Changelog",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         }
//       ],
//     },
  ],

}



export function AppSidebar({currentUser} : { currentUser : any}) {

  const avatar = `${currentUser.first_name[0].toUpperCase()}${currentUser.last_name[0].toUpperCase()}`

  const user= {
    id: currentUser.id,
    name: currentUser.first_name[0].toUpperCase()+currentUser.first_name.slice(1),
    email: currentUser.email,
    avatar: avatar,
  }

  return (
    <Sidebar collapsible="icon" >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
