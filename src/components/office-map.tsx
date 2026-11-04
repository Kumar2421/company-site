"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
  type MapRef,
} from "@/components/ui/map";

/** Same coordinates as the LocalBusiness schema in `src/app/layout.tsx`. */
const OFFICE: [number, number] = [77.2439, 10.5847];

/** `narrow` is subtracted from `zoom` below the `sm` breakpoint so the whole
 *  region still fits a phone-width map. */
const VIEWS = [
  { key: "udumalpet", label: "Udumalpet", center: OFFICE, zoom: 12.5, narrow: 0 },
  { key: "tamil-nadu", label: "Tamil Nadu", center: [78.4, 10.9] as [number, number], zoom: 6.2, narrow: 0.6 },
  { key: "india", label: "India", center: [80.0, 21.5] as [number, number], zoom: 3.4, narrow: 0.7 },
] as const;

type ViewKey = (typeof VIEWS)[number]["key"];

export function OfficeMap() {
  const mapRef = useRef<MapRef>(null);
  const [active, setActive] = useState<ViewKey>("udumalpet");

  function go(key: ViewKey) {
    const view = VIEWS.find((v) => v.key === key);
    if (!view) return;
    setActive(key);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isNarrow = window.matchMedia("(max-width: 639px)").matches;
    mapRef.current?.flyTo({
      center: view.center,
      zoom: isNarrow ? view.zoom - view.narrow : view.zoom,
      duration: reduceMotion ? 0 : 1600,
      essential: true,
    });
  }

  return (
    <div
      role="region"
      aria-label="Map showing the MLForge Studio office in Pukkulam, Udumalpet, Tamil Nadu, India"
      className="relative h-[420px] w-full overflow-hidden rounded-panel sm:h-[540px]"
    >
      <Map
        ref={mapRef}
        center={OFFICE}
        zoom={VIEWS[0].zoom}
        minZoom={3}
        cooperativeGestures
        theme="light"
      >
        <MapControls position="bottom-right" showZoom />

        <MapMarker longitude={OFFICE[0]} latitude={OFFICE[1]}>
          <MarkerContent>
            <span className="relative flex size-5 items-center justify-center">
              <span
                aria-hidden
                className="absolute inline-flex size-full rounded-full bg-brand/40 motion-safe:animate-ping"
              />
              <span className="relative size-3.5 rounded-full border-2 border-white bg-brand shadow-card" />
            </span>
            <MarkerLabel position="bottom">MLForge Studio</MarkerLabel>
          </MarkerContent>
          <MarkerPopup closeButton>
            <div className="w-56 space-y-1 p-1 text-small">
              <p className="font-medium text-ink">MLForge Studio</p>
              <p className="text-ink-60">
                4/12, South Street, Pukkulam - Venesapatti Rd, Udumalpet
                (Udumalaipettai), Tamil Nadu 642154
              </p>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>

      <div
        role="group"
        aria-label="Zoom the map"
        className="absolute top-3 left-3 z-10 flex gap-1 rounded-pill bg-white p-1 shadow-card"
      >
        {VIEWS.map((view) => (
          <button
            key={view.key}
            type="button"
            aria-pressed={active === view.key}
            onClick={() => go(view.key)}
            className={cn(
              "min-h-9 rounded-pill px-3.5 text-small font-medium transition-colors duration-150",
              active === view.key
                ? "bg-ink text-white"
                : "text-ink-60 hover:text-ink",
            )}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );
}
