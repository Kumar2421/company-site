import { cn } from "@/lib/utils";
import {
  Bell,
  Check,
  Comment,
  Grid,
  Heart,
  MapPin,
  Plus,
  Search,
  Send,
  Sparkle,
  Star,
} from "@/components/icons";

/** Shared iOS-style status bar — same rhythm across all four screens. */
function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-3 pb-1 font-sans text-[10px] font-semibold tracking-tight tabular-nums select-none",
        dark ? "text-white/90" : "text-ink/80",
      )}
    >
      <span>11:30</span>
      <div className="flex items-center gap-1.5">
        {/* Signal strength indicator */}
        <div className="flex items-end gap-[1px] h-2">
          <span className={cn("w-[2px] h-[3px] rounded-[0.5px]", dark ? "bg-white" : "bg-ink")} />
          <span className={cn("w-[2px] h-[4.5px] rounded-[0.5px]", dark ? "bg-white" : "bg-ink")} />
          <span className={cn("w-[2px] h-[6px] rounded-[0.5px]", dark ? "bg-white" : "bg-ink")} />
          <span className={cn("w-[2px] h-[8px] rounded-[0.5px] opacity-40", dark ? "bg-white" : "bg-ink")} />
        </div>
        {/* WiFi symbol */}
        <svg viewBox="0 0 16 16" className="h-[9px] w-[9px]" fill="currentColor">
          <path d="M15.3 4.5a12.5 12.5 0 0 0-14.6 0 .5.5 0 0 0-.1.7l1.1 1.1a.5.5 0 0 0 .7 0 9.2 9.2 0 0 1 11.2 0a.5.5 0 0 0 .7 0l1.1-1.1a.5.5 0 0 0-.1-.7zM12 7.7a7.8 7.8 0 0 0-8 0 .5.5 0 0 0-.1.6l1.1 1.1c.2.2.5.2.7 0a4.5 4.5 0 0 1 4.6 0c.2.2.5.2.7 0l1.1-1.1a.5.5 0 0 0-.1-.6zM8.8 11a3 3 0 0 0-1.6 0 .5.5 0 0 0-.1.6l1.2 1.2a.5.5 0 0 0 .7 0l1.2-1.2a.5.5 0 0 0-.4-.6z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-[1px]">
          <div className={cn("w-5 h-2.5 rounded-[3px] border p-[1px] flex items-center", dark ? "border-white/40" : "border-ink/20")}>
            <div className={cn("h-full w-[85%] rounded-[1.5px]", dark ? "bg-white" : "bg-ink")} />
          </div>
          <div className={cn("w-[1px] h-1 rounded-r-[0.5px] opacity-50", dark ? "bg-white" : "bg-ink")} />
        </div>
      </div>
    </div>
  );
}

/** Messaging app — "Loop", generic and unbranded. */
const MESSAGES = [
  { fromMe: false, text: "Can you send the updated deck?", time: "9:02" },
  {
    fromMe: true,
    text: "Sending now — check your inbox.",
    time: "9:03",
    read: true,
  },
  { fromMe: false, text: "Got it, looks great. Quick changes needed on slide 4?", time: "9:06" },
  { fromMe: true, text: "Let's review on call at 3.", time: "9:07", read: true },
];

