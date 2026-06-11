"use client";
import { useState } from "react";
import { Mail, MessageSquare, MapPin, Phone, Building2, Plus, Trash2, Edit, CheckCircle, RotateCcw, X, Save } from "lucide-react";

type Message = { id: number; fullName: string; email: string; message: string; read: boolean };
type Branch = { id: number; name: string; address: string; workingHours: string; latitude: number | null; longitude: number | null };

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 101, fullName: "Vüsal Orucov", email: "vusal@zada.az", message: "Yeməklər çox ləzzətlidir, interyer dizaynını çox bəyəndik. Uğurlar!", read: false },
    { id: 102, fullName: "Ayan Məmmədova", email: "ayan@mail.com", message: "Bravo Azure filialında xidmət bir az ləngdir, zəhmət olmasa nəzarəti artırın.", read: false },
    { id: 103, fullName: "Elnur Qasımov", email: "elnur@gmail.com", message: "Kabab burger möhtəşəm bir konseptdir! Təşəkkürlər MilliFood.", read: true }
  ]);

  const [branches, setBranches] = useState<Branch[]>([
    { id: 1, name: "BRAVO Azure", address: "Afiyəddin Cəlilov küçəsi 27a", workingHours: "Hər gün: 09:00 - 23:00", latitude: 40.3789, longitude: 49.8543 },
    { id: 2, name: "BRAVO Bayıl", address: "Neftçilər Prospekti, Bayıl", workingHours: "Hər gün: 08:00 - 22:00", latitude: 40.3456, longitude: 49.8312 },
    { id: 3, name: "BRAVO Lökbatan", address: "Bakı-Qazax şossesi, Qlobus TM", workingHours: "Hər gün: 09:00 - 23:00", latitude: 40.3214, longitude: 49.7421 }
  ]);

  const [activeTab, setActiveTab] = useState<"unread" | "read">("unread");
  const [editBranch, setEditBranch] = useState<Branch | null>(null);

  const toggleRead = (id: number, val: boolean) => setMessages(prev => prev.map(m => m.id === id ? { ...m, read: val } : m));
  const deleteMsg = (id: number) => { if (confirm("Bu mesajı silmək istədiyinizə əminsiniz?")) setMessages(prev => prev.filter(m => m.id !== id)); };

  const deleteBranch = (id: number) => { if (confirm("Bu filialı silmək istədiyinizə əminsiniz?")) setBranches(prev => prev.filter(b => b.id !== id)); };

  const handleBranchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.target as any;
    const data = { name: f.name.value, address: f.address.value, workingHours: f.hours.value, latitude: f.lat.value ? parseFloat(f.lat.value) : null, longitude: f.lng.value ? parseFloat(f.lng.value) : null };
    if (editBranch) {
      setBranches(prev => prev.map(b => b.id === editBranch.id ? { ...b, ...data } : b));
      alert("Filial yeniləndi (UPDATE)!");
    } else {
      const nextId = branches.length > 0 ? Math.max(...branches.map(b => b.id)) + 1 : 1;
      setBranches(prev => [...prev, { id: nextId, ...data }]);
      alert("Yeni filial əlavə edildi (INSERT)!");
    }
    setEditBranch(null);
    (e.target as HTMLFormElement).reset();
  };

  const unread = messages.filter(m => !m.read);
  const read = messages.filter(m => m.read);
  const shown = activeTab === "unread" ? unread : read;

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 focus:border-zinc-400 outline-none text-sm transition-all";

  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Əlaqə</h1>
        <p className="text-zinc-500 mt-1">Müştəri mesajları, əlaqə məlumatları və filialları idarə edin.</p>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5"><MessageSquare className="w-5 h-5 text-zinc-600" /><h2 className="font-bold text-zinc-900">Müştəri Təklif və İradları</h2></div>
        <div className="flex gap-2 mb-5">
          <button onClick={() => setActiveTab("unread")} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "unread" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>
            Oxunmamış Mesajlar {unread.length > 0 && <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">{unread.length}</span>}
          </button>
          <button onClick={() => setActiveTab("read")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === "read" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}>
            Oxunmuş Mesajlar
          </button>
        </div>
        {shown.length === 0 && <p className="text-center text-zinc-400 py-8 text-sm">{activeTab === "unread" ? "Oxunmamış mesaj yoxdur" : "Oxunmuş mesaj yoxdur"}</p>}
        <div className="grid md:grid-cols-2 gap-4">
          {shown.map(msg => (
            <div key={msg.id} className="border border-zinc-200 rounded-xl p-4 bg-zinc-50 hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold text-zinc-900 text-sm">{msg.fullName}</p>
                  <p className="text-xs text-zinc-500 flex items-center gap-1"><Mail className="w-3 h-3" />{msg.email}</p>
                </div>
                <span className="text-xs text-zinc-400 font-mono">ID: {msg.id}</span>
              </div>
              <div className="bg-white border-l-4 border-purple-400 rounded-r-lg p-3 text-sm text-zinc-700 mb-3">{msg.message}</div>
              <div className="flex gap-2 justify-end">
                {!msg.read
                  ? <button onClick={() => toggleRead(msg.id, true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg text-xs font-medium"><CheckCircle className="w-3.5 h-3.5" /> Oxunmuş et</button>
                  : <button onClick={() => toggleRead(msg.id, false)} className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg text-xs font-medium"><RotateCcw className="w-3.5 h-3.5" /> Oxunmamış et</button>}
                <button onClick={() => deleteMsg(msg.id)} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-medium"><Trash2 className="w-3.5 h-3.5" /> Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5"><Phone className="w-5 h-5 text-zinc-600" /><h2 className="font-bold text-zinc-900">Əlaqə və Baş Ofis Məlumatları</h2></div>
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert("Əlaqə məlumatları yeniləndi (UPDATE)!"); }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Top Title</label><input type="text" defaultValue="BİZİ TAP" className={inputCls} /></div>
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Main Title *</label><input type="text" defaultValue="Bakının qəlbində" required className={inputCls} /></div>
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Ünvan Etiketi</label><input type="text" defaultValue="BAŞ OFİS" className={inputCls} /></div>
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Ünvan *</label><input type="text" defaultValue="Nizami küçəsi 78, Bakı" required className={inputCls} /></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="md:col-span-2"><label className="block text-xs font-semibold text-zinc-600 mb-1">Email Etiketi</label><input type="text" defaultValue="TƏKLİF VƏ İRADLARINIZI BİZƏ YOLLAYIN" className={inputCls} /></div>
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Email *</label><input type="email" defaultValue="salam@milli.az" required className={inputCls} /></div>
            <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Telefon *</label><input type="text" defaultValue="+994 12 345 67 89" required className={inputCls} /></div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 font-medium text-sm"><Save className="w-4 h-4" /> Əlaqə Məlumatlarını Yenilə</button>
          </div>
        </form>
      </div>

      {/* Branches */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5"><Building2 className="w-5 h-5 text-zinc-600" /><h2 className="font-bold text-zinc-900">Filiallar (Branch Addresses)</h2></div>
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-5 flex flex-wrap gap-3">
          <input type="text" defaultValue="ÜNVANLARIMIZ" placeholder="Top Title" className={inputCls + " flex-1 min-w-0"} />
          <input type="text" defaultValue="Süfrəmizə xoş gəlmisiniz." required placeholder="Main Title" className={inputCls + " flex-1 min-w-0"} />
          <input type="text" defaultValue="Sizi sevgiylə hazırlanmış bir fincan çay..." placeholder="Açıqlama" className={inputCls + " flex-[2] min-w-0"} />
          <button onClick={() => alert("Ünvanlar bölməsi başlığı yeniləndi!")} className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 text-sm font-medium whitespace-nowrap">Başlığı Yenilə</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {branches.map(b => (
            <div key={b.id} className="border border-zinc-200 rounded-xl p-4 bg-zinc-50 hover:shadow-sm transition-shadow">
              <h3 className="font-bold text-zinc-900 flex items-center gap-1.5 mb-2"><Building2 className="w-4 h-4 text-blue-500" />{b.name}</h3>
              <p className="text-xs text-zinc-600 mb-1 flex items-start gap-1"><MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-zinc-400" />{b.address}</p>
              <p className="text-xs text-zinc-500 mb-2">⏰ {b.workingHours}</p>
              {(b.latitude || b.longitude) && <p className="text-xs font-mono text-zinc-400 bg-white border border-zinc-100 rounded-lg px-2 py-1 mb-3">📍 Lat: {b.latitude}, Lng: {b.longitude}</p>}
              <div className="flex gap-2">
                <button onClick={() => setEditBranch(b)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg text-xs font-medium"><Edit className="w-3.5 h-3.5" /> Düzəliş</button>
                <button onClick={() => deleteBranch(b.id)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-medium"><Trash2 className="w-3.5 h-3.5" /> Sil</button>
              </div>
            </div>
          ))}
        </div>

        {/* Branch Form */}
        <div className="border border-zinc-200 rounded-xl p-5 bg-zinc-50">
          <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
            {editBranch ? <><Edit className="w-4 h-4 text-amber-500" /> Filialı Redaktə Et (ID: {editBranch.id})</> : <><Plus className="w-4 h-4 text-blue-500" /> Yeni Filial Əlavə Et</>}
          </h3>
          <form onSubmit={handleBranchSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Filial Adı *</label><input name="name" required defaultValue={editBranch?.name} placeholder="Məs: BRAVO Azure" className={inputCls} /></div>
              <div className="md:col-span-2"><label className="block text-xs font-semibold text-zinc-600 mb-1">Tam Ünvan *</label><input name="address" required defaultValue={editBranch?.address} placeholder="Məs: Afiyəddin Cəlilov küçəsi 27a" className={inputCls} /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div><label className="block text-xs font-semibold text-zinc-600 mb-1">İş Saatları</label><input name="hours" defaultValue={editBranch?.workingHours || "Hər gün: 09:00 - 23:00"} className={inputCls} /></div>
              <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Latitude</label><input name="lat" type="number" step="any" defaultValue={editBranch?.latitude ?? ""} placeholder="Məs: 40.3789" className={inputCls} /></div>
              <div><label className="block text-xs font-semibold text-zinc-600 mb-1">Longitude</label><input name="lng" type="number" step="any" defaultValue={editBranch?.longitude ?? ""} placeholder="Məs: 49.8543" className={inputCls} /></div>
            </div>
            <div className="flex gap-3">
              {editBranch && <button type="button" onClick={() => setEditBranch(null)} className="flex items-center gap-1.5 px-4 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl hover:bg-zinc-100 text-sm"><X className="w-4 h-4" /> Ləğv Et</button>}
              <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 font-medium text-sm"><Save className="w-4 h-4" /> {editBranch ? "Filialı Yenilə" : "Filialı Əlavə Et"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
