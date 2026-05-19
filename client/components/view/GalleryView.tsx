import { PageHeader } from "@/components/common/PageHeader";


const g1 = "https://images.unsplash.com/photo-1554118811-1e0d58224f24";
const g2 = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
const g3 = "https://images.unsplash.com/photo-1582264560416-566085a6764d";
const g4 = "https://images.unsplash.com/photo-1519676867240-f03562e64548";
const g5 = "https://images.unsplash.com/photo-1576092768241-dec231879fc3";
const g6 = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";
const g7 = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4";
const g8 = "https://images.unsplash.com/photo-1590004953392-5aba2e785943";

const images = [
  { src: g8, span: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: g1, span: "aspect-square" },
  { src: g4, span: "aspect-square md:row-span-2 md:aspect-[1/2]" },
  { src: g5, span: "aspect-square" },
  { src: g2, span: "aspect-square" },
  { src: g6, span: "aspect-square" },
  { src: g7, span: "md:col-span-2 aspect-[2/1]" },
  { src: g3, span: "aspect-square" },
];

export default function GalleryView() {
  return (
    <>
      <PageHeader eyebrow="Qalereya" title="Bir an, bir nəfəs" subtitle="MİLLİ atmosferindən kadrlar — kameranın gözündən bizim dünyamız." />
      <section className="container-luxe pb-32">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.span}`}>
              <img src={img.src} alt="" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
