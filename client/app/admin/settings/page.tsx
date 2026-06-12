"use client";

import { useState, useEffect } from "react";
import { 
  Layout, 
  FileText, 
  Link2, 
  Plus, 
  Trash2, 
  Save, 
  Undo, 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Copyright,
  CheckCircle2,
  Info,
  ChevronRight,
  Settings,
  Globe
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface LayoutSettings {
  logoUrl: string;
  navLinks: NavLink[];
  footerLogoUrl: string;
  useHeaderLogoForFooter: boolean;
  footerAboutText: string;
  footerAddress: string;
  footerPhone: string;
  footerEmail: string;
  footerWorkingHours: string;
  footerCopyrightText: string;
  footerCopyrightSubtext: string;
}

const defaultSettings: LayoutSettings = {
  logoUrl: "/IMG_6381.PNG",
  navLinks: [
    { href: "/", label: "Ana Səhifə" },
    { href: "/haqqimizda", label: "Haqqımızda" },
    { href: "/lezzetlerimiz", label: "Ləzzətlərimiz" },
    { href: "/gallery", label: "Qalereya" },
    { href: "/blog", label: "Bloq" },
    { href: "/elaqe", label: "Əlaqə" },
  ],
  footerLogoUrl: "/IMG_6381.PNG",
  useHeaderLogoForFooter: true,
  footerAboutText: "Azərbaycan mədəniyyətinin isti nəfəsini, qonaqpərvərliyimizin əsl mənasını və əl ilə yaradılan ləzzətlərin incəliyini bir süfrədə birləşdirən məkan.",
  footerAddress: "Nizami küçəsi 78, Bakı",
  footerPhone: "+994 12 345 67 89",
  footerEmail: "salam@milli.az",
  footerWorkingHours: "Hər gün · 08:00 – 23:00",
  footerCopyrightText: "© 2026 MİLLİ Café & Restoran",
  footerCopyrightSubtext: "Bakı · Azərbaycan"
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<LayoutSettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<"header" | "footer">("header");
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // States for adding a new navigation link
  const [newLinkLabel, setNewLinkLabel] = useState("");
  const [newLinkHref, setNewLinkHref] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("milli_layout_settings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with defaults to ensure any new keys are present
        setSettings({ ...defaultSettings, ...parsed });
      } catch (e) {
        console.error("Failed to load settings:", e);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("milli_layout_settings", JSON.stringify(settings));
    
    // Also dispatch a custom event to notify other open components
    window.dispatchEvent(new Event("milli_settings_updated"));

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleReset = () => {
    if (confirm("Bütün parametrləri ilkin vəziyyətinə qaytarmaq istəyirsiniz?")) {
      setSettings(defaultSettings);
      localStorage.setItem("milli_layout_settings", JSON.stringify(defaultSettings));
      window.dispatchEvent(new Event("milli_settings_updated"));
      alert("Parametrlər sıfırlandı!");
    }
  };

  // Nav link CRUD
  const addNavLink = () => {
    if (!newLinkLabel.trim() || !newLinkHref.trim()) {
      alert("Başlıq və Link boş ola bilməz!");
      return;
    }
    setSettings(prev => ({
      ...prev,
      navLinks: [...prev.navLinks, { label: newLinkLabel.trim(), href: newLinkHref.trim() }]
    }));
    setNewLinkLabel("");
    setNewLinkHref("");
  };

  const removeNavLink = (index: number) => {
    setSettings(prev => ({
      ...prev,
      navLinks: prev.navLinks.filter((_, i) => i !== index)
    }));
  };

  const updateNavLink = (index: number, field: keyof NavLink, value: string) => {
    setSettings(prev => {
      const updated = [...prev.navLinks];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, navLinks: updated };
    });
  };

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Header & Footer Ayarları</h1>
          <p className="text-zinc-500 mt-1">Saytın üst hissəsi (Header) və alt hissəsindəki (Footer) statik mətnləri, logoları və linkləri tənzimləyin.</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2.5 border border-zinc-300 text-zinc-700 bg-white rounded-xl hover:bg-zinc-50 transition-all text-sm font-medium"
          >
            <Undo className="w-4 h-4" />
            İlkin Vəziyyətə Qaytar
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-all font-semibold shadow-md shadow-amber-500/10"
          >
            <Save className="w-4 h-4" />
            Yadda Saxla
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <p className="font-semibold">Məlumatlar yadda saxlanıldı!</p>
            <p className="text-sm opacity-90">Dəyişikliklər saytda dərhal tətbiq edildi.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          <button
            onClick={() => setActiveTab("header")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left font-medium ${
              activeTab === "header" 
                ? "bg-white shadow-sm border border-zinc-200 text-zinc-900" 
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-transparent"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "header" ? "bg-amber-500/10 text-amber-500" : "bg-zinc-100 text-zinc-400"}`}>
              <Layout className="w-5 h-5" />
            </div>
            Header Ayarları
          </button>
          
          <button
            onClick={() => setActiveTab("footer")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left font-medium ${
              activeTab === "footer" 
                ? "bg-white shadow-sm border border-zinc-200 text-zinc-900" 
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-transparent"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTab === "footer" ? "bg-amber-500/10 text-amber-500" : "bg-zinc-100 text-zinc-400"}`}>
              <FileText className="w-5 h-5" />
            </div>
            Footer Ayarları
          </button>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 lg:p-8 min-h-[500px]">
            
            {activeTab === "header" && (
              <div className="animate-in fade-in duration-300 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 mb-1 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-amber-500" />
                    Header (Üst Hissə) Konfiqurasiyası
                  </h2>
                  <p className="text-sm text-zinc-500">Saytın ən yuxarı hissəsində olan logo və naviqasiya linklərinin idarə edilməsi.</p>
                </div>

                {/* Logo URL */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-zinc-800 text-sm">Header Logo</h3>
                  <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Logo Şəkli URL / Yolu *</label>
                      <input 
                        type="text" 
                        value={settings.logoUrl}
                        onChange={e => setSettings(prev => ({ ...prev, logoUrl: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white" 
                        placeholder="Məsələn: /IMG_6381.PNG"
                      />
                    </div>
                    <div className="flex items-center gap-4 bg-white p-3 border border-zinc-200 rounded-lg max-w-sm">
                      <div className="text-xs text-zinc-500 font-medium uppercase shrink-0">Önizləmə:</div>
                      <div className="bg-[#FEF1E1] p-1.5 rounded border border-amber-100 flex items-center justify-center h-16 w-28 overflow-hidden">
                        <img src={settings.logoUrl} alt="Preview Logo" className="max-h-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/120x60?text=Səhv+Yol"; }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Links CRUD */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-zinc-800 text-sm flex items-center justify-between">
                    <span>Naviqasiya Linkləri (Menyu)</span>
                    <span className="text-xs text-zinc-500 font-normal">Sıralamanı və mətnləri tənzimləyə bilərsiniz</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {settings.navLinks.map((link, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-xl group transition-all hover:border-zinc-300">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-200/60 text-zinc-500 text-xs font-bold shrink-0">
                          {idx + 1}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 flex-1">
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-0.5">Yazı Mətni *</label>
                            <input 
                              type="text" 
                              value={link.label}
                              onChange={e => updateNavLink(idx, "label", e.target.value)}
                              className="w-full px-3 py-1.5 text-sm rounded-lg border border-zinc-300 focus:ring-1 focus:ring-amber-500 outline-none bg-white font-medium" 
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-0.5">Link Hədəfi (Href) *</label>
                            <input 
                              type="text" 
                              value={link.href}
                              onChange={e => updateNavLink(idx, "href", e.target.value)}
                              className="w-full px-3 py-1.5 text-sm rounded-lg border border-zinc-300 focus:ring-1 focus:ring-amber-500 outline-none bg-white text-zinc-600" 
                            />
                          </div>
                        </div>

                        <button 
                          onClick={() => removeNavLink(idx)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0 mt-3.5"
                          title="Linki Sil"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add New Link Card */}
                  <div className="p-4 border-2 border-dashed border-zinc-300 rounded-xl bg-zinc-50/50 mt-4">
                    <h4 className="font-semibold text-xs text-zinc-700 mb-3 flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5 text-amber-600" />
                      Yeni Link Əlavə Et
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Məs: Qalereya" 
                          value={newLinkLabel}
                          onChange={e => setNewLinkLabel(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          placeholder="Məs: /gallery" 
                          value={newLinkHref}
                          onChange={e => setNewLinkHref(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                        />
                      </div>
                    </div>
                    
                    <button 
                      onClick={addNavLink}
                      className="px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Siyahıya Əlavə Et
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "footer" && (
              <div className="animate-in fade-in duration-300 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 mb-1 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-500" />
                    Footer (Alt Hissə) Konfiqurasiyası
                  </h2>
                  <p className="text-sm text-zinc-500">Saytın alt hissəsində olan logo, haqqında mətni, əlaqə detalları və müəllif hüquqları parametrləri.</p>
                </div>

                {/* Footer Logo */}
                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="useHeaderLogo"
                      checked={settings.useHeaderLogoForFooter}
                      onChange={e => setSettings(prev => ({ ...prev, useHeaderLogoForFooter: e.target.checked }))}
                      className="w-4 h-4 rounded border-zinc-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                    />
                    <label htmlFor="useHeaderLogo" className="text-sm font-semibold text-zinc-700 cursor-pointer">
                      Header logosunu footer-da da istifadə et
                    </label>
                  </div>

                  {!settings.useHeaderLogoForFooter && (
                    <div className="animate-in slide-in-from-top-2 duration-200">
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Footer-ə Məxsus Logo Yolu *</label>
                      <input 
                        type="text" 
                        value={settings.footerLogoUrl}
                        onChange={e => setSettings(prev => ({ ...prev, footerLogoUrl: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white" 
                        placeholder="/logo-footer.png"
                      />
                    </div>
                  )}
                </div>

                {/* About / Description text */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Footer Haqqında Mətni (Description) *</label>
                  <textarea 
                    rows={3} 
                    value={settings.footerAboutText}
                    onChange={e => setSettings(prev => ({ ...prev, footerAboutText: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white text-sm" 
                    placeholder="Məkanın qısa haqqında mətni..."
                    required
                  />
                </div>

                {/* Contact Info Grid */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-zinc-800 text-sm flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-zinc-500" /> Əlaqə Detalları
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">Ünvan *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                        <input 
                          type="text" 
                          value={settings.footerAddress}
                          onChange={e => setSettings(prev => ({ ...prev, footerAddress: e.target.value }))}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">Telefon *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                        <input 
                          type="text" 
                          value={settings.footerPhone}
                          onChange={e => setSettings(prev => ({ ...prev, footerPhone: e.target.value }))}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">E-poçt *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                        <input 
                          type="text" 
                          value={settings.footerEmail}
                          onChange={e => setSettings(prev => ({ ...prev, footerEmail: e.target.value }))}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">İş Saatları *</label>
                      <div className="relative">
                        <Clock className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
                        <input 
                          type="text" 
                          value={settings.footerWorkingHours}
                          onChange={e => setSettings(prev => ({ ...prev, footerWorkingHours: e.target.value }))}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copyright info */}
                <div className="space-y-4 pt-2 border-t border-zinc-100">
                  <h3 className="font-semibold text-zinc-800 text-sm flex items-center gap-1.5">
                    <Copyright className="w-4 h-4 text-zinc-500" /> Müəllif Hüquqları (Copyright)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">Müəllif Mətni *</label>
                      <input 
                        type="text" 
                        value={settings.footerCopyrightText}
                        onChange={e => setSettings(prev => ({ ...prev, footerCopyrightText: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        placeholder="Məs: © 2026 MİLLİ Café & Restoran"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold text-zinc-600 mb-1">Bölgə / Alt Yazı *</label>
                      <input 
                        type="text" 
                        value={settings.footerCopyrightSubtext}
                        onChange={e => setSettings(prev => ({ ...prev, footerCopyrightSubtext: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-sm" 
                        placeholder="Məs: Bakı · Azərbaycan"
                      />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Bottom Actions inside the card for mobile responsiveness */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-end gap-3 lg:hidden">
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 border border-zinc-300 text-zinc-700 bg-white rounded-lg hover:bg-zinc-50 transition-all text-xs"
              >
                <Undo className="w-3.5 h-3.5" />
                İlkin
              </button>
              <button 
                onClick={handleSave}
                className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all text-xs font-semibold"
              >
                <Save className="w-3.5 h-3.5" />
                Yadda Saxla
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
