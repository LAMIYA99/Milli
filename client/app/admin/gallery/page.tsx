"use client";
import { useState, useRef } from "react";
import { Images, Type, Plus, Trash2, Edit, GripVertical, X } from "lucide-react";

type GalleryItem = { id: number; imageName: string; sortOrder: number; sizeType: "VERTICAL" | "SQUARE" | "HORIZONTAL" | "LARGE"; altText: string };

const SIZE_COLORS: Record<string, string> = {
  VERTICAL: "bg-blue-500", SQUARE: "bg-purple-500", HORIZONTAL: "bg-orange-500", LARGE: "bg-rose-500"
};
const SIZE_HEIGHTS: Record<string, string> = {
  VERTICAL: "h-32", SQUARE: "h-20", HORIZONTAL: "h-16", LARGE: "h-24"
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([
    { id: 1, imageName: "interior_vertical_01.jpg", sortOrder: 1, sizeType: "VERTICAL", altText: "Dikey Böyük İnteryer" },
    { id: 2, imageName: "pizza_square_02.jpg", sortOrder: 2, sizeType: "SQUARE", altText: "Masaüstü Pitsalar" },
    { id: 3, imageName: "text_concept_03.jpg", sortOrder: 3, sizeType: "SQUARE", altText: "Konsept Mətn Kartı" },
    { id: 4, imageName: "chairs_vertical_04.jpg", sortOrder: 4, sizeType: "VERTICAL", altText: "Oturacaqlar Bölməsi" },
    { id: 5, imageName: "meat_horizontal_05.jpg", sortOrder: 5, sizeType: "HORIZONTAL", altText: "Üfüqi Ət Yeməyi" },
    { id: 6, imageName: "doner_square_06.jpg", sortOrder: 6, sizeType: "SQUARE", altText: "Büküm Dönər" },
    { id: 7, imageName: "burger_large_07.jpg", sortOrder: 7, sizeType: "LARGE", altText: "Böyük Kabab Burger" },
    { id: 8, imageName: "plov_box_square_08.jpg", sortOrder: 8, sizeType: "SQUARE", altText: "Plov Qutusu" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<GalleryItem | null>(null);

  // Drag-and-drop refs
  const dragId = useRef<number | null>(null);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  const handleDragStart = (id: number) => { dragId.current = id; };
  const handleDragOver = (e: React.DragEvent, id: number) => { e.preventDefault(); setDragOverId(id); };
  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    if (dragId.current === null || dragId.current === targetId) { setDragOverId(null); return; }
    setItems(prev => {
      const sorted = [...prev].sort((a, b) => a.sortOrder - b.sortOrder);
      const fromIdx = sorted.findIndex(i => i.id === dragId.current);
      const toIdx = sorted.findIndex(i => i.id === targetId);
      const reordered = [...sorted];
      const [moved] = reordered.splice(fromIdx, 1);
      reordered.splice(toIdx, 0, moved);
      return reordered.map((item, idx) => ({ ...item, sortOrder: idx + 1 }));
    });
    dragId.current = null;
    setDragOverId(null);
  };
  const handleDragEnd = () => { dragId.current = null; setDragOverId(null); };

  const deleteItem = (id: number) => {
    if (confirm("Bu şəkli silmək istədiyinizə əminsiniz?")) {
      setItems(prev => prev.filter(i => i.id !== id).map((it, idx) => ({ ...it, sortOrder: idx + 1 })));
    }
  };

  const openAdd = () => { setEditItem(null); setShowModal(true); };
  const openEdit = (item: GalleryItem) => { setEditItem(item); setShowModal(true); };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.target as any;
    if (editItem) {
      setItems(prev => prev.map(i => i.id === editItem.id
        ? { ...i, sizeType: f.sizeType.value, altText: f.altText.value, imageName: f.img.files[0]?.name || i.imageName }
        : i));
      alert("Şəkil yeniləndi (UPDATE)!");
    } else {
      const nextId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
      setItems(prev => [...prev, {
        id: nextId,
        imageName: f.img.files[0]?.name || "new_photo.jpg",
        sortOrder: prev.length + 1,
        sizeType: f.sizeType.value,
        altText: f.altText.value
      }]);
      alert("Yeni şəkil əlavə edildi (INSERT)!");
    }
    setShowModal(false);
  };

  const sorted = [...items].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Qalereya</h1>
          <p className="text-zinc-500 mt-1">Qalereya şəkillərini buradan idarə edin.</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all shadow-md font-medium">
          <Plus className="w-5 h-5" /> Şəkil Əlavə Et
        </button>
      </div>

      {/* Header form */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Type className="w-5 h-5 text-zinc-600" />
          <h2 className="font-bold text-zinc-900">Qalereya Başlıq Ayarları</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <input type="text" defaultValue="QALEREYA" placeholder="Top Title" className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <input type="text" defaultValue="Bir an, bir nəfəs" placeholder="Main Title" className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <input type="text" defaultValue="MİLLİ atmosferindən kadrlar — kameranın gözündən..." placeholder="Açıqlama" className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none text-sm" />
          <button onClick={() => alert("Qalereya başlıqları yeniləndi!")} className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 text-sm font-medium">
            Başlığı Yenilə
          </button>
        </div>
      </div>

      {/* Gallery Grid with DnD */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <GripVertical className="w-4 h-4" />
            <span>
              Cəmi <strong className="text-zinc-800">{items.length}</strong> şəkil —{" "}
              <span className="text-zinc-400">sürüşdürərək sıralamanı dəyişin</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {Object.entries(SIZE_COLORS).map(([type, cls]) => (
              <span key={type} className="flex items-center gap-1">
                <span className={`w-3 h-3 rounded-sm ${cls}`} />{type}
              </span>
            ))}
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {sorted.map(item => {
            const isDragOver = dragOverId === item.id;
            return (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item.id)}
                onDragOver={e => handleDragOver(e, item.id)}
                onDrop={e => handleDrop(e, item.id)}
                onDragEnd={handleDragEnd}
                className={`break-inside-avoid bg-zinc-50 border rounded-xl overflow-hidden transition-all duration-200 group relative mb-3 cursor-grab active:cursor-grabbing
                  ${isDragOver
                    ? "border-amber-400 shadow-lg shadow-amber-100 scale-[1.02] ring-2 ring-amber-300"
                    : "border-zinc-200 hover:shadow-md"
                  }`}
              >
                <div className={`${SIZE_HEIGHTS[item.sizeType]} bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center relative`}>
                  {/* Drag handle hint */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity">
                    <GripVertical className="w-4 h-4 text-zinc-600" />
                  </div>

                  <div className="text-center px-2">
                    <Images className="w-6 h-6 text-zinc-400 mx-auto mb-1" />
                    <p className="text-xs text-zinc-500 truncate max-w-[100px]">{item.imageName}</p>
                  </div>

                  {/* Hover overlay with edit/delete */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={e => { e.stopPropagation(); openEdit(item); }}
                      className="p-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition-colors"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); deleteItem(item.id); }}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className={`absolute bottom-2 left-2 text-white text-xs font-bold px-2 py-0.5 rounded-full ${SIZE_COLORS[item.sizeType]}`}>
                    {item.sizeType}
                  </span>
                </div>

                <div className="p-2 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-600 truncate font-medium">{item.altText}</p>
                    <p className="text-xs text-zinc-400">Sıra: {item.sortOrder}</p>
                  </div>
                  <GripVertical className="w-4 h-4 text-zinc-300 shrink-0 ml-1" />
                </div>

                {/* Drop indicator overlay */}
                {isDragOver && (
                  <div className="absolute inset-0 border-2 border-amber-400 rounded-xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-zinc-200">
              <h3 className="font-bold text-zinc-900">{editItem ? "Şəkli Redaktə Et" : "Yeni Şəkil Əlavə Et"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-zinc-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Şəkil Faylı *</label>
                <input name="img" type="file" accept="image/*" className="w-full text-sm text-zinc-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-zinc-100 file:text-zinc-700 hover:file:bg-zinc-200 border border-zinc-300 rounded-xl" />
                {editItem && <p className="text-xs text-zinc-500 mt-1">Hazırki: {editItem.imageName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Şəkil Ölçüsü *</label>
                <select name="sizeType" defaultValue={editItem?.sizeType || "VERTICAL"} className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none bg-white">
                  <option value="VERTICAL">VERTICAL (Dikey Uzun)</option>
                  <option value="SQUARE">SQUARE (Kiçik Kvadrat)</option>
                  <option value="HORIZONTAL">HORIZONTAL (Geniş Üfüqi)</option>
                  <option value="LARGE">LARGE (Böyük Geniş Kvadrat)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Alt Mətn (SEO)</label>
                <input name="altText" type="text" defaultValue={editItem?.altText || ""} placeholder="Məs: Restorandan görüntülər" className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:ring-2 focus:ring-zinc-400 outline-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl hover:bg-zinc-50 font-medium">Bağla</button>
                <button type="submit" className="flex-1 py-2.5 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 font-medium">Yadda Saxla</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