export function ChatScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#F9FBFC]">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-ink-08 bg-white/80 backdrop-blur-md px-4 pt-11 pb-3.5 sticky top-0 z-10">
        <div className="relative">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-brand/80 to-brand text-[13px] font-semibold text-white">
            AR
          </span>
          <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-white bg-success-bright animate-pulse" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[14px] font-semibold tracking-tight text-ink">Alex Rivera</span>
          <span className="block text-[10px] text-ink-56">Product Designer</span>
        </div>
        <button className="grid size-8 place-items-center rounded-full hover:bg-ink-08 transition-colors duration-150">
          <Bell className="size-[18px] text-ink-56" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden flex flex-col justify-end gap-3 px-4 py-4">
        {MESSAGES.map((m, i) => (
          <div
            key={i}
            className={cn("flex flex-col max-w-[85%]", m.fromMe ? "items-end self-end" : "items-start self-start")}
          >
            <div
              className={cn(
                "px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm transition-all",
                m.fromMe
                  ? "rounded-2xl rounded-br-sm bg-gradient-to-tr from-brand to-[#4056ea] text-white"
                  : "rounded-2xl rounded-bl-sm bg-white border border-ink-08 text-ink",
              )}
            >
              {m.text}
            </div>
            <span className="mt-1 flex items-center gap-1 px-1 font-mono text-[9px] text-ink-56">
              {m.time}
              {m.read && <Check className="size-3 text-brand" />}
            </span>
          </div>
        ))}
      </div>

      {/* Message Box */}
      <div className="flex items-center gap-2 bg-white border-t border-ink-08 px-4 pt-3 pb-6">
        <button className="grid size-9 shrink-0 place-items-center rounded-full bg-ink-08 hover:bg-ink-12 transition-colors duration-150">
          <Plus className="size-4.5 text-ink-60" />
        </button>
        <div className="flex flex-1 items-center gap-2 rounded-full border border-ink-12 bg-[#F3F4F6] px-4 py-2 hover:bg-white focus-within:bg-white focus-within:ring-2 focus-within:ring-brand/20 transition-all">
          <span className="flex-1 text-[13px] text-ink-56 select-none">Message…</span>
        </div>
        <button className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white shadow-md shadow-brand/20 hover:bg-brand-hover active:scale-95 transition-all">
          <Send className="size-4.5" />
        </button>
      </div>
    </div>
  );
}

/** Social feed app — "Glimpse", generic and unbranded. */
const FEED_TABS = [
  { icon: Grid, active: true },
  { icon: Search, active: false },
  { icon: Plus, active: false },
  { icon: Heart, active: false },
];

