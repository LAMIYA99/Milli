"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center bg-cream/5 text-cream/50">Xəritə yüklənir...</div>
});

export default function ClientMap() {
  return <MapComponent />;
}
