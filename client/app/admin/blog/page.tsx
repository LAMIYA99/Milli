"use client";
import { useState, useRef } from "react";
import { PenTool, Plus, Trash2, Edit, Save, X, Bold, Italic, List, Type, Calendar, ImageUp } from "lucide-react";

type BlogPost = { id: number; title: string; category: string; publishedDate: string; imageName: string; longContent: string };

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([
    { id: 2, title: "Milli Qəhvə Mədəniyyəti", category: "QƏHVƏ", publishedDate: "2026-05-14", imageName: "coffee_art.jpg", longContent: "<h2>Yeni nəsil dəmləmə üsulları</h2><p>Mətbəximizdə qəhvə dənələrinin qovrulma sirlərindən danışırıq...</p>" },
    { id: 1, title: "Kameranın Gözündən Bizim Dünya", category: "SƏNƏT", publishedDate: "2026-03-12", imageName: "kitchen_secrets.jpg", longContent: "<h2>Mətbəxin pərdəarxası</h2><p>Hər bir yeməyin hazırlanmasında böyük bir sənət və sevgi gizlənir.</p>" }
  ]);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split("T")[0];

  const execCmd = (cmd: string, val?: string) => { document.execCommand(cmd, false, val); editorRef.current?.focus(); };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.target as any;
    const content = editorRef.current?.innerHTML || "";
    if (!content.trim() || content === "<br>") { alert("Zəhmət olmasa bloq məzmununu daxil edin!"); return; }
    if (editPost) {
      setPosts(prev => prev.map(p => p.id === editPost.id ? { ...p, title: f.title.value, category: f.category.value, publishedDate: f.date.value, imageName: f.img.files[0]?.name || p.imageName, longContent: content } : p));
      alert("Bloq yazısı yeniləndi (UPDATE)!");
    } else {
      const nextId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
      setPosts(prev => [...prev, { id: nextId, title: f.title.value, category: f.category.value, publishedDate: f.date.value, imageName: f.img.files[0]?.name || "default_blog.jpg", longContent: content }]);
      alert("Yeni bloq yazısı əlavə edildi (INSERT)!");
    }
    setEditPost(null); setShowForm(false);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const openEdit = (post: BlogPost) => {
    setEditPost(post); setShowForm(true);
    setTimeout(() => { if (editorRef.current) editorRef.current.innerHTML = post.longContent; }, 100);
  };

  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Bloq</h1>
          <p className="text-zinc-500 mt-1">Bloq başlıqlarını və yazılarını buradan idarə edin.</p>
        </div>
        {!showForm && <button onClick={() => { setEditPost(null); setShowForm(true); setTimeout(() => { if (editorRef.current) editorRef.current.innerHTML = ""; }, 50); }} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-md font-medium"><Plus className="w-5 h-5" /> Yeni Bloq Yazısı</button>}
      </div>

      {/* Blog Header Settings */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 mb-6">
        <div className="flex items-center gap-2 mb-4"><Type className="w-5 h-5 text-zinc-600" /><h2 className="font-bold text-zinc-900">Bloq Üst Başlıq Ayarları</h2></div>
        <div className="flex flex-wrap gap-3">
          <input type="text" defaultValue="BLOQ" placeholder="Top Title" className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <input type="text" defaultValue="Mətbəxin arxasında" required placeholder="Main Title" className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <input type="text" defaultValue="Hekayələr, reseptlər və yerli ilhamlar — MİLLİ jurnalından." placeholder="Açıqlama" className="flex-[2] min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <button onClick={() => alert("Bloq başlıqları yeniləndi!")} className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 text-sm font-medium">Başlığı Yenilə</button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 mb-6">
        <div className="flex items-center gap-2 mb-4"><PenTool className="w-5 h-5 text-zinc-600" /><h2 className="font-bold text-zinc-900">Mövcud Bloq Postları ({sortedPosts.length})</h2></div>
        {sortedPosts.length === 0 && <p className="text-zinc-400 text-sm py-4 text-center">Hələ heç bir bloq yazısı yoxdur.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedPosts.map(post => (
            <div key={post.id} className="border border-zinc-200 rounded-xl p-4 hover:shadow-md transition-shadow bg-white group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-300 to-zinc-400" />
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold px-2.5 py-1 bg-zinc-100 text-zinc-700 rounded-full border border-zinc-200">{post.category}</span>
                <span className="text-xs text-zinc-400 font-mono">{post.publishedDate}</span>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2 line-clamp-2">{post.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4"><ImageUp className="w-3.5 h-3.5" />{post.imageName}</div>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                <span className="text-xs text-zinc-400 font-mono">ID: {post.id}</span>
                <div className="flex gap-2">
                  <button onClick={() => openEdit(post)} className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-lg text-xs font-medium transition-colors"><Edit className="w-3.5 h-3.5" /> Edit</button>
                  <button onClick={() => { if (confirm("Bu bloq yazısını silmək istədiyinizə əminsiniz?")) setPosts(prev => prev.filter(p => p.id !== post.id)); }} className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-medium transition-colors"><Trash2 className="w-3.5 h-3.5" /> Sil</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-zinc-900 flex items-center gap-2">
              {editPost ? <><Edit className="w-5 h-5 text-amber-500" /> Bloq Yazısını Redaktə Et (ID: {editPost.id})</> : <><Plus className="w-5 h-5 text-blue-500" /> Yeni Bloq Yazısı Əlavə Et</>}
            </h2>
            <button onClick={() => { setShowForm(false); setEditPost(null); }} className="p-2 hover:bg-zinc-100 rounded-lg"><X className="w-5 h-5 text-zinc-500" /></button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 col-span-full">
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Bloq Başlığı *</label>
                <input name="title" type="text" required defaultValue={editPost?.title} placeholder="Məs: Əsl Bakı Paxlavasının Sirri" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Kateqoriya *</label>
                <input name="category" type="text" required defaultValue={editPost?.category} placeholder="SƏNƏT, QƏHVƏ, MƏTBƏX" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Paylaşılma Tarixi *</label>
                <input name="date" type="date" required defaultValue={editPost?.publishedDate || today} className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Şəkil Faylı *</label>
              <input name="img" type="file" accept="image/*" className="w-full text-sm text-zinc-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 border border-zinc-300 rounded-xl" />
              {editPost && <p className="text-xs text-zinc-500 mt-1">Hazırki: {editPost.imageName}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Geniş Bloq Məzmunu (Rich Editor) *</label>
              <div className="border border-zinc-300 rounded-xl overflow-hidden">
                <div className="bg-zinc-50 border-b border-zinc-200 p-2.5 flex flex-wrap gap-2">
                  <select onChange={e => { execCmd("formatBlock", e.target.value); e.target.value = ""; }} className="text-xs border border-zinc-300 rounded-lg px-2 py-1.5 bg-white outline-none cursor-pointer">
                    <option value="" disabled>Yazı Stilini Seç</option>
                    <option value="H2">Heading 2</option><option value="H3">Heading 3</option><option value="H4">Heading 4</option><option value="P">Normal Paragraph</option>
                  </select>
                  <button type="button" onClick={() => execCmd("bold")} className="px-3 py-1.5 border border-zinc-300 bg-white rounded-lg text-xs hover:bg-zinc-100 transition-colors flex items-center gap-1"><Bold className="w-3.5 h-3.5" /> Bold</button>
                  <button type="button" onClick={() => execCmd("italic")} className="px-3 py-1.5 border border-zinc-300 bg-white rounded-lg text-xs hover:bg-zinc-100 transition-colors flex items-center gap-1"><Italic className="w-3.5 h-3.5" /> Italic</button>
                  <button type="button" onClick={() => execCmd("insertUnorderedList")} className="px-3 py-1.5 border border-zinc-300 bg-white rounded-lg text-xs hover:bg-zinc-100 transition-colors flex items-center gap-1"><List className="w-3.5 h-3.5" /> List</button>
                  <button type="button" onClick={() => execCmd("removeFormat")} className="px-3 py-1.5 border border-zinc-300 bg-white rounded-lg text-xs hover:bg-zinc-100 text-red-500 transition-colors">Formatı Sıfırla</button>
                </div>
                <div ref={editorRef} contentEditable suppressContentEditableWarning className="min-h-[250px] max-h-[400px] overflow-y-auto p-4 outline-none text-zinc-800 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:my-2 [&_h4]:text-base [&_h4]:font-medium [&_h4]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5" />
              </div>
              <p className="text-xs text-zinc-500 mt-1.5">Mətndə istədiyiniz cümləni siçanla seçib yuxarıdakı açılan siyahıdan H2, H3, H4 teqlərinə sala bilərsiniz.</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => { setShowForm(false); setEditPost(null); }} className="px-5 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl hover:bg-zinc-50 font-medium">Ləğv Et</button>
              <button type="submit" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 font-medium"><Save className="w-5 h-5" /> Bloqu Yadda Saxla</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
