"use client";

import { useState } from "react";
import { Info, Layers, Star, List, Save, Plus, Trash2, Edit, ArrowUp, ArrowDown, ImageUp, X, RefreshCw } from "lucide-react";

type Block = { id: number; topTitle: string; title: string; description: string; imageName: string; sortOrder: number };
type Principle = { id: number; itemNumber: string; title: string; description: string; sortOrder: number };

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("header");

  const [blocks, setBlocks] = useState<Block[]>([
    { id: 1, topTitle: "BREND DƏYƏRLƏRİ & MİSSİYA", title: "MİLLİ Hekayəsi", description: "MİLLİ brendi olaraq missiyamız – qlobal mətbəx dadlarını yerli ruhla birləşdirərək daha premium təqdim etməkdir.", imageName: "milli_story.png", sortOrder: 1 },
    { id: 2, topTitle: "HAQQIMIZDA", title: "MİLLİ brendi olaraq missiyamız.", description: "MİLLİ — Bakının qəlbində qurulmuş bir məkan deyil; o, nənələrimizin süfrə dilini, səhərin sehrini modern üslubda təqdim edən mədəniyyətdir.", imageName: "milli_mission.png", sortOrder: 2 },
    { id: 3, topTitle: "POPULYAR QLOBAL DADLAR", title: "Göz Qabağında və Tam Şəffaf", description: "MİLLİ-də qlobal kulinariya irsi müasir və premium tərzdə təqdim olunur. Soyuq vitrinlərimizdə günboyu təzə hazırlanan yeməklər hər bir qonağın seçiminə hazır vəziyyətdədir.", imageName: "milli_transparent.png", sortOrder: 3 }
  ]);

  const [principles, setPrinciples] = useState<Principle[]>([
    { id: 1, itemNumber: "01", title: "Mənşə", description: "Hər inqrediyent yerli torpağın nəfəsindən, yerli sənətkarın əlindən gəlir.", sortOrder: 1 },
    { id: 2, itemNumber: "02", title: "Sənətkarlıq", description: "Hər çörək, hər dəmləmə — uzun illərin səbri ilə formalaşan bir ritualdır.", sortOrder: 2 },
    { id: 3, itemNumber: "03", title: "Qonaqpərvərlik", description: "Süfrəmizə oturan hər kəs — qonaq deyil, ailəmizin bir parçasıdır.", sortOrder: 3 }
  ]);

  const [editingBlock, setEditingBlock] = useState<Block | null>(null);

  const moveBlock = (index: number, direction: number) => {
    const sorted = [...blocks].sort((a, b) => a.sortOrder - b.sortOrder);
    const target = index + direction;
    if (target < 0 || target >= sorted.length) return;
    const newBlocks = sorted.map(b => ({ ...b }));
    const tmp = newBlocks[index].sortOrder;
    newBlocks[index].sortOrder = newBlocks[target].sortOrder;
    newBlocks[target].sortOrder = tmp;
    setBlocks(newBlocks);
  };

  const updatePrinciple = (id: number, title: string, description: string) => {
    setPrinciples(prev => prev.map(p => p.id === id ? { ...p, title, description } : p));
    alert(`Prinsip ID: ${id} uğurla yeniləndi!`);
  };

  const sections = [
    { id: "header", title: "Üst Banner Başlıqları", icon: Info, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: "blocks", title: "Dinamik Bloklar (CRUD)", icon: Layers, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: "principleHeader", title: "Prinsiplər Başlığı", icon: Star, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: "principles", title: "3 Sadə Prinsip", icon: List, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Haqqımızda</h1>
        <p className="text-zinc-500 mt-1">Haqqımızda səhifəsinin bütün bölmələrini buradan idarə edə bilərsiniz.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 space-y-2">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button key={sec.id} onClick={() => setActiveSection(sec.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left font-medium ${isActive ? "bg-white shadow-sm border border-zinc-200 text-zinc-900" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 border border-transparent"}`}>
                <div className={`p-1.5 rounded-lg ${isActive ? sec.bg : "bg-zinc-100"} ${isActive ? sec.color : "text-zinc-400"}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {sec.title}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-9">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 lg:p-8 min-h-[500px]">

            {activeSection === "header" && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-500/10 text-blue-600 rounded-lg"><Info className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-zinc-900">Haqqımızda Üst Banner Başlıqları</h2>
                </div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Başlıqlar yadda saxlanıldı!"); }}>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Kiçik Üst Başlıq (Top Title)</label>
                    <input type="text" defaultValue="HAQQIMIZDA" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ana Böyük Başlıq (Main Title) *</label>
                    <input type="text" defaultValue="Yerli ruhun yeni dili" required className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Ətraflı İzah Mətni (Description)</label>
                    <textarea rows={4} defaultValue="MİLLİ — Bakının qəlbində qurulmuş bir məkan deyil; o, nənələrimizin süfrə dilini, samovarın səbrini və xalçanın naxışlarındakı sükutu müasir bir dildə danışan mədəniyyətdir." className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-md">
                    <Save className="w-5 h-5" /> Başlıqları Yenilə
                  </button>
                </form>
              </div>
            )}

            {activeSection === "blocks" && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg"><Layers className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-zinc-900">Dinamik Səhifə Blokları (Sıralama və CRUD)</h2>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2 space-y-3">
                    {[...blocks].sort((a, b) => a.sortOrder - b.sortOrder).map((b, idx) => (
                      <div key={b.id} className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex flex-col gap-1">
                          <button onClick={() => moveBlock(idx, -1)} disabled={idx === 0} className="p-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30 transition-colors"><ArrowUp className="w-4 h-4 text-zinc-600" /></button>
                          <button onClick={() => moveBlock(idx, 1)} disabled={idx === blocks.length - 1} className="p-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 disabled:opacity-30 transition-colors"><ArrowDown className="w-4 h-4 text-zinc-600" /></button>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">Sıra: {b.sortOrder}</span>
                            <span className="text-xs text-zinc-400 uppercase tracking-wide truncate">{b.topTitle}</span>
                          </div>
                          <h4 className="font-bold text-zinc-900">{b.title}</h4>
                          <p className="text-xs text-zinc-500 truncate">{b.description}</p>
                          <div className="flex items-center gap-1 mt-1 text-xs text-purple-500"><ImageUp className="w-3.5 h-3.5" /> {b.imageName}</div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setEditingBlock(b)} className="p-2 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg transition-colors"><Edit className="w-4 h-4" /></button>
                          <button onClick={() => { if (confirm("Bu bloku silmək istədiyinizdən əminsiniz?")) setBlocks(prev => prev.filter(x => x.id !== b.id)); }} className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="xl:col-span-1">
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sticky top-6">
                      <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        {editingBlock ? <><Edit className="w-4 h-4 text-amber-500" /> Bloku Yenilə</> : <><Plus className="w-4 h-4 text-purple-600" /> Yeni Blok</>}
                      </h3>
                      <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); if (editingBlock) { setBlocks(prev => prev.map(b => b.id === editingBlock.id ? editingBlock : b)); alert("Blok yeniləndi!"); } else { const next = blocks.length > 0 ? Math.max(...blocks.map(b => b.id)) + 1 : 1; setBlocks(prev => [...prev, { id: next, topTitle: "", title: "", description: "", imageName: "default.png", sortOrder: next }]); alert("Blok əlavə edildi!"); } setEditingBlock(null); }}>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1">Üst Etiket</label>
                          <input type="text" value={editingBlock?.topTitle ?? ""} onChange={e => editingBlock && setEditingBlock({ ...editingBlock, topTitle: e.target.value })} className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white" placeholder="Məs: HAQQIMIZDA" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1">Blok Başlığı *</label>
                          <input required type="text" value={editingBlock?.title ?? ""} onChange={e => editingBlock && setEditingBlock({ ...editingBlock, title: e.target.value })} className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1">Açıqlama *</label>
                          <textarea required rows={3} value={editingBlock?.description ?? ""} onChange={e => editingBlock && setEditingBlock({ ...editingBlock, description: e.target.value })} className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 focus:ring-2 focus:ring-purple-500 outline-none bg-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-zinc-700 mb-1">Blok Şəkli *</label>
                          <input type="file" accept="image/*" className="w-full text-xs text-zinc-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 bg-white border border-zinc-300 rounded-lg" />
                        </div>
                        <div className="flex gap-2">
                          <button type="submit" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-all">
                            {editingBlock ? <><RefreshCw className="w-4 h-4" /> Yenilə</> : <><Plus className="w-4 h-4" /> Əlavə Et</>}
                          </button>
                          {editingBlock && <button type="button" onClick={() => setEditingBlock(null)} className="p-2.5 bg-zinc-200 text-zinc-600 hover:bg-zinc-300 rounded-lg transition-colors"><X className="w-4 h-4" /></button>}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "principleHeader" && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg"><Star className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-zinc-900">Prinsiplər Bölməsinin Başlığı</h2>
                </div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Prinsiplərin bölmə başlığı yadda saxlanıldı!"); }}>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Üst Kiçik Etiket (Top Title) *</label>
                    <input type="text" defaultValue="DƏYƏRLƏRİMİZ" required className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Böyük Bölmə Başlığı (Main Title) *</label>
                    <input type="text" defaultValue="Üç sadə prinsip" required className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                  </div>
                  <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-all shadow-md">
                    <Save className="w-5 h-5" /> Bölmə Başlığını Saxla
                  </button>
                </form>
              </div>
            )}

            {activeSection === "principles" && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg"><List className="w-6 h-6" /></div>
                  <h2 className="text-xl font-bold text-zinc-900">Üç Sadə Prinsipin İdarə Edilməsi</h2>
                </div>
                <div className="bg-blue-50 text-blue-700 p-4 rounded-xl mb-6 text-sm">
                  Cədvəldə mövcud olan 3 əsas prinsipi aşağıdakı kartlardan birbaşa yeniləyə bilərsiniz.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {principles.map(p => (
                    <PrincipleCard key={p.id} principle={p} onUpdate={updatePrinciple} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PrincipleCard({ principle, onUpdate }: { principle: Principle; onUpdate: (id: number, title: string, desc: string) => void }) {
  const [title, setTitle] = useState(principle.title);
  const [desc, setDesc] = useState(principle.description);
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />
      <div className="flex items-center justify-between mt-2">
        <span className="text-3xl font-black text-zinc-200">{principle.itemNumber}</span>
        <span className="px-2 py-0.5 bg-zinc-100 text-zinc-500 text-xs rounded-full">ID: {principle.id} (Sabit)</span>
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1">Prinsip Adı</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-zinc-600 mb-1">Açıqlama Mətni</label>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} rows={3} className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
      </div>
      <button onClick={() => onUpdate(principle.id, title, desc)} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-all">
        <RefreshCw className="w-4 h-4" /> {principle.itemNumber} Yenilə
      </button>
    </div>
  );
}
