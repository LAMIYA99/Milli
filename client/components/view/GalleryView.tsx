"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { galleryImages } from "@/constant/SectionData";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableImage = ({ id, img }: { id: string; img: { src: string; span?: string } }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`overflow-hidden ${img.span || ""} cursor-grab active:cursor-grabbing relative`}
    >
      <img src={img.src} alt="" className="h-full w-full object-cover pointer-events-none transition-transform duration-1000 hover:scale-105" loading="lazy" />
    </div>
  );
};

export default function GalleryView() {
  const [items, setItems] = useState(
    galleryImages.map((img, index) => ({ ...img, id: `img-${index}` }))
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <>
      <PageHeader eyebrow="Qalereya" title="Bir an, bir nəfəs" subtitle="MİLLİ atmosferindən kadrlar — kameranın gözündən bizim dünyamız." />
      <section className="container-luxe pb-32">
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={items}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {items.map((img) => (
                <SortableImage key={img.id} id={img.id} img={img} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>
    </>
  );
}
