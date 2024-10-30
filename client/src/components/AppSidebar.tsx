import React, { useState } from "react";
import {
  Home,
  Star,
  ListChecks,
  MessageSquare,
  Trophy,
  Flame,
  Gamepad2,
  Calendar,
  Menu,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const AppSideSidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const MenuItem = ({ icon: Icon, label, isActive = false }) => (
    <button
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400",
        "hover:bg-red-500/10 hover:text-white transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-red-500/20",
        isActive && "bg-red-500/10 text-white"
      )}
    >
      <Icon className="h-5 w-5 min-w-[20px]" />
      {!isCollapsed && <span className="text-sm">{label}</span>}
    </button>
  );

  const MenuSection = ({ title, children }) => (
    <div className="space-y-1">
      {!isCollapsed && (
        <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      {children}
    </div>
  );

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-black",
        isCollapsed ? "w-20" : "w-64",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gamepad2 className="h-8 w-8 text-red-500" />
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-white">Playlogue</h1>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                {/* <XP className="h-3 w-3" /> */}XP
                <span>2,450 XP</span>
              </div>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white hover:bg-red-500/10"
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isCollapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-6">
        {/* Main Navigation */}
        <MenuSection title="Navigation">
          <MenuItem icon={Home} label="Home" isActive />
          <MenuItem icon={Star} label="My Reviews" />
          <MenuItem icon={MessageSquare} label="My Critics" />
          <MenuItem icon={ListChecks} label="My Lists" />
        </MenuSection>

        {/* Discover */}
        <MenuSection title="Discover">
          <MenuItem icon={Trophy} label="Top Rated" />
          <MenuItem icon={Flame} label="Popular" />
          <MenuItem icon={Gamepad2} label="Most Played" />
          <MenuItem icon={Calendar} label="Best in 2024" />
        </MenuSection>

        {/* Mobile Menu Items */}
        <div className="lg:hidden space-y-1">
          <MenuItem icon={Home} label="Home" />
          <MenuItem icon={Star} label="My Reviews" />
          <MenuItem icon={MessageSquare} label="My Critics" />
          <MenuItem icon={ListChecks} label="My Lists" />
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-red-500/20 space-y-1">
        <MenuItem icon={Settings} label="Settings" />
        <MenuItem icon={LogOut} label="Logout" />
      </div>
    </aside>
  );
};

export default AppSideSidebar