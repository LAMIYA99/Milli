"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Info, 
  UtensilsCrossed, 
  Image as ImageIcon, 
  PenTool, 
  Mail, 
  Settings,
  LogOut
} from "lucide-react";

const navItems = [
  { name: "Ana Səhifə", href: "/admin", icon: Home },
  { name: "Haqqımızda", href: "/admin/about", icon: Info },
  { name: "Ləzzətlərimiz", href: "/admin/tastes", icon: UtensilsCrossed },
  { name: "Qalereya", href: "/admin/gallery", icon: ImageIcon },
  { name: "Bloq", href: "/admin/blog", icon: PenTool },
  { name: "Əlaqə", href: "/admin/contact", icon: Mail },
];

export default function Sidebar({ onLogout }: { onLogout?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="h-24 flex items-center justify-center border-b border-zinc-800 relative overflow-hidden py-4">
        <div 
          className="w-40 h-20 bg-[#FEF1E1]" 
          style={{ 
            WebkitMaskImage: 'url(/IMG_6381.PNG)', 
            WebkitMaskSize: 'contain', 
            WebkitMaskRepeat: 'no-repeat', 
            WebkitMaskPosition: 'center',
            maskImage: 'url(/IMG_6381.PNG)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center'
          }} 
          title="Milli Logo"
        />
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-1">
          <p className="px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            Menu İdarəetmə
          </p>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-amber-500/10 text-amber-500 font-medium" 
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-amber-500" : ""}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-zinc-800">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          <span>Çıxış Et</span>
        </button>
      </div>
    </aside>
  );
}
