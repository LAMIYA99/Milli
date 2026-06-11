"use client";
import { useState } from "react";
import { UtensilsCrossed, Type, LayoutGrid, Tags, Leaf, Zap, Save, Plus, Trash2, Edit, ArrowUp, ArrowDown, X, RefreshCw, ImageUp } from "lucide-react";

export default function TastesPage() {
  const [activeSection, setActiveSection] = useState("header");

  const [archItems, setArchItems] = useState([
    { id: 1, title: "PLOV BOX", description: "Azərbaycan mətbəxinin sevilən plovunu müasir təqdimatla bir araya gətirən Plov Box.", imageName: "plov_box.jpg", sortOrder: 1 },
    { id: 2, title: "DÖNƏR", description: "Yüksək keyfiyyətli ətdən, təzə tərəvəzlərdən hazırlanan dönərimiz.", imageName: "doner.jpg", sortOrder: 2 },
    { id: 3, title: "KABAB BURGER", description: "Ənənəvi kabab ləzzətini burger formatında təqdim edən Kabab Burger.", imageName: "kabab_burger.jpg", sortOrder: 3 }
  ]);

  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "MİLLİ Ailə Kombo", description: "Böyük ailələr üçün 2 Plov Box, 2 Dönər və böyük içki daxil xüsusi təklif.", category: "MENU / KOMBO", imageName: "family_combo.jpg", sortOrder: 1 },
    { id: 2, title: "Tələbə Menyusu", description: "Tələbə kartını təqdim edən hər kəsə Dönər + içki xüsusi endirimlə.", category: "MENU / TƏLƏBƏ", imageName: "student_menu.jpg", sortOrder: 2 }
  ]);

  const [freshCards, setFreshCards] = useState([
    { id: 1, title: "Təzə Mövsüm Salatları", description: "Hər gün yerli fermerlərdən gələn təzə tərəvəzlərlə anında hazırlanır.", sortOrder: 1 },
    { id: 2, title: "Milli Soyuq Dadlar", description: "Qədim reseptlər əsasında soyuq vitrinlərdə saxlanılan milli qəlyanaltılar.", sortOrder: 2 },
    { id: 3, title: "Təbii Şirələr", description: "Heç bir qatqı maddəsi olmadan, gözünüzün önündə sıxılan meyvə şirələri.", sortOrder: 3 }
  ]);

  const sections = [
    { id: "header", title: "Səhifə Üst Başlıqları", icon: Type, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: "arch", title: "Menyu Arxitekturası", icon: LayoutGrid, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: "campaigns", title: "Kampaniyalar & Xüsusi Təkliflər", icon: Tags, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: "freshness", title: "Təravət Hekayəsi", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: "comfort", title: "Fastfood Komfortu", icon: Zap, color: "text-rose-500", bg: "bg-rose-500/10" },
  ];

  const moveItem = (arr: any[], setArr: any, idx: number, dir: number) => {
    const sorted = [...arr].sort((a, b) => a.sortOrder - b.sortOrder);
    const target = idx + dir;
    if (target < 0 || target >= sorted.length) return;
    const copy = sorted.map((x: any) => ({ ...x }));
    const tmp = copy[idx].sortOrder;
    copy[idx].sortOrder = copy[target].sortOrder;
    copy[target].sortOrder = tmp;
    setArr(copy);
  };

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all";
  const smInputCls = "w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white";

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Ləzzətlərimiz</h1>
        <p className="text-zinc-500 mt-1">Ləzzətlərimiz səhifəsinin bütün bölmələrini buradan idarə edin.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 space-y-2">
          {sections.map(sec => {
            const Icon = sec.icon; const isActive = activeSection === sec.id;
            return (
              <button key={sec.id} onClick={() => setActiveSection(sec.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left font-medium ${isActive ? "bg-white shadow-sm border border-zinc-200 text-zinc-900" : "text-zinc-500 hover:bg-zinc-100 border border-transparent"}`}>
                <div className={`p-1.5 rounded-lg ${isActive ? sec.bg : "bg-zinc-100"} ${isActive ? sec.color : "text-zinc-400"}`}><Icon className="w-5 h-5" /></div>
                <span className="text-sm">{sec.title}</span>
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-9">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 lg:p-8 min-h-[500px]">

            {activeSection === "header" && (
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg"><Type className="w-6 h-6" /></div><h2 className="text-xl font-bold">Səhifə Üst Banner Başlıqları</h2></div>
                <form className="space-y-5" onSubmit={e => { e.preventDefault(); alert("Başlıqlar yeniləndi!"); }}>
                  <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Üst Etiket (Top Title)</label><input type="text" defaultValue="KULİNARİYA JURNALI" className={inputCls} /></div>
                  <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Böyük Başlıq *</label><input type="text" defaultValue="Milli Ləzzət Təcrübəsi" required className={inputCls} /></div>
                  <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Açıqlama (Description)</label><textarea rows={3} className={inputCls} defaultValue="Təbii və keyfiyyətli inqrediyentlərlə hazırlanan yeməklərimiz..." /></div>
                  <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-md"><Save className="w-5 h-5" /> Başlıqları Yenilə</button>
                </form>
              </div>
            )}

            {activeSection === "arch" && (
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg"><LayoutGrid className="w-6 h-6" /></div><h2 className="text-xl font-bold">Menyu Arxitekturası və Bloklar</h2></div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-5 flex gap-3">
                  <input type="text" defaultValue="Menyu Arxitekturası" placeholder="Ana Başlıq" className={smInputCls + " flex-1"} />
                  <input type="text" defaultValue="MİLLİ brendi altında yenilənmiş..." placeholder="Açıqlama" className={smInputCls + " flex-1"} />
                  <button onClick={() => alert("Başlıq saxlanıldı!")} className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 whitespace-nowrap">Başlığı Saxla</button>
                </div>
                <div className="grid xl:grid-cols-3 gap-5">
                  <div className="xl:col-span-2 space-y-3">
                    {[...archItems].sort((a, b) => a.sortOrder - b.sortOrder).map((item, idx) => (
                      <div key={item.id} className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center gap-3 shadow-sm group">
                        <div className="flex flex-col gap-1">
                          <button onClick={() => moveItem(archItems, setArchItems, idx, -1)} disabled={idx === 0} className="p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30"><ArrowUp className="w-3.5 h-3.5" /></button>
                          <button onClick={() => moveItem(archItems, setArchItems, idx, 1)} disabled={idx === archItems.length - 1} className="p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30"><ArrowDown className="w-3.5 h-3.5" /></button>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5"><span className="text-xs px-2 py-0.5 bg-zinc-100 rounded-full text-zinc-500">Sıra: {item.sortOrder}</span></div>
                          <p className="font-bold text-zinc-900 text-sm">{item.title}</p>
                          <p className="text-xs text-zinc-500 truncate">{item.description}</p>
                          <p className="text-xs text-purple-500 mt-0.5 flex items-center gap-1"><ImageUp className="w-3 h-3" />{item.imageName}</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => { if (confirm("Silmək istədiyinizdən əminsiniz?")) setArchItems(prev => prev.filter(x => x.id !== item.id)); }} className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="xl:col-span-1">
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sticky top-6">
                      <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-purple-700"><Plus className="w-4 h-4" /> Yeni Blok</h3>
                      <form className="space-y-3" onSubmit={e => { e.preventDefault(); const f = e.target as any; const next = Math.max(...archItems.map(i => i.id)) + 1; setArchItems(prev => [...prev, { id: next, title: f.title.value, description: f.desc.value, imageName: f.img.files[0]?.name || "default.jpg", sortOrder: next }]); (e.target as HTMLFormElement).reset(); alert("Blok əlavə edildi!"); }}>
                        <input name="title" required placeholder="Blok Başlığı *" className={smInputCls} />
                        <textarea name="desc" required rows={2} placeholder="Açıqlama *" className={smInputCls} />
                        <input name="img" type="file" accept="image/*" className="w-full text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-purple-50 file:text-purple-700 border border-zinc-300 rounded-lg bg-white" />
                        <button type="submit" className="w-full py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700">Siyahıya Əlavə Et</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "campaigns" && (
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg"><Tags className="w-6 h-6" /></div><h2 className="text-xl font-bold">Kampaniyalar və Xüsusi Təkliflər</h2></div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-5 flex gap-3">
                  <input type="text" defaultValue="KAMPANİYALAR & XÜSUSİ TƏKLİFLƏR" className={smInputCls + " flex-1"} />
                  <input type="text" defaultValue="Dadlı Təkliflər və Kombo Menyular" className={smInputCls + " flex-1"} />
                  <button onClick={() => alert("Başlıq saxlanıldı!")} className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 whitespace-nowrap">Başlığı Saxla</button>
                </div>
                <div className="grid xl:grid-cols-3 gap-5">
                  <div className="xl:col-span-2 space-y-3">
                    {[...campaigns].sort((a, b) => a.sortOrder - b.sortOrder).map((item, idx) => (
                      <div key={item.id} className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center gap-3 shadow-sm group">
                        <div className="flex flex-col gap-1">
                          <button onClick={() => moveItem(campaigns, setCampaigns, idx, -1)} disabled={idx === 0} className="p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30"><ArrowUp className="w-3.5 h-3.5" /></button>
                          <button onClick={() => moveItem(campaigns, setCampaigns, idx, 1)} disabled={idx === campaigns.length - 1} className="p-1 rounded-md bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30"><ArrowDown className="w-3.5 h-3.5" /></button>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">{item.category} (Sıra: {item.sortOrder})</span>
                          <p className="font-bold text-zinc-900 text-sm mt-1">{item.title}</p>
                          <p className="text-xs text-zinc-500 truncate">{item.description}</p>
                          <p className="text-xs text-amber-500 mt-0.5 flex items-center gap-1"><ImageUp className="w-3 h-3" />{item.imageName}</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => { if (confirm("Silmək istədiyinizdən əminsiniz?")) setCampaigns(prev => prev.filter(x => x.id !== item.id)); }} className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="xl:col-span-1">
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sticky top-6">
                      <h3 className="font-bold text-sm mb-3 flex items-center gap-2 text-amber-600"><Plus className="w-4 h-4" /> Yeni Kampaniya</h3>
                      <form className="space-y-3" onSubmit={e => { e.preventDefault(); const f = e.target as any; const next = campaigns.length > 0 ? Math.max(...campaigns.map(i => i.id)) + 1 : 1; setCampaigns(prev => [...prev, { id: next, title: f.title.value, category: f.cat.value, description: f.desc.value, imageName: f.img.files[0]?.name || "combo.jpg", sortOrder: next }]); (e.target as HTMLFormElement).reset(); alert("Kampaniya əlavə edildi!"); }}>
                        <input name="title" required placeholder="Kampaniya Adı *" className={smInputCls} />
                        <input name="cat" required placeholder="Kateqoriya (MENU/KOMBO) *" className={smInputCls} />
                        <textarea name="desc" required rows={2} placeholder="Açıqlama *" className={smInputCls} />
                        <input name="img" type="file" accept="image/*" className="w-full text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-amber-50 file:text-amber-700 border border-zinc-300 rounded-lg bg-white" />
                        <button type="submit" className="w-full py-2 bg-amber-500 text-white text-sm rounded-lg hover:bg-amber-600">Kampaniyanı Əlavə Et</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "freshness" && (
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg"><Leaf className="w-6 h-6" /></div><h2 className="text-xl font-bold">Təravət Hekayəsi Bölməsi</h2></div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-6 flex flex-wrap gap-3 items-end">
                  <div className="flex-1"><label className="text-xs font-semibold text-zinc-600 block mb-1">Top Title</label><input type="text" defaultValue="TƏRAVƏT HEKAYƏSİ" className={smInputCls} /></div>
                  <div className="flex-1"><label className="text-xs font-semibold text-zinc-600 block mb-1">Main Title</label><input type="text" defaultValue="Sağlamlığın və Təravətin Mərkəzi" className={smInputCls} /></div>
                  <div className="flex-1"><label className="text-xs font-semibold text-zinc-600 block mb-1">Arxa Fon Şəkli</label><input type="file" accept="image/*" className="w-full text-xs text-zinc-500 file:mr-2 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-emerald-50 file:text-emerald-700 border border-zinc-300 rounded-lg bg-white" /></div>
                  <button onClick={() => alert("Təravət başlığı yeniləndi!")} className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 whitespace-nowrap">Headerı Yenilə</button>
                </div>
                <h3 className="font-semibold text-zinc-700 mb-3">Mövcud 3 Sabit Kartın Redaktəsi</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {freshCards.map(p => <FreshCard key={p.id} card={p} onUpdate={(id, title, desc) => { setFreshCards(prev => prev.map(c => c.id === id ? { ...c, title, description: desc } : c)); alert(`Kart ${id} yeniləndi!`); }} />)}
                </div>
              </div>
            )}

            {activeSection === "comfort" && (
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="p-2 bg-rose-500/10 text-rose-600 rounded-lg"><Zap className="w-6 h-6" /></div><h2 className="text-xl font-bold">Fastfood Komfortu Bölməsi</h2></div>
                <div className="bg-blue-50 text-blue-700 p-4 rounded-xl mb-5 text-sm">Bu bölmə tək sətirlik konfiqurasiyadan ibarətdir. Mətnləri və 4 fərqli şəkli ayrıca seçib yeniləyə bilərsiniz.</div>
                <form className="space-y-5" onSubmit={e => { e.preventDefault(); alert("Fastfood komfort mətnləri və 4 şəkil yeniləndi!"); }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Başlıq *</label><input type="text" defaultValue="Fastfood Komfortu, Milli Ruhla" required className={inputCls} /></div>
                    <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Alt Başlıq *</label><input type="text" defaultValue="Çatdırılma və paket servis üçün yaradılmış dadlar" required className={inputCls} /></div>
                  </div>
                  <div><label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Açıqlama Mətni *</label><textarea rows={3} required defaultValue="MİLLİ dadları həm məkanda, həm də çatdırılmada öz təzəliyini qoruyacaq şəkildə paketlənir..." className={inputCls} /></div>
                  <div>
                    <h3 className="text-sm font-bold text-rose-600 mb-3 flex items-center gap-1.5 border-b border-zinc-100 pb-2">4 Sabit Şəklin İdarə Edilməsi</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[["1. Sol-Üst (Plov Box)", "plov_box_left.jpg"], ["2. Sağ-Üst (Dönər)", "doner_right.jpg"], ["3. Sol-Alt (Burger)", "burger_bottom.jpg"], ["4. Sağ-Alt (Düyü)", "rice_dish.jpg"]].map(([label, current]) => (
                        <div key={label} className="p-3 border border-zinc-200 rounded-xl bg-zinc-50">
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5">{label}</label>
                          <input type="file" accept="image/*" className="w-full text-xs text-zinc-500 file:mr-1 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-rose-50 file:text-rose-700 border border-zinc-200 rounded-lg bg-white" />
                          <p className="text-xs text-zinc-400 mt-1 truncate">Hazırki: {current}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-all shadow-md"><RefreshCw className="w-5 h-5" /> Bütün Komfort Blokunu Yenilə</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FreshCard({ card, onUpdate }: { card: any; onUpdate: (id: number, title: string, desc: string) => void }) {
  const [title, setTitle] = useState(card.title);
  const [desc, setDesc] = useState(card.description);
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />
      <div className="flex justify-between items-center mt-1"><span className="text-sm font-bold text-emerald-600">Kart 0{card.sortOrder}</span><span className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-full">ID: {card.id}</span></div>
      <div><label className="text-xs font-semibold text-zinc-600 block mb-1">Kart Başlığı</label><input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" /></div>
      <div><label className="text-xs font-semibold text-zinc-600 block mb-1">Açıqlama</label><textarea value={desc} onChange={e => setDesc(e.target.value)} rows={2} className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" /></div>
      <button onClick={() => onUpdate(card.id, title, desc)} className="w-full flex items-center justify-center gap-2 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700"><RefreshCw className="w-3.5 h-3.5" /> Yenilə</button>
    </div>
  );
}
