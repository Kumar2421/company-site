"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Bell,
  ChevronDown,
  Plus,
  Search,
  Sparkle,
  Star,
} from "@/components/icons";
import {
  AppstoreOutlined,
  BellOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  DownOutlined,
  FunnelPlotOutlined,
  MailOutlined,
  PlusOutlined,
  RiseOutlined,
  SearchOutlined,
  SettingOutlined,
  ShareAltOutlined,
  SyncOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="currentColor">
      <path d="M2.5 1.5v9l7-4.5-7-4.5Z" />
    </svg>
  );
}

/**
 * Desktop-panel frame (traffic-light chrome bar) used for the dashboard
 * mockups in Steps — a browser-window shape reads correctly for SaaS
 * dashboards, where the inherited phone bezel did not.
 */
export function PanelMockup({
  children,
  className,
  title,
}: {
  children?: ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-[560px] overflow-hidden rounded-panel border border-ink-08 bg-white shadow-float",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-08 bg-surface px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 truncate font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
          {title}
        </span>
      </div>
      <div className="h-[360px] overflow-hidden">{children}</div>
    </div>
  );
}

/** CRM record table — companies view, Twenty-style. */
const COMPANIES = [
  { name: "Northwind Retail", owner: "A. Reyes", value: "$24,000", stage: "Won" },
  { name: "Lakeside Robotics", owner: "M. Kwan", value: "$61,500", stage: "Proposal" },
  { name: "Vertex Logistics", owner: "S. Dutta", value: "$9,200", stage: "Lost" },
  { name: "Harbor & Finch", owner: "A. Reyes", value: "$38,000", stage: "Negotiation" },
  { name: "Bluepeak Health", owner: "J. Novak", value: "$52,400", stage: "Won" },
  { name: "Cedar Ridge Foods", owner: "M. Kwan", value: "$14,800", stage: "Qualifying" },
];

const STAGE_STYLE: Record<string, string> = {
  Won: "bg-[#cfe9dc] text-[#12523a]",
  Lost: "bg-ink-08 text-ink-56",
  Proposal: "bg-brand-soft text-brand",
  Negotiation: "bg-brand-soft text-brand",
  Qualifying: "bg-ink-08 text-ink-60",
};

