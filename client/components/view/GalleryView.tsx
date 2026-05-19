import { PageHeader } from "@/components/common/PageHeader";
import { galleryImages } from "@/constant/SectionData";


export default function GalleryView() {
  return (
    <>
      <PageHeader eyebrow="Qalereya" title="Bir an, bir nəfəs" subtitle="MİLLİ atmosferindən kadrlar — kameranın gözündən bizim dünyamız." />
      <section className="container-luxe pb-32">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.span}`}>
              <img src={img.src} alt="" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
