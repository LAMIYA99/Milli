"use client";

import { useState } from "react";
import { 
  Image as ImageIcon, 
  BookOpen, 
  Type, 
  LayoutGrid, 
  Users, 
  Save, 
  CheckCircle,
  Plus,
  Trash2,
  Edit,
  UserCircle2,
  ImageUp,
  RefreshCcw,
  RefreshCw,
  Info
} from "lucide-react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const [dbFoods] = useState([
    { id: 101, name: "Milli Ət Dönəri", desc: "Təbii ət, xüsusi sous və təzə lavaş" },
    { id: 102, name: "Toyuq Dönəri (Milli)", desc: "Xüsusi fərqli ədviyyatlı toyuq əti" },
    { id: 103, name: "Klab Sendviç", desc: "Təzə tərəvəzlər və xüsusi sous ilə" },
    { id: 104, name: "Milli Burger", desc: "180qr şirəli mal əti kotleti ilə" },
    { id: 105, name: "Sezar Salatı", desc: "Klassik sezar sousu və krutonlar" }
  ]);

  const [activeMenuBlocks, setActiveMenuBlocks] = useState([
    { blockNum: 1, foodId: 101, name: "Milli Ət Dönəri", desc: "Təbii ət, xüsusi sous və təzə lavaş" },
    { blockNum: 2, foodId: 104, name: "Milli Burger", desc: "180qr şirəli mal əti kotleti ilə" },
    { blockNum: 3, foodId: 105, name: "Sezar Salatı", desc: "Klassik sezar sousu və krutonlar" }
  ]);

  const [sampleMembers, setSampleMembers] = useState([
    { id: 1, fullName: "Elvin Quliyev", roleOrPosition: "BAŞ BARİSTA", imageFileText: "barista-elvin.jpg" },
    { id: 2, fullName: "Aytən Məmmədova", roleOrPosition: "CHIEF CHEF", imageFileText: "chef-ayten.jpg" },
    { id: 3, fullName: "Rəşad Əliyev", roleOrPosition: "MƏTBƏX KOORDİNATORU", imageFileText: "reshad-kitchen.jpg" }
  ]);

  const changeHomeBlock = (blockNum: number, selectedFoodId: number) => {
    const food = dbFoods.find(f => f.id === selectedFoodId);
    if (food) {
      setActiveMenuBlocks(prev => prev.map(b => 
        b.blockNum === blockNum ? { ...b, foodId: food.id, name: food.name, desc: food.desc } : b
      ));
      alert(`Blok ${blockNum} uğurla "${food.name}" ilə əvəzləndi!`);
    }
  };

  const sections = [
    { id: "hero", title: "Hero Banner Ayarları", icon: ImageIcon, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: "about", title: "Haqqımızda Blok Seçimi", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: "menuHeader", title: "Ləzzətlərimiz Başlıq", icon: Type, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: "menuBlocks", title: "Ana Səhifə Menyu Blokları", icon: LayoutGrid, color: "text-rose-500", bg: "bg-rose-500/10" },
    { id: "teamHeader", title: "Komandamız Başlıq", icon: Users, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: "teamMembers", title: "Komanda Üzvləri (CRUD)", icon: UserCircle2, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Ana Səhifə</h1>
          <p className="text-zinc-500 mt-1">Ana səhifənin bütün bölmələrini buradan idarə edə bilərsiniz.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar for Page Settings */}
        <div className="lg:col-span-3 space-y-2">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-left font-medium ${
                  isActive 
                    ? "bg-white shadow-sm border border-zinc-200 text-zinc-900" 
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-transparent"
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? sec.bg : "bg-zinc-100"} ${isActive ? sec.color : "text-zinc-400"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {sec.title}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 lg:p-8 min-h-[500px]">
            
            {activeSection === "hero" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Hero Banner Ayarları</h2>
                </div>
                
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Hero banner yeniləndi!"); }}>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Böyük Şriftli Yazı (Title) *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" required placeholder="Nümunə: Milli Ləzzətlər..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Açıqlama (Subtitle)</label>
                    <textarea rows={3} className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Ətraflı məlumat..." />
                  </div>
                  <div className="p-5 border-2 border-dashed border-zinc-300 rounded-xl bg-zinc-50">
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Banner Şəkli Seç (Image File) *</label>
                    <div className="flex items-center gap-4">
                      <input type="file" className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-600 hover:file:bg-amber-100 transition-all cursor-pointer" accept="image/*" />
                    </div>
                    <p className="text-xs text-zinc-500 mt-2">Hazırki şəkil: banner-default.jpg</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-1.5">1-ci Düymə Mətni</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Sifariş Et" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-zinc-700 mb-1.5">2-ci Düymə Mətni</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Daha Ətraflı" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-md">
                      <Save className="w-5 h-5" />
                      Banneri Yenilə
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === "about" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Haqqımızda Blok Seçimi</h2>
                </div>
                <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
                  <p className="text-sm text-zinc-500">Ana səhifədə görünəcək haqqımızda mətnini seçin.</p>
                  <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-1 w-full">
                      <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Mövcud Bloklar</label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-white">
                        <option value="1">Blok 1 - Şəffaf Mətbəx Hekayəmiz</option>
                        <option value="2" selected>Blok 2 - Kulinariya İrsi və Prinsiplərimiz</option>
                        <option value="3">Blok 3 - Təbii və Yerli Dadlar</option>
                      </select>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md w-full sm:w-auto h-fit" onClick={() => alert('Blok aktiv edildi!')}>
                      <CheckCircle className="w-5 h-5" />
                      Bloku Aktiv Et
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "menuHeader" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg">
                    <Type className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Ləzzətlərimiz Başlıq Ayarları</h2>
                </div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Başlıq yeniləndi!"); }}>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Kiçik Başlıq (Subtitle) *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" required placeholder="Ləzzətli Seçimlər" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Başlıq (Title) *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" required placeholder="Menyumuzla Tanış Olun" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Uzun Açıqlama (Description)</label>
                    <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Təbii və keyfiyyətli inqrediyentlərlə hazırlanan yeməklərimiz..." />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-all shadow-md">
                      <RefreshCw className="w-5 h-5" />
                      Başlığı Yenilə
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === "menuBlocks" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-500/10 text-rose-600 rounded-lg">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Ana Səhifə Menyu Blokları</h2>
                </div>
                <div className="bg-blue-50 text-blue-700 p-4 rounded-xl mb-6 text-sm flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Hər bir blokun altındakı seçim menyusundan yeni yemək təyin edərək bloku anında yeniləyə bilərsiniz. Ana səhifədə cəmi 3 blok göstərilir.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {activeMenuBlocks.map((b) => (
                    <div key={b.blockNum} className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-amber-400"></div>
                      <div className="flex justify-between items-center mb-4 mt-2">
                        <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold rounded-full">Blok {b.blockNum}</span>
                      </div>
                      <h3 className="font-bold text-lg text-zinc-900 mb-2">{b.name}</h3>
                      <p className="text-zinc-500 text-sm flex-grow mb-6">{b.desc}</p>
                      
                      <div className="pt-4 border-t border-zinc-100">
                        <label className="block text-xs font-semibold text-rose-600 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                          <RefreshCcw className="w-3.5 h-3.5" /> Bloku Dəyişdir
                        </label>
                        <select 
                          className="w-full text-sm px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-all cursor-pointer"
                          value={b.foodId}
                          onChange={(e) => changeHomeBlock(b.blockNum, parseInt(e.target.value))}
                        >
                          {dbFoods.map(f => (
                            <option key={f.id} value={f.id}>{f.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "teamHeader" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Komandamız Başlıq Ayarları</h2>
                </div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Komanda başlığı saxlanıldı!"); }}>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Kiçik Üst Başlıq (Subtitle) *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" required placeholder="Peşəkar Aşpazlarımız" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Başlıq (Title) *</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" required placeholder="Komandamızla Tanış Olun" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Açıqlama Mətni (Description)</label>
                    <textarea rows={4} className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Təcrübəli və işini sevən komandamız..." />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-all shadow-md">
                      <Save className="w-5 h-5" />
                      Başlığı Saxla
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === "teamMembers" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-500/10 text-cyan-600 rounded-lg">
                    <UserCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900">Komanda Üzvlərinin Siyahısı</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Form */}
                  <div className="xl:col-span-1">
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sticky top-6">
                      <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <Plus className="w-4 h-4 text-cyan-600" /> Yeni Üzv Əlavə Et
                      </h3>
                      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Üzv əlavə edildi!"); }}>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Ad və Soyad *</label>
                          <input type="text" className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-white" required placeholder="Ad Soyad" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Vəzifə / Rol *</label>
                          <input type="text" className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-white" required placeholder="Məs: Baş Aşpaz" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1.5">Üzvün Şəkli *</label>
                          <div className="relative">
                            <input type="file" className="w-full text-xs text-zinc-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100 transition-all cursor-pointer bg-white border border-zinc-300 rounded-lg" accept="image/*" />
                          </div>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600 text-white text-sm font-medium rounded-lg hover:bg-cyan-700 transition-all shadow-sm">
                          <CheckCircle className="w-4 h-4" />
                          Əlavə Et
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* List */}
                  <div className="xl:col-span-2 space-y-3">
                    {sampleMembers.map(m => (
                      <div key={m.id} className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-200">
                            <UserCircle2 className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900">{m.fullName}</h4>
                            <p className="text-xs font-bold text-cyan-600 tracking-wide mb-1">{m.roleOrPosition}</p>
                            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                              <ImageUp className="w-3.5 h-3.5" /> {m.imageFileText}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm font-medium transition-colors">
                            <Edit className="w-3.5 h-3.5" /> Düzəliş
                          </button>
                          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg text-sm font-medium transition-colors" onClick={() => {if(confirm('Silinsin?')) setSampleMembers(sampleMembers.filter(x => x.id !== m.id))}}>
                            <Trash2 className="w-3.5 h-3.5" /> Sil
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
