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
        "absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 pb-1 font-mono text-[11px] font-medium tabular-nums",
        dark ? "text-white" : "text-ink",
      )}
    >
      <span>11:30</span>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 16 10" className="h-[7px] w-4" fill="currentColor">
          <rect x="0" y="6" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="4" width="3" height="6" rx="0.5" />
          <rect x="9" y="2" width="3" height="8" rx="0.5" />
          <rect x="13.5" y="0" width="2.5" height="10" rx="0.5" opacity="0.4" />
        </svg>
        <svg viewBox="0 0 18 12" className="h-[9px] w-[15px]" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="11"
            rx="2.5"
            stroke="currentColor"
          />
          <rect x="2" y="2" width="11" height="8" rx="1.3" fill="currentColor" />
          <rect
            x="16.3"
            y="4"
            width="1.5"
            height="4"
            rx="0.7"
            fill="currentColor"
          />
        </svg>
      </span>
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
  { fromMe: false, text: "Got it, looks great.", time: "9:06" },
  { fromMe: true, text: "Call at 3?", time: "9:07", read: true },
];

export function ChatScreen() {
  return (
    <div className="relative flex h-full flex-col bg-white">
      <StatusBar />

      <div className="flex items-center gap-2.5 border-b border-ink-08 px-4 pt-11 pb-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-mono-xs font-medium text-brand">
          A
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-small font-medium">Alex Rivera</span>
          <span className="flex items-center gap-1 font-mono text-[10px] text-success">
            <span className="size-1.5 rounded-full bg-success-bright" />
            Online
          </span>
        </span>
        <Bell className="size-4 shrink-0 text-ink-56" />
      </div>

      <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-4 py-3">
        {MESSAGES.map((m, i) => (
          <div
            key={i}
            className={cn("flex flex-col", m.fromMe ? "items-end" : "items-start")}
          >
            <p
              className={cn(
                "w-fit max-w-[80%] rounded-card px-3 py-2 text-small shadow-sm",
                m.fromMe
                  ? "rounded-br-[2px] bg-brand text-white"
                  : "rounded-bl-[2px] bg-ink-08 text-ink",
              )}
            >
              {m.text}
            </p>
            <span className="mt-0.5 flex items-center gap-1 px-1 font-mono text-[9px] text-ink-56">
              {m.time}
              {m.read && <Check className="size-2.5 text-brand" />}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 px-4 pt-1 pb-6">
        <span className="flex flex-1 items-center gap-2 rounded-pill bg-[#f2f2f2] px-3.5 py-2.5">
          <Plus className="size-4 text-ink-56" />
          <span className="flex-1 text-small text-ink-56">Message…</span>
        </span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-white">
          <Send className="size-4" />
        </span>
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

      <div className="flex items-center gap-2 border-b border-ink-08 px-4 pt-11 pb-2.5">
        <span className="text-lead font-medium tracking-[-0.02em]">
          Glimpse
        </span>
        <Bell className="ml-auto size-4 text-ink-56" />
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-[10px] font-medium text-brand">
            S
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-small font-medium">
              studio.travels
            </span>
            <span className="block font-mono text-[9px] text-ink-56">
              Sponsored
            </span>
          </span>
        </div>

        <div className="mx-4 flex aspect-square items-center justify-center rounded-card bg-gradient-to-br from-brand/20 via-[#2f9bd6]/20 to-success-bright/20">
          <Sparkle className="size-8 text-brand/50" />
        </div>

        <div className="flex items-center gap-4 px-4 pt-3">
          <span className="flex items-center gap-1.5 text-ink">
            <Heart className="size-5" />
            <span className="font-mono text-[11px] tabular-nums">248</span>
          </span>
          <span className="flex items-center gap-1.5 text-ink-56">
            <Comment className="size-5" />
            <span className="font-mono text-[11px] tabular-nums">32</span>
          </span>
        </div>

        <p className="px-4 pt-2 text-small text-ink-60">
          <span className="font-medium text-ink">studio.travels</span> New
          drop, live now.
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-ink-08 px-8 py-3 pb-6">
        {FEED_TABS.map((tab, i) => (
          <tab.icon
            key={i}
            className={cn("size-6", tab.active ? "text-ink" : "text-ink-56")}
          />
        ))}
        <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-[9px] font-medium text-brand">
          M
        </span>
      </div>
    </div>
  );
}

/** Dispatch / logistics app — "Hopon", generic ride/delivery request. */
const BLOCKS = [
  { top: "8%", left: "10%" },
  { top: "20%", left: "56%" },
  { top: "34%", left: "18%" },
  { top: "44%", left: "68%" },
  { top: "56%", left: "36%" },
  { top: "12%", left: "78%" },
  { top: "28%", left: "34%" },
];

export function DispatchScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#eef0ea]">
      <StatusBar />

      <div className="relative flex-1">
        {BLOCKS.map((b, i) => (
          <span
            key={i}
            className="absolute size-8 rounded-[4px] bg-white shadow-sm"
            style={{ top: b.top, left: b.left }}
          />
        ))}
        <span className="absolute top-1/2 left-1/2 grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-card ring-4 ring-brand/20">
          <MapPin className="size-4" />
        </span>

        <span className="absolute top-12 left-1/2 -translate-x-1/2 rounded-pill bg-white px-3 py-1.5 font-mono text-[10px] font-medium text-ink shadow-card">
          Hopon
        </span>
      </div>

      <div className="rounded-t-panel bg-white p-4 pb-6 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
        <span className="mx-auto mb-3 block h-1 w-9 rounded-pill bg-ink-08" />

        <div className="flex items-center gap-2 rounded-pill bg-[#f2f2f2] px-3.5 py-2.5 text-small text-ink-56">
          <Search className="size-4" />
          Where to?
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-card bg-brand-soft p-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white font-mono text-[10px] font-medium text-brand">
            DR
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-small font-medium text-ink">
              Driver arriving
            </span>
            <span className="block font-mono text-[10px] text-ink-56">
              3 min away
            </span>
          </span>
          <span className="rounded-pill bg-brand px-3.5 py-1.5 text-small font-medium text-white">
            Request
          </span>
        </div>
      </div>
    </div>
  );
}

/** Maps / field-service app — "Waypoint", generic route + stop list. */
const STOPS = [
  { name: "Site A — install", eta: "9:20 AM", done: true },
  { name: "Site B — inspection", eta: "11:00 AM", done: false },
  { name: "Site C — repair", eta: "1:40 PM", done: false },
];

export function MapsScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#eef1ea]">
      <StatusBar />

      <div className="relative flex-1 pt-11">
        <span className="absolute top-14 left-1/2 flex w-[86%] -translate-x-1/2 items-center gap-2 rounded-pill bg-white px-3.5 py-2.5 text-small text-ink-56 shadow-card">
          <Search className="size-4 shrink-0" />
          Search a route
        </span>

        <svg viewBox="0 0 200 300" className="absolute inset-0 h-full w-full">
          <path
            d="M20 260 C 60 200, 40 140, 100 110 S 170 40, 180 20"
            fill="none"
            stroke="#1b2bb8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 10"
          />
        </svg>
        {["20% 87%", "50% 37%", "90% 7%"].map((pos, i) => {
          const [left, top] = pos.split(" ");
          return (
            <span
              key={i}
              className="absolute grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand font-mono text-[10px] font-medium text-white shadow-card"
              style={{ left, top }}
            >
              {i + 1}
            </span>
          );
        })}
      </div>

      <div className="rounded-t-panel bg-white p-4 pb-6 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
        <span className="mx-auto mb-3 block h-1 w-9 rounded-pill bg-ink-08" />

        <div className="flex items-center justify-between">
          <p className="text-small font-medium">Today&apos;s route</p>
          <span className="font-mono text-[10px] text-ink-56">3 stops</span>
        </div>

        <ul className="mt-2.5 flex flex-col gap-2">
          {STOPS.map((stop) => (
            <li
              key={stop.name}
              className="flex items-center gap-2 border-b border-ink-08 pb-2 last:border-0"
            >
              {stop.done ? (
                <Star className="size-4 shrink-0 text-success" />
              ) : (
                <span className="size-4 shrink-0 rounded-full border border-ink-08" />
              )}
              <span className="min-w-0 flex-1 truncate text-small">
                {stop.name}
              </span>
              <span className="font-mono text-[10px] text-ink-56">
                {stop.eta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