export function FeedScreen() {
  return (
    <div className="relative flex h-full flex-col bg-white">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-ink-08 px-4 pt-11 pb-3 sticky top-0 bg-white/90 backdrop-blur-md z-10">
        <span className="text-[18px] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand to-[#8a3ffc]">
          Glimpse
        </span>
        <button className="grid size-8 place-items-center rounded-full hover:bg-ink-08 transition-colors">
          <Bell className="size-4.5 text-ink-56" />
        </button>
      </div>

      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto scrollbar-none pb-4">
        {/* Stories row */}
        <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-none border-b border-ink-08">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="size-11 rounded-full p-[2px] bg-gradient-to-tr from-brand to-[#ec4899] animate-pulse">
              <span className="grid size-full place-items-center rounded-full bg-white text-[11px] font-semibold text-brand">
                ME
              </span>
            </div>
            <span className="text-[9px] text-ink-56">My story</span>
          </div>
          {["travels", "design", "co", "lab"].map((u, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className="size-11 rounded-full p-[2px] bg-gradient-to-tr from-[#f59e0b] to-[#ec4899]">
                <span className="grid size-full place-items-center rounded-full bg-white text-[11px] font-semibold text-[#ec4899]">
                  {u[0].toUpperCase()}{u[1] || ""}
                </span>
              </div>
              <span className="text-[9px] text-ink-56">{u}</span>
            </div>
          ))}
        </div>

        {/* Post header */}
        <div className="flex items-center gap-2.5 px-4 py-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-brand to-[#3b4df2] text-[11px] font-semibold text-white">
            ST
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[13px] font-bold text-ink">studio.travels</span>
            <span className="block text-[10px] text-ink-56">Icelandic Highlands</span>
          </div>
        </div>

        {/* Post image mockup */}
        <div className="mx-4 overflow-hidden rounded-xl border border-ink-08 aspect-[4/3] relative group bg-gradient-to-br from-[#1e1e38] to-[#121214] flex flex-col justify-between p-4 text-white shadow-inner">
          {/* Overlay glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,77,242,0.15),transparent_60%)]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[9px] font-medium tracking-wide uppercase">
              Featured Trip
            </span>
            <Sparkle className="size-4 text-[#fbbf24] animate-pulse" />
          </div>

          <div className="z-10 mt-auto">
            <h3 className="text-[18px] font-bold leading-tight tracking-tight">The Land of Fire & Ice</h3>
            <p className="text-[11px] text-white/60 mt-0.5">Capturing the raw aesthetics of volcanic plains.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 px-4 pt-3.5">
          <button className="flex items-center gap-1.5 text-ink hover:scale-105 active:scale-95 transition-transform duration-100">
            <Heart className="size-5 text-danger fill-danger" />
            <span className="font-mono text-[11px] font-semibold tabular-nums">248</span>
          </button>
          <button className="flex items-center gap-1.5 text-ink-56">
            <Comment className="size-5" />
            <span className="font-mono text-[11px] font-semibold tabular-nums">32</span>
          </button>
        </div>

        {/* Caption */}
        <p className="px-4 pt-2 text-[12px] leading-relaxed text-ink-60">
          <span className="font-bold text-ink mr-1">studio.travels</span>
          New landscape presets drop is officially live. Link in bio!
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex items-center justify-between border-t border-ink-08 px-8 py-3 pb-6 bg-white">
        {FEED_TABS.map((tab, i) => (
          <button key={i} className="hover:scale-110 active:scale-90 transition-transform duration-100">
            <tab.icon
              className={cn("size-5", tab.active ? "text-brand" : "text-ink-56")}
            />
          </button>
        ))}
        <button className="grid size-6 place-items-center rounded-full bg-brand-soft text-[9px] font-bold text-brand hover:scale-110 active:scale-90 transition-transform">
          M
        </button>
      </div>
    </div>
  );
}

/** Dispatch / logistics app — "Hopon", generic ride/delivery request. */
export function DispatchScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#F3F5F0]">
      <StatusBar />

      {/* Custom Vector Map Design */}
      <div className="relative flex-1 overflow-hidden">
        {/* Simulated Map Roads & River */}
        <svg className="absolute inset-0 size-full opacity-60" viewBox="0 0 200 300">
          <rect width="200" height="300" fill="#EAECE6" />
          {/* Waterway / River */}
          <path d="M -20,120 C 60,110 80,180 220,170 L 220,195 C 80,205 60,135 -20,145 Z" fill="#D3DFEE" />
          {/* Roads */}
          <line x1="0" y1="50" x2="200" y2="280" stroke="#FFFFFF" strokeWidth="6" />
          <line x1="0" y1="200" x2="200" y2="70" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="80" y1="0" x2="80" y2="300" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="160" y1="0" x2="40" y2="300" stroke="#FFFFFF" strokeWidth="3" />
        </svg>

        {/* Map Pins / Cars */}
        <div className="absolute top-[35%] left-[25%] size-6 rounded-full bg-brand/20 flex items-center justify-center animate-ping" />
        <div className="absolute top-[35%] left-[25%] size-3 rounded-full bg-brand border border-white shadow-md z-10" />

        <div className="absolute top-[18%] left-[70%] size-7 bg-white rounded-lg shadow-md border border-ink-08 flex items-center justify-center rotate-6 animate-pulse">
          <span className="text-[10px]">🚗</span>
        </div>
        <div className="absolute top-[62%] left-[45%] size-7 bg-white rounded-lg shadow-md border border-ink-08 flex items-center justify-center -rotate-12">
          <span className="text-[10px]">🚲</span>
        </div>

        {/* User Marker */}
        <span className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-brand text-white shadow-lg ring-4 ring-brand/20 z-10">
          <MapPin className="size-4" />
        </span>

        {/* Header HUD */}
        <div className="absolute top-12 left-4 right-4 flex items-center justify-between gap-2 z-10">
          <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 font-mono text-[9px] font-bold text-ink shadow-md border border-ink-08">
            HOPON LIVE
          </span>
          <span className="grid size-8 place-items-center rounded-full bg-white/95 backdrop-blur-md shadow-md border border-ink-08">
            <Search className="size-3.5 text-ink-56" />
          </span>
        </div>
      </div>

      {/* Floating Bottom Card */}
      <div className="rounded-t-3xl bg-white px-4 pt-4.5 pb-6 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] border-t border-ink-08 z-10">
        <span className="mx-auto mb-3 block h-1 w-9 rounded-full bg-ink-08" />

        <div className="flex items-center gap-2 rounded-full border border-ink-08 bg-[#F3F4F6] px-4 py-2.5 text-[13px] text-ink-56">
          <Search className="size-4 text-ink-60" />
          <span className="flex-1 font-medium">Where to?</span>
        </div>

        {/* Driver arriving card */}
        <div className="mt-3.5 flex items-center gap-3 rounded-2xl bg-brand-soft border border-brand/10 p-3.5 shadow-sm">
          <div className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[12px] font-bold text-brand shadow-sm">
            DR
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="block text-[13px] font-bold text-ink">Courier Arriving</span>
              <span className="flex items-center gap-0.5 rounded bg-brand/10 px-1 py-0.5 text-[9px] font-bold text-brand">
                <Star className="size-2.5 text-brand fill-brand" /> 4.9
              </span>
            </div>
            <span className="block font-mono text-[10px] text-ink-56 mt-0.5">3 min away • Hybrid Bike</span>
          </div>
          <button className="rounded-full bg-brand px-4 py-2 text-[12px] font-bold text-white shadow-md shadow-brand/15 hover:bg-brand-hover active:scale-95 transition-all">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

/** Maps / field-service app — "Waypoint", generic route + stop list. */
const STOPS = [
  { name: "Site A — Client Onboarding", eta: "9:20 AM", done: true },
  { name: "Site B — System Integration Check", eta: "11:00 AM", done: false },
  { name: "Site C — Final Delivery & Signoff", eta: "1:40 PM", done: false },
];

export function MapsScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#E4E7E0]">
      <StatusBar />

      {/* Styled Route Map */}
      <div className="relative flex-1 pt-12 overflow-hidden">
        {/* Navigation HUD at top */}
        <div className="absolute top-13 left-4 right-4 bg-brand text-white rounded-2xl p-3.5 shadow-lg flex items-center gap-3.5 z-10 border border-white/10">
          <div className="size-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
            <span className="text-[16px] font-bold">↑</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold leading-tight">Head North on Route 4</p>
            <p className="text-[10px] text-white/70 mt-0.5">Then turn right on Industrial Pkwy</p>
          </div>
        </div>

        {/* Route Path Graphic */}
        <svg viewBox="0 0 200 300" className="absolute inset-0 h-full w-full opacity-80">
          {/* Water body */}
          <path d="M 0,220 C 40,210 60,260 200,240 L 200,300 L 0,300 Z" fill="#C5D3E8" />
          {/* Route path */}
          <path
            d="M 40,260 C 80,180, 50,130, 110,110 S 160,50, 150,15"
            fill="none"
            stroke="#1b2bb8"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Navigation Stops */}
        {[
          { left: "40px", top: "260px" },
          { left: "100px", top: "110px" },
          { left: "150px", top: "25px" }
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
            style={{ left: pos.left, top: pos.top }}
          >
            <div className="size-6 grid place-items-center rounded-full bg-brand text-[10px] font-bold text-white shadow-lg ring-4 ring-white">
              {i + 1}
            </div>
            <div className="absolute top-7 bg-white/95 backdrop-blur-sm border border-ink-08 px-1.5 py-0.5 rounded shadow-sm text-[8px] font-bold text-ink whitespace-nowrap">
              Stop {String.fromCharCode(65 + i)}
            </div>
          </div>
        ))}
      </div>

      {/* Route List Drawer */}
      <div className="rounded-t-3xl bg-white p-4.5 pb-6 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] border-t border-ink-08 z-10">
        <span className="mx-auto mb-3.5 block h-1 w-9 rounded-full bg-ink-08" />

        <div className="flex items-center justify-between px-1">
          <p className="text-[14px] font-bold tracking-tight text-ink">Today&apos;s Dispatch Route</p>
          <span className="font-mono text-[10px] font-bold text-brand bg-brand-soft px-2 py-0.5 rounded-full">3 stops</span>
        </div>

        <ul className="mt-3.5 flex flex-col gap-2">
          {STOPS.map((stop) => (
            <li
              key={stop.name}
              className="flex items-center gap-3 border-b border-ink-08 pb-2.5 last:border-0 last:pb-0"
            >
              {stop.done ? (
                <div className="size-5 rounded-full bg-success/10 border border-success/20 flex items-center justify-center shrink-0">
                  <Check className="size-3 text-success" />
                </div>
              ) : (
                <div className="size-5 rounded-full border-2 border-ink-20 flex items-center justify-center shrink-0">
                  <span className="size-2 rounded-full bg-ink-20" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <span className={cn("block text-[12px] font-medium truncate", stop.done ? "text-ink-56 line-through" : "text-ink")}>
                  {stop.name}
                </span>
              </div>
              <span className="font-mono text-[9px] font-semibold text-ink-56 whitespace-nowrap bg-ink-08 px-1.5 py-0.5 rounded">
                {stop.eta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