export function CrmTableScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <div className="flex items-center gap-3 border-b border-ink-08 px-4 py-2.5">
        <span className="text-small font-medium">All companies</span>
        <span className="rounded-pill bg-ink-08 px-2 py-0.5 font-mono text-[10px] text-ink-56">
          {COMPANIES.length}
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-pill border border-ink-08 px-2.5 py-1 text-[11px] text-ink-56">
          <Plus className="size-3.5" />
          New
        </span>
      </div>

      <div className="grid grid-cols-[20px_1fr_88px_84px_96px] items-center gap-2 border-b border-ink-08 px-4 py-2 font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
        <span className="size-3 rounded-[3px] border border-ink-08" />
        <span className="flex items-center gap-1">
          Company
          <ChevronDown className="size-3" />
        </span>
        <span>Owner</span>
        <span>Value</span>
        <span>Stage</span>
      </div>

      <ul className="flex-1 overflow-hidden">
        {COMPANIES.map((row, i) => (
          <li
            key={row.name}
            className="grid grid-cols-[20px_1fr_88px_84px_96px] items-center gap-2 border-b border-ink-08 px-4 py-2.5"
          >
            <span
              className={cn(
                "size-3 rounded-[3px] border",
                i === 0 ? "border-brand bg-brand" : "border-ink-08",
              )}
            />
            <span className="flex items-center gap-2 truncate text-small font-medium">
              <span className="grid size-6 shrink-0 place-items-center rounded-[6px] bg-brand-soft font-mono text-[9px] text-brand">
                {row.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="truncate">{row.name}</span>
              {i === 0 && <Star className="size-3 shrink-0 text-[#e8a723]" />}
            </span>
            <span className="truncate text-[11px] text-ink-56">{row.owner}</span>
            <span className="truncate font-mono text-[11px] tabular-nums">
              {row.value}
            </span>
            <span
              className={cn(
                "w-fit rounded-pill px-2 py-0.5 font-mono text-[9px] tracking-[0.04em] uppercase",
                STAGE_STYLE[row.stage],
              )}
            >
              {row.stage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Lead-generation screen — an intent-signal feed, structurally distinct from
 * the CRM table: cards not rows, severity-led not alphabetical, evidence
 * copy instead of column values.
 */
const SIGNAL_FILTERS = ["All", "Hot", "Warm", "Cool"];

const SIGNALS = [
  {
    company: "Summit Dental Group",
    meta: "Dental clinic · 8 staff",
    severity: "hot",
    finding: "No website found",
    evidence: "Listing only — no domain resolves for the business name.",
  },
  {
    company: "Ironclad Roofing",
    meta: "Construction · 14 staff",
    severity: "hot",
    finding: "Domain expired 9 days ago",
    evidence: "WHOIS shows lapsed registration; site returns a parking page.",
  },
  {
    company: "Coastal Fitness Co",
    meta: "Wellness · 22 staff",
    severity: "warm",
    finding: "Site loads in 6.8s on mobile",
    evidence: "Above the 3s threshold where most visitors bounce.",
  },
  {
    company: "Verdant Apparel",
    meta: "Retail · 31 staff",
    severity: "cool",
    finding: "Hiring 4 roles, no CRM detected",
    evidence: "Job board postings found; no CRM footprint on their stack.",
  },
];

const SEVERITY_STYLE: Record<string, { dot: string; label: string }> = {
  hot: { dot: "bg-[#d1483a]", label: "text-[#d1483a]" },
  warm: { dot: "bg-[#c98a1f]", label: "text-[#c98a1f]" },
  cool: { dot: "bg-brand", label: "text-brand" },
};

export function LeadGenScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f7f6f3] text-ink">
      <div className="flex items-center gap-2 border-b border-ink-08 bg-white px-4 py-2.5">
        <Search className="size-4 text-ink-56" />
        <span className="flex-1 truncate text-small text-ink-56">
          Describe what you sell — we surface who needs it
        </span>
        <span className="rounded-pill bg-ink-08 px-2 py-0.5 font-mono text-[9px] text-ink-56">
          3,760 left
        </span>
      </div>

      <div className="flex items-center gap-1.5 border-b border-ink-08 bg-white px-4 py-2">
        {SIGNAL_FILTERS.map((filter, i) => (
          <span
            key={filter}
            className={cn(
              "rounded-pill px-2.5 py-1 font-mono text-[10px] uppercase",
              i === 0
                ? "bg-ink text-white"
                : "border border-ink-08 text-ink-56",
            )}
          >
            {filter}
          </span>
        ))}
      </div>

      <ul className="grid flex-1 grid-cols-2 gap-2 overflow-hidden p-3">
        {SIGNALS.map((signal) => {
          const style = SEVERITY_STYLE[signal.severity];
          return (
            <li
              key={signal.company}
              className="flex flex-col rounded-card border border-ink-08 bg-white p-3"
            >
              <span className="flex items-center gap-1.5">
                <span className={cn("size-1.5 rounded-full", style.dot)} />
                <span
                  className={cn(
                    "font-mono text-[9px] tracking-[0.04em] uppercase",
                    style.label,
                  )}
                >
                  {signal.severity}
                </span>
                <span className="truncate text-[11px] font-medium">
                  {signal.company}
                </span>
              </span>
              <span className="mt-0.5 truncate font-mono text-[9px] text-ink-56">
                {signal.meta}
              </span>
              <span className="mt-2 text-[11px] font-medium">
                {signal.finding}
              </span>
              <span className="mt-1 line-clamp-2 text-[10px] text-ink-56">
                {signal.evidence}
              </span>
              <span className="mt-auto inline-flex w-fit items-center gap-1 pt-2 font-mono text-[9px] text-brand uppercase">
                <Plus className="size-3" />
                Add to campaign
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Social automation screen — a weekly calendar grid, structurally distinct
 * from the CRM table and the lead-gen card feed: day columns with post
 * chips slotted into them, not rows or cards.
 */
const CHANNEL_DOT: Record<string, string> = {
  Instagram: "bg-[#c23b8f]",
  LinkedIn: "bg-[#1b6ac2]",
  X: "bg-ink",
};

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const CALENDAR: Record<string, { time: string; copy: string; channel: string }[]> = {
  Mon: [
    { time: "09:00", copy: "Faster onboarding flow", channel: "LinkedIn" },
    { time: "13:30", copy: "Studio behind the scenes", channel: "Instagram" },
  ],
  Tue: [{ time: "10:00", copy: "3-week deployment case study", channel: "X" }],
  Wed: [{ time: "08:00", copy: "Hiring: ML engineer", channel: "LinkedIn" }],
  Thu: [],
  Fri: [
    { time: "11:00", copy: "Client launch recap", channel: "Instagram" },
    { time: "16:00", copy: "Weekly build notes", channel: "X" },
  ],
};

export function SocialAutomationScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      <div className="flex items-center gap-2 border-b border-ink-08 px-4 py-2.5">
        <Sparkle className="size-4 text-brand" />
        <span className="flex-1 truncate text-small font-medium">
          This week
        </span>
        <span className="flex items-center gap-2">
          {Object.entries(CHANNEL_DOT).map(([name, dot]) => (
            <span key={name} className="flex items-center gap-1">
              <span className={cn("size-1.5 rounded-full", dot)} />
              <span className="font-mono text-[9px] text-ink-56">{name}</span>
            </span>
          ))}
        </span>
      </div>

      <div className="grid flex-1 grid-cols-5 divide-x divide-ink-08 overflow-hidden">
        {WEEK.map((day) => (
          <div key={day} className="flex flex-col">
            <span className="border-b border-ink-08 py-1.5 text-center font-mono text-[9px] tracking-[0.06em] text-ink-56 uppercase">
              {day}
            </span>
            <div className="flex flex-1 flex-col gap-1.5 p-1.5">
              {CALENDAR[day].map((post) => (
                <span
                  key={post.time}
                  className="rounded-[6px] border border-ink-08 bg-surface p-1.5"
                >
                  <span className="flex items-center gap-1">
                    <span
                      className={cn(
                        "size-1.5 shrink-0 rounded-full",
                        CHANNEL_DOT[post.channel],
                      )}
                    />
                    <span className="font-mono text-[8px] text-ink-56">
                      {post.time}
                    </span>
                  </span>
                  <span className="mt-1 block text-[9.5px] leading-tight text-ink">
                    {post.copy}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-ink-08 px-4 py-2">
        <Bell className="size-3.5 text-ink-56" />
        <span className="font-mono text-[10px] text-ink-56">
          Queue synced across 3 channels
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-brand px-2.5 py-1 text-[10px] font-medium text-white">
          <Plus className="size-3" />
          New post
        </span>
      </div>
    </div>
  );
}

/**
 * AI Platform screen — the Inference tab of the real MLForge app, recreated
 * in the marketing site's light/brand-blue palette. Structure only: same
 * panels as the product (config, image + overlay, analytics, run history),
 * no invented features added.
 */
const TABS_AI = [
  "Explore",
  "Benchmark",
  "Datasets",
  "Inference",
  "Training",
  "Logs",
  "Export",
];

const DETECTIONS = [
  { label: "car 0.99", top: "18%", left: "14%" },
  { label: "car 0.98", top: "30%", left: "52%" },
  { label: "car 0.96", top: "55%", left: "22%" },
  { label: "car 0.93", top: "62%", left: "68%" },
];

const RUN_HISTORY = [
  { run: "Run #17", model: "yoloface v1.0", latency: "81ms", throughput: "12.4 img/s", objects: 87 },
  { run: "Run #16", model: "yoloface v1.0", latency: "60ms", throughput: "16.6 img/s", objects: 82 },
  { run: "Run #15", model: "yoloface v1.0", latency: "38ms", throughput: "26.0 img/s", objects: 91 },
];

export function AiPlatformScreen() {
  return (
    <div className="flex h-full flex-col bg-white text-ink">
      {/* Top bar: breadcrumb + tabs */}
      <div className="flex items-center gap-1.5 border-b border-ink-08 px-3 py-1.5 font-mono text-[9px] text-ink-56">
        <span className="font-medium text-ink">MLForge</span>
        <span>/</span>
        <span>test8</span>
      </div>
      <div className="flex items-center gap-3 overflow-hidden border-b border-ink-08 px-3">
        {TABS_AI.map((tab) => (
          <span
            key={tab}
            className={cn(
              "-mb-px shrink-0 border-b-2 py-2 text-[10px]",
              tab === "Inference"
                ? "border-brand font-medium text-ink"
                : "border-transparent text-ink-56",
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-[112px_1fr_120px] divide-x divide-ink-08 overflow-hidden">
        {/* Inference config */}
        <div className="flex flex-col gap-3 p-2.5">
          <span className="font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
            Model
          </span>
          <span className="rounded-[6px] border border-brand/40 bg-brand-soft p-1.5">
            <span className="block truncate text-[9px] font-medium">
              yoloface
            </span>
            <span className="block font-mono text-[8px] text-ink-56">v1.0</span>
          </span>

          <span className="font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
            Input
          </span>
          <span className="rounded-[6px] bg-brand px-1.5 py-1 text-center text-[8px] font-medium text-white">
            Image
          </span>

          <span className="font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
            Threshold
          </span>
          <span className="block h-1 w-full rounded-pill bg-ink-08">
            <span className="block h-full w-1/4 rounded-pill bg-brand" />
          </span>

          <span className="mt-auto inline-flex items-center justify-center gap-1 rounded-pill bg-brand py-1.5 text-[8px] font-medium text-white">
            <PlayGlyph className="size-2" />
            Run
          </span>
        </div>

        {/* Detection image */}
        <div className="relative flex flex-col bg-[#f4f4f4]">
          <div className="flex items-center gap-2 border-b border-ink-08 bg-white px-2.5 py-1.5">
            <span className="truncate font-mono text-[8px] text-ink-56">
              traffic_annotation.jpg
            </span>
            <span className="ml-auto rounded-pill bg-brand-soft px-1.5 py-0.5 font-mono text-[8px] text-brand">
              Overlay
            </span>
          </div>
          <div className="relative flex-1">
            {DETECTIONS.map((d) => (
              <span
                key={d.label}
                className="absolute rounded-[3px] border border-brand"
                style={{ top: d.top, left: d.left, width: "18%", height: "14%" }}
              >
                <span className="absolute -top-3.5 left-0 rounded-[3px] bg-brand px-1 font-mono text-[7px] text-white">
                  {d.label}
                </span>
              </span>
            ))}
          </div>
          <span className="absolute bottom-2 left-2 rounded-pill bg-white/90 px-2 py-0.5 font-mono text-[8px] text-ink-56 shadow-card">
            87 objects detected
          </span>
        </div>

        {/* Analytics */}
        <div className="flex flex-col gap-2.5 p-2.5">
          <span className="font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
            Performance
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            <span className="rounded-[6px] bg-surface p-1.5">
              <span className="block font-mono text-[7px] text-ink-56">
                Throughput
              </span>
              <span className="block text-[10px] font-medium text-brand">
                12.4 fps
              </span>
            </span>
            <span className="rounded-[6px] bg-surface p-1.5">
              <span className="block font-mono text-[7px] text-ink-56">
                Latency
              </span>
              <span className="block text-[10px] font-medium text-brand">
                81 ms
              </span>
            </span>
          </div>

          <span className="mt-1 font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
            Detected classes
          </span>
          <span className="flex items-center justify-between rounded-[6px] bg-surface px-1.5 py-1">
            <span className="text-[9px] font-medium">car</span>
            <span className="font-mono text-[9px] tabular-nums text-ink-56">
              87
            </span>
          </span>
        </div>
      </div>

      {/* Run history */}
      <div className="border-t border-ink-08">
        <div className="grid grid-cols-[64px_88px_1fr_1fr_60px] gap-1.5 px-3 py-1.5 font-mono text-[8px] tracking-[0.04em] text-ink-56 uppercase">
          <span>Run</span>
          <span>Model</span>
          <span>Latency</span>
          <span>Throughput</span>
          <span>Objects</span>
        </div>
        {RUN_HISTORY.map((row) => (
          <div
            key={row.run}
            className="grid grid-cols-[64px_88px_1fr_1fr_60px] items-center gap-1.5 border-t border-ink-08 px-3 py-1.5 font-mono text-[9px]"
          >
            <span className="truncate font-medium">{row.run}</span>
            <span className="truncate text-ink-56">{row.model}</span>
            <span className="text-success-bright">{row.latency}</span>
            <span className="text-ink-56">{row.throughput}</span>
            <span className="tabular-nums">{row.objects}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Full-detail lead-generation screen, hero-scale — same rail + top-bar +
 * metrics shell as HeroDashboard, so the CRM and lead-gen panels read as one
 * family, with the signal-feed canvas from LeadGenScreen scaled up.
 */
const LEADGEN_RAIL = [
  { icon: ThunderboltFilled, label: "Signals", active: true, badge: "12" },
  { icon: FunnelPlotOutlined, label: "Pipeline" },
  { icon: RiseOutlined, label: "Enrich" },
  { icon: MailOutlined, label: "Engage" },
  { icon: SyncOutlined, label: "Automate" },
  { icon: SettingOutlined, label: "Settings" },
];

const LEADGEN_METRICS = [
  { label: "Signals", value: "312", delta: "+24" },
  { label: "Hot", value: "48", delta: "+6" },
  { label: "Added", value: "19", delta: "this week" },
];

const LEADGEN_SIGNALS = [
  {
    company: "Summit Dental Group",
    meta: "Dental clinic · 8 staff",
    severity: "hot",
    finding: "No website found",
    evidence: "Listing only — no domain resolves for the business name.",
  },
  {
    company: "Ironclad Roofing",
    meta: "Construction · 14 staff",
    severity: "hot",
    finding: "Domain expired 9 days ago",
    evidence: "WHOIS shows lapsed registration; site returns a parking page.",
  },
  {
    company: "Coastal Fitness Co",
    meta: "Wellness · 22 staff",
    severity: "warm",
    finding: "Site loads in 6.8s on mobile",
    evidence: "Above the 3s threshold where most visitors bounce.",
  },
  {
    company: "Verdant Apparel",
    meta: "Retail · 31 staff",
    severity: "cool",
    finding: "Hiring 4 roles, no CRM detected",
    evidence: "Job board postings found; no CRM footprint on their stack.",
  },
];

const LEADGEN_SEVERITY: Record<string, { dot: string; label: string }> = {
  hot: { dot: "bg-[#d1483a]", label: "text-[#d1483a]" },
  warm: { dot: "bg-[#c98a1f]", label: "text-[#c98a1f]" },
  cool: { dot: "bg-brand", label: "text-brand" },
};

export function LeadGenPlatformScreen() {
  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden rounded-panel border border-ink-08 bg-bg shadow-float select-none"
    >
      <aside className="hidden w-[172px] shrink-0 border-r border-ink-08 bg-surface/60 p-3 lg:block">
        <span className="flex items-center gap-2 px-2 py-1.5">
          <span className="grid size-6 place-items-center rounded-[7px] bg-brand text-[11px] font-semibold text-white">
            M
          </span>
          <span className="text-small font-medium tracking-[-0.02em]">
            Leads
          </span>
          <DownOutlined className="ml-auto text-[9px] text-ink-56" />
        </span>

        <ul className="mt-4 space-y-0.5">
          {LEADGEN_RAIL.map((item) => (
            <li key={item.label}>
              <span
                className={cn(
                  "flex items-center gap-2.5 rounded-[7px] px-2 py-[7px] text-small",
                  item.active
                    ? "bg-brand-soft font-medium text-brand"
                    : "text-ink-56",
                )}
              >
                <item.icon className="text-[13px]" />
                {item.label}
                {item.badge && (
                  <span className="ml-auto grid size-4 place-items-center rounded-full bg-[#b5651d] text-[9px] font-medium text-white">
                    {item.badge}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex h-[46px] items-center gap-2 border-b border-ink-08 px-3 sm:px-4">
          <SearchOutlined className="text-[12px] text-ink-56" />
          <span className="flex-1 truncate text-small text-ink-56">
            Describe what you sell — we surface who needs it
          </span>
          <span className="rounded-pill bg-ink-08 px-2 py-0.5 font-mono text-[9px] text-ink-56">
            3,760 left
          </span>
        </div>

        <div className="flex items-center gap-1.5 border-b border-ink-08 px-3 py-2 sm:px-4">
          {["All", "Hot", "Warm", "Cool"].map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "rounded-pill px-2.5 py-1 font-mono text-[10px] uppercase",
                i === 0 ? "bg-ink text-white" : "border border-ink-08 text-ink-56",
              )}
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="flex items-stretch gap-3 border-b border-ink-08 px-3 py-2.5 sm:px-4">
          {LEADGEN_METRICS.map((m) => (
            <div key={m.label} className="min-w-0 flex-1">
              <span className="block truncate font-mono text-[10px] text-ink-56">
                {m.label}
              </span>
              <span className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-small font-medium tabular-nums">
                  {m.value}
                </span>
                <span className="font-mono text-[9px] text-success">
                  {m.delta}
                </span>
              </span>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 p-3 sm:p-4">
          {LEADGEN_SIGNALS.map((signal) => {
            const style = LEADGEN_SEVERITY[signal.severity];
            return (
              <li
                key={signal.company}
                className="flex flex-col rounded-card border border-ink-08 bg-surface p-3"
              >
                <span className="flex items-center gap-1.5">
                  <span className={cn("size-1.5 rounded-full", style.dot)} />
                  <span
                    className={cn(
                      "font-mono text-[9px] tracking-[0.04em] uppercase",
                      style.label,
                    )}
                  >
                    {signal.severity}
                  </span>
                  <span className="truncate text-[11px] font-medium">
                    {signal.company}
                  </span>
                </span>
                <span className="mt-0.5 truncate font-mono text-[9px] text-ink-56">
                  {signal.meta}
                </span>
                <span className="mt-2 text-[11px] font-medium">
                  {signal.finding}
                </span>
                <span className="mt-1 line-clamp-2 text-[10px] text-ink-56">
                  {signal.evidence}
                </span>
                <span className="mt-auto inline-flex w-fit items-center gap-1 pt-2 font-mono text-[9px] text-brand uppercase">
                  <PlusOutlined className="text-[9px]" />
                  Add to campaign
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * Full-detail social automation screen, hero-scale — same rail shell,
 * bigger calendar canvas than SocialAutomationScreen.
 */
const SOCIAL_RAIL = [
  { icon: AppstoreOutlined, label: "Composer" },
  { icon: CalendarOutlined, label: "Queue", active: true },
  { icon: ShareAltOutlined, label: "Channels" },
  { icon: FunnelPlotOutlined, label: "Analytics" },
  { icon: SettingOutlined, label: "Settings" },
];

const SOCIAL_METRICS = [
  { label: "Scheduled", value: "18", delta: "this week" },
  { label: "Channels", value: "3", delta: "connected" },
  { label: "Engagement", value: "4.2%", delta: "+0.6" },
];

const SOCIAL_CHANNEL_DOT: Record<string, string> = {
  Instagram: "bg-[#c23b8f]",
  LinkedIn: "bg-brand",
  X: "bg-ink",
};

const SOCIAL_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const SOCIAL_CALENDAR: Record<
  string,
  { time: string; copy: string; channel: string }[]
> = {
  Mon: [
    { time: "09:00", copy: "Faster onboarding flow", channel: "LinkedIn" },
    { time: "13:30", copy: "Studio behind the scenes", channel: "Instagram" },
  ],
  Tue: [{ time: "10:00", copy: "3-week deployment case study", channel: "X" }],
  Wed: [{ time: "08:00", copy: "Hiring: ML engineer", channel: "LinkedIn" }],
  Thu: [{ time: "12:00", copy: "Client Q&A recap", channel: "Instagram" }],
  Fri: [
    { time: "11:00", copy: "Client launch recap", channel: "Instagram" },
    { time: "16:00", copy: "Weekly build notes", channel: "X" },
  ],
  Sat: [],
  Sun: [{ time: "18:00", copy: "Week ahead preview", channel: "LinkedIn" }],
};

export function SocialAutomationPlatformScreen() {
  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden rounded-panel border border-ink-08 bg-bg shadow-float select-none"
    >
      <aside className="hidden w-[172px] shrink-0 border-r border-ink-08 bg-surface/60 p-3 lg:block">
        <span className="flex items-center gap-2 px-2 py-1.5">
          <span className="grid size-6 place-items-center rounded-[7px] bg-brand text-[11px] font-semibold text-white">
            M
          </span>
          <span className="text-small font-medium tracking-[-0.02em]">
            Social
          </span>
          <DownOutlined className="ml-auto text-[9px] text-ink-56" />
        </span>

        <ul className="mt-4 space-y-0.5">
          {SOCIAL_RAIL.map((item) => (
            <li key={item.label}>
              <span
                className={cn(
                  "flex items-center gap-2.5 rounded-[7px] px-2 py-[7px] text-small",
                  item.active
                    ? "bg-brand-soft font-medium text-brand"
                    : "text-ink-56",
                )}
              >
                <item.icon className="text-[13px]" />
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex h-[46px] items-center gap-2 border-b border-ink-08 px-3 sm:px-4">
          <Sparkle className="size-4 text-brand" />
          <span className="flex-1 truncate text-small font-medium">
            This week
          </span>
          <span className="flex items-center gap-2">
            {Object.entries(SOCIAL_CHANNEL_DOT).map(([name, dot]) => (
              <span key={name} className="flex items-center gap-1">
                <span className={cn("size-1.5 rounded-full", dot)} />
                <span className="font-mono text-[9px] text-ink-56">{name}</span>
              </span>
            ))}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-brand px-2.5 py-1 text-[10px] font-medium text-white">
            <PlusOutlined className="text-[10px]" />
            New post
          </span>
        </div>

        <div className="flex items-stretch gap-3 border-b border-ink-08 px-3 py-2.5 sm:px-4">
          {SOCIAL_METRICS.map((m) => (
            <div key={m.label} className="min-w-0 flex-1">
              <span className="block truncate font-mono text-[10px] text-ink-56">
                {m.label}
              </span>
              <span className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-small font-medium tabular-nums">
                  {m.value}
                </span>
                <span className="font-mono text-[9px] text-success">
                  {m.delta}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 divide-x divide-ink-08">
          {SOCIAL_WEEK.map((day) => (
            <div key={day} className="flex flex-col">
              <span className="border-b border-ink-08 py-1.5 text-center font-mono text-[9px] tracking-[0.06em] text-ink-56 uppercase">
                {day}
              </span>
              <div className="flex min-h-[180px] flex-col gap-1.5 p-1.5">
                {SOCIAL_CALENDAR[day].map((post) => (
                  <span
                    key={post.time}
                    className="rounded-[6px] border border-ink-08 bg-surface p-1.5"
                  >
                    <span className="flex items-center gap-1">
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full",
                          SOCIAL_CHANNEL_DOT[post.channel],
                        )}
                      />
                      <span className="font-mono text-[8px] text-ink-56">
                        {post.time}
                      </span>
                    </span>
                    <span className="mt-1 block text-[9.5px] leading-tight text-ink">
                      {post.copy}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-ink-08 px-3 py-1.5 sm:px-4">
          <BellOutlined className="text-[11px] text-ink-56" />
          <span className="font-mono text-[10px] text-ink-56">
            Queue synced across 3 channels
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-ink-56">
            <CheckCircleFilled className="text-[11px] text-success" />
            All connected
          </span>
        </div>
      </div>
    </div>
  );
}
