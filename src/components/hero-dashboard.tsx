"use client";

import {
  AppstoreOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ContactsOutlined,
  DollarOutlined,
  DownOutlined,
  ExclamationCircleFilled,
  ExpandOutlined,
  FilterOutlined,
  FunnelPlotOutlined,
  InfoCircleFilled,
  LineChartOutlined,
  MailOutlined,
  PlayCircleFilled,
  RiseOutlined,
  RobotOutlined,
  SaveOutlined,
  SendOutlined,
  SettingOutlined,
  ShareAltOutlined,
  SyncOutlined,
  TeamOutlined,
  ThunderboltFilled,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";

/**
 * Animated illustration of an AI sales console: a lead-routing pipeline with a
 * live run streaming into the metrics, activity log, inspector and chat panes.
 *
 * Decorative, so the whole tree is aria-hidden — the hero heading carries the
 * meaning. All motion is CSS on a single 20s loop (see the `.nova-a-*` classes in
 * globals.css) so there is no JS on the critical path and nothing reflows.
 */

const RAIL = [
  { icon: AppstoreOutlined, label: "Overview" },
  { icon: FunnelPlotOutlined, label: "Pipeline", active: true },
  { icon: ContactsOutlined, label: "Contacts" },
  { icon: TeamOutlined, label: "Accounts" },
  { icon: LineChartOutlined, label: "Forecast", badge: "2" },
  { icon: SettingOutlined, label: "Settings" },
];

const TABS = ["Board", "Activity", "Forecast"];

const METRICS = [
  { label: "Pipeline", value: "$1.24M", delta: "+8.2%" },
  { label: "Win rate", value: "31.4%", delta: "+2.6" },
  { label: "Avg deal", value: "$18.6k", delta: "+4.1%" },
];

const NODES = [
  { icon: RiseOutlined, title: "Lead scoring", meta: "Model v24" },
  { icon: ContactsOutlined, title: "Enrichment", meta: "Firmographics" },
  { icon: MailOutlined, title: "Outreach", meta: "Sequence" },
  { icon: CalendarOutlined, title: "Meeting booking", meta: "Calendar" },
];

const TOOLS = [
  { icon: DollarOutlined, title: "score_lead", meta: "Tool · 42ms" },
  { icon: MailOutlined, title: "draft_reply", meta: "Tool · 18ms" },
];

const LOGS = [
  { level: "info", time: "14:32:01", message: "Lead captured · Northwind" },
  { level: "info", time: "14:32:02", message: "Enriched · 240 employees" },
  { level: "warn", time: "14:32:03", message: "Duplicate account flagged" },
  { level: "info", time: "14:32:03", message: "Scored 87 · tier A" },
  { level: "warn", time: "14:32:04", message: "Owner capacity at 92%" },
  { level: "ok", time: "14:32:04", message: "Meeting booked · Thu 10:00" },
];

const LEVEL = {
  info: { icon: InfoCircleFilled, className: "text-brand" },
  warn: { icon: ExclamationCircleFilled, className: "text-[#b5651d]" },
  ok: { icon: CheckCircleFilled, className: "text-success" },
} as const;

export function HeroDashboard() {
  return (
    <div
      aria-hidden="true"
      className="nova-live relative overflow-hidden rounded-panel border border-ink-08 bg-bg shadow-float select-none"
    >
      {/*
        Travelling pointer. The animated element is inset-0 so it matches the
        container's box — percentage transforms resolve against the element's own
        size, so a 20px glyph would only ever move 20px. The pointer glyph rides
        at its top-left corner.
      */}
      <div
        data-live="cursor"
        className="nova-a-cursor pointer-events-none absolute inset-0 z-30 hidden sm:block"
      >
        <span className="absolute top-0 left-0 block">
          <span className="nova-a-click absolute -top-1.5 -left-1.5 block size-8 rounded-full bg-brand" />
          <svg viewBox="0 0 20 20" className="relative size-5 drop-shadow-sm">
            <path
              d="M4 2.2 15.4 9.6l-4.7.7-2 4.4z"
              fill="#ffffff"
              stroke="#0b0b0b"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <div className="flex">
        {/* Left rail */}
        <aside className="hidden w-[172px] shrink-0 border-r border-ink-08 bg-surface/60 p-3 lg:block">
          <span className="flex items-center gap-2 px-2 py-1.5">
            <span className="grid size-6 place-items-center rounded-[7px] bg-brand text-[11px] font-semibold text-white">
              M
            </span>
            <span className="text-small font-medium tracking-[-0.02em]">
              MLForge
            </span>
            <DownOutlined className="ml-auto text-[9px] text-ink-56" />
          </span>

          <ul className="mt-4 space-y-0.5">
            {RAIL.map((item) => (
              <li key={item.label}>
                <span
                  className={`flex items-center gap-2.5 rounded-[7px] px-2 py-[7px] text-small ${
                    item.active
                      ? "bg-brand-soft font-medium text-brand"
                      : "text-ink-56"
                  }`}
                >
                  <item.icon className="text-[13px]" />
                  {item.label}
                  {item.badge && (
                    <span
                      data-live="badge"
                      className="nova-a-badge ml-auto grid size-4 place-items-center rounded-full bg-[#b5651d] text-[9px] font-medium text-white"
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <span className="mt-5 block px-2 font-mono text-[10px] tracking-[0.08em] text-ink-56 uppercase">
            Segments
          </span>
          <ul className="mt-2 space-y-0.5">
            {["Enterprise", "Mid-market", "Renewals"].map((p, i) => (
              <li
                key={p}
                className="flex items-center gap-2 px-2 py-[6px] text-small text-ink-56"
              >
                <span
                  className={`size-1.5 shrink-0 rounded-full ${i === 0 ? "nova-a-pulse bg-success" : "bg-brand/40"}`}
                />
                {p}
              </li>
            ))}
          </ul>

          <span className="mt-6 flex items-center gap-2 rounded-card border border-ink-08 bg-surface px-2 py-2">
            <span className="grid size-5 place-items-center rounded-full bg-brand-soft text-[9px] font-medium text-brand">
              JK
            </span>
            <span className="truncate text-[11px] text-ink-56">Revenue pod</span>
          </span>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Top bar */}
          <div className="flex h-[46px] items-center gap-3 border-b border-ink-08 px-3 sm:px-4">
            <span className="truncate font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
              Pipeline / Inbound routing
            </span>

            {/* Presence: who else is in the workflow. */}
            <span className="hidden items-center lg:flex">
              {["AR", "MK", "SD"].map((who, i) => (
                <span
                  key={who}
                  className="-ml-1.5 grid size-5 place-items-center rounded-full border-2 border-bg bg-brand-soft text-[8px] font-medium text-brand first:ml-0"
                  style={{ zIndex: 3 - i }}
                >
                  {who}
                </span>
              ))}
              <span className="nova-a-pulse ml-1.5 size-1.5 rounded-full bg-success" />
            </span>

            <span className="ml-auto flex items-center gap-2">
              <span className="hidden items-center gap-1.5 text-small text-ink-56 sm:flex">
                <SyncOutlined className="text-[11px]" />
                Saved
              </span>
              <ShareAltOutlined className="hidden text-[13px] text-ink-56 sm:block" />
              <span className="nova-a-press inline-flex items-center gap-1.5 rounded-pill bg-brand px-3 py-1.5 text-small font-medium text-white">
                <PlayCircleFilled className="text-[11px]" />
                Run
              </span>
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-end gap-4 border-b border-ink-08 px-3 sm:px-4">
            {TABS.map((tab, i) => (
              <span
                key={tab}
                className={`-mb-px border-b-2 py-2 text-small ${
                  i === 0
                    ? "border-brand font-medium text-ink"
                    : "border-transparent text-ink-56"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Metrics strip — sparkline draws itself as the run completes. */}
          <div className="flex items-stretch gap-2 border-b border-ink-08 px-3 py-2.5 sm:gap-3 sm:px-4">
            {METRICS.map((m) => (
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

            <div className="hidden w-[104px] shrink-0 sm:block">
              <span className="block font-mono text-[10px] text-ink-56">
                Bookings
              </span>
              <svg viewBox="0 0 100 22" className="mt-1 h-[22px] w-full">
                <path
                  data-live="spark"
                  className="nova-a-spark"
                  d="M0 18 L14 15 L28 16 L42 10 L56 12 L70 6 L84 7 L100 2"
                  fill="none"
                  stroke="#1b2bb8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="240"
                />
              </svg>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative px-3 pt-5 pb-3 sm:px-6 sm:pt-6">
            <div className="nova-a-canvas">
              {/* Trigger node */}
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-pill border border-ink-08 bg-surface px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] text-ink-60 uppercase">
                  <ThunderboltFilled className="text-[10px] text-[#b5651d]" />
                  New inbound lead
                </span>
              </div>

              <svg
                viewBox="0 0 200 24"
                preserveAspectRatio="none"
                className="h-[22px] w-full"
              >
                <path
                  d="M100 0 V24"
                  fill="none"
                  stroke="#1b2bb8"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  className="nova-a-flow"
                />
              </svg>

              {/* Agent node */}
              <div className="flex justify-center">
                <div className="w-[230px] rounded-card border border-brand/40 bg-surface p-3 shadow-card sm:w-[270px]">
                  <span className="flex items-center gap-2">
                    <span className="grid size-6 place-items-center rounded-[7px] bg-brand/12 text-brand">
                      <RobotOutlined className="text-[12px]" />
                    </span>
                    <span className="text-small font-medium">
                      Lead scoring agent
                    </span>

                    <span className="relative ml-auto">
                      <span
                        data-live="running"
                        className="nova-a-running inline-flex items-center gap-1 rounded-pill bg-brand-soft px-2 py-0.5 font-mono text-[9px] tracking-[0.06em] text-brand uppercase"
                      >
                        Running
                      </span>
                      <span
                        data-live="done"
                        className="nova-a-done absolute inset-0 inline-flex items-center gap-1 rounded-pill bg-[#cfe9dc] px-2 py-0.5 font-mono text-[9px] tracking-[0.06em] text-[#12523a] uppercase"
                      >
                        Success
                      </span>
                    </span>
                  </span>

                  <span className="mt-2 block font-mono text-[10px] text-ink-56">
                    gpt-class · 6 tools · v24
                  </span>

                  {/* Run progress — scaleX so it cannot reflow the card. */}
                  <span className="mt-2 block h-1 w-full overflow-hidden rounded-pill bg-ink-08">
                    <span
                      data-live="progress"
                      className="nova-a-progress block h-full w-full rounded-pill bg-brand"
                    />
                  </span>
                </div>
              </div>

              {/* Fan-out connectors */}
              <svg
                viewBox="0 0 800 70"
                preserveAspectRatio="none"
                className="h-[44px] w-full sm:h-[56px]"
              >
                {[100, 300, 500, 700].map((x) => (
                  <path
                    key={x}
                    d={`M400 0 V28 H${x} V70`}
                    fill="none"
                    stroke="#1b2bb8"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                    className="nova-a-flow"
                  />
                ))}
              </svg>

              <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                {NODES.map((node, i) => (
                  <li
                    key={node.title}
                    className="nova-a-node rounded-card border border-ink-08 bg-surface p-2.5"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-[7px] bg-ink-08 text-ink-60">
                        <node.icon className="text-[12px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-small font-medium">
                          {node.title}
                        </span>
                        <span className="block font-mono text-[10px] text-ink-56">
                          {node.meta}
                        </span>
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tool row */}
              <ul className="mt-2 grid grid-cols-2 gap-2 sm:gap-3">
                {TOOLS.map((tool, i) => (
                  <li
                    key={tool.title}
                    className="nova-a-node flex items-center gap-2 rounded-card border border-dashed border-ink-08 bg-surface/60 p-2.5"
                    style={{ animationDelay: `${1 + i * 0.5}s` }}
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-[7px] bg-ink-08 text-ink-60">
                      <tool.icon className="text-[12px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-mono text-[11px]">
                        {tool.title}
                      </span>
                      <span className="block font-mono text-[10px] text-ink-56">
                        {tool.meta}
                      </span>
                    </span>
                    <CheckCircleFilled className="ml-auto text-[11px] text-success" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Canvas toolbar — zoom label crossfades on the 56% click. */}
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1 rounded-pill border border-ink-08 bg-surface px-2 py-1 shadow-card">
                <ZoomOutOutlined className="px-1 text-[11px] text-ink-56" />
                <span className="relative block w-[30px] text-center">
                  <span
                    data-live="zoom-a"
                    className="nova-a-zoom-a block font-mono text-[10px] tabular-nums"
                  >
                    100%
                  </span>
                  <span
                    data-live="zoom-b"
                    className="nova-a-zoom-b absolute inset-0 block font-mono text-[10px] tabular-nums text-brand"
                  >
                    120%
                  </span>
                </span>
                <ZoomInOutlined className="px-1 text-[11px] text-brand" />
                <span className="mx-0.5 h-3 w-px bg-ink-08" />
                <ExpandOutlined className="px-1 text-[11px] text-ink-56" />
              </span>
            </div>

            {/* Minimap */}
            <span className="absolute right-3 bottom-3 hidden h-[42px] w-[64px] rounded-[6px] border border-ink-08 bg-surface/80 p-1 lg:block">
              <span className="block h-1.5 w-1/3 rounded-sm bg-brand/40" />
              <span className="mt-1 flex gap-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="h-1.5 flex-1 rounded-sm bg-ink-08" />
                ))}
              </span>
              <span className="mt-1 block h-2.5 w-full rounded-sm border border-brand/40" />
            </span>
          </div>

          {/* Bottom split: chat transcript + run log */}
          <div className="grid gap-3 border-t border-ink-08 p-3 sm:p-4 lg:grid-cols-2">
            <div className="rounded-card border border-ink-08 bg-surface p-3">
              <span className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
                  Preview
                </span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-pill bg-ink-08 px-2 py-0.5 font-mono text-[9px] text-ink-60">
                  v24
                </span>
              </span>

              <div className="mt-3 space-y-2">
                <p className="ml-auto w-fit max-w-[82%] rounded-card rounded-br-[2px] bg-brand px-2.5 py-1.5 text-small text-white">
                  Who should own Northwind?
                </p>

                <p className="w-fit max-w-[86%] rounded-card rounded-bl-[2px] bg-ink-08 px-2.5 py-1.5 text-small">
                  Checking territory and capacity…
                </p>

                <p className="ml-auto w-fit max-w-[82%] rounded-card rounded-br-[2px] bg-brand px-2.5 py-1.5 text-small text-white">
                  Thanks
                </p>

                <span className="relative block h-[26px]">
                  <span
                    data-live="typing"
                    className="nova-a-typing absolute inset-y-0 left-0 inline-flex items-center gap-1 rounded-card bg-ink-08 px-2.5"
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="nova-a-dot size-1 rounded-full bg-ink-56"
                        style={{ animationDelay: `${d * 0.12}s` }}
                      />
                    ))}
                  </span>

                  <span
                    data-live="reply"
                    className="nova-a-reply absolute inset-y-0 left-0 block w-fit max-w-[88%] rounded-card rounded-bl-[2px] bg-ink-08 px-2.5 py-1.5 text-small"
                  >
                    Assigned to A. Reyes — meeting booked.
                  </span>
                </span>
              </div>

              <span className="mt-3 flex items-center gap-2 rounded-pill border border-ink-08 px-2.5 py-1.5">
                <span className="flex-1 truncate text-small text-ink-56">
                  Ask about a deal…
                </span>
                <SendOutlined className="text-[12px] text-brand" />
              </span>
            </div>

            <div className="rounded-card border border-ink-08 bg-surface p-3">
              <span className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
                  Activity
                </span>

                {/* Filter chips swap active state on the 68% click. */}
                <span className="ml-auto flex items-center gap-1">
                  <FilterOutlined className="mr-0.5 text-[10px] text-ink-56" />
                  <span className="nova-a-chip-all rounded-pill px-2 py-0.5 font-mono text-[9px]">
                    All
                  </span>
                  <span className="nova-a-chip-warn rounded-pill px-2 py-0.5 font-mono text-[9px]">
                    Warn
                  </span>
                </span>
              </span>

              {/* Fixed height + inner translate: the list scrolls without reflow. */}
              <div className="mt-1 h-[168px] overflow-hidden">
                <ul className="nova-a-logscroll">
                  {LOGS.map((log, i) => {
                    const level = LEVEL[log.level as keyof typeof LEVEL];
                    return (
                      <li
                        key={`${log.time}-${log.message}`}
                        data-live="log"
                        className="nova-a-log flex items-center gap-2 border-b border-ink-08 py-[7px] last:border-0"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <level.icon
                          className={`text-[11px] ${level.className}`}
                        />
                        <span className="font-mono text-[10px] text-ink-56 tabular-nums">
                          {log.time}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-small">
                          {log.message}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-3 border-t border-ink-08 px-3 py-1.5 sm:px-4">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-ink-56">
              <span className="nova-a-pulse size-1.5 rounded-full bg-success" />
              production
            </span>
            <span className="hidden font-mono text-[10px] text-ink-56 sm:inline">
              eu-west-1
            </span>
            <span className="ml-auto font-mono text-[10px] text-ink-56 tabular-nums">
              build 8f21c4
            </span>
          </div>
        </div>

        {/* Right inspector — reacts to the node selected mid-loop */}
        <aside className="hidden w-[212px] shrink-0 border-l border-ink-08 bg-surface/60 p-3 xl:block">
          <span className="font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
            Inspector
          </span>

          {/* Always populated — an empty panel for a third of the loop reads as
              broken. Selection is expressed by the focus ring below instead. */}
          <div className="mt-3 space-y-3">
            <label className="block">
              <span className="block font-mono text-[10px] text-ink-56">
                Deal
              </span>
              <span className="nova-a-focus mt-1 block truncate rounded-[6px] border border-ink-08 bg-surface px-2 py-1.5 text-[11px]">
                Northwind — Q3 expansion
              </span>
            </label>

            <label className="block">
              <span className="block font-mono text-[10px] text-ink-56">
                Owner
              </span>
              <span className="mt-1 flex items-center gap-1 rounded-[6px] border border-ink-08 bg-surface px-2 py-1.5">
                <span className="flex-1 truncate text-[11px]">A. Reyes</span>
                <DownOutlined className="text-[8px] text-ink-56" />
              </span>
            </label>

            <div>
              <span className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-ink-56">
                  Score threshold
                </span>
                <span className="font-mono text-[10px] tabular-nums">72</span>
              </span>
              <span className="relative mt-2 block h-1 w-full rounded-pill bg-ink-08">
                <span className="nova-a-sliderfill block h-full w-full origin-left rounded-pill bg-brand" />
                <span className="nova-a-slider absolute top-1/2 left-[35%] size-2.5 -translate-y-1/2 rounded-full border-2 border-brand bg-white" />
              </span>
            </div>

            <span className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-ink-56">
                Auto-assign
              </span>
              <span
                data-live="track"
                className="nova-a-track relative block h-4 w-[30px] rounded-pill"
              >
                <span
                  data-live="knob"
                  className="nova-a-knob absolute top-0.5 left-0.5 block size-3 rounded-full bg-white shadow-sm"
                />
              </span>
            </span>

            <span className="mt-1 flex items-center justify-center gap-1.5 rounded-pill bg-ink-08 py-1.5 text-[11px] font-medium">
              <SaveOutlined className="text-[10px]" />
              Apply
            </span>
          </div>

          <span className="mt-5 block font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
            Recent deals
          </span>
          <ul className="mt-2 space-y-1.5">
            {[
              { id: "Northwind", ok: true },
              { id: "Lakeside", ok: true },
              { id: "Vertex Co", ok: false },
            ].map((r) => (
              <li
                key={r.id}
                className="flex items-center gap-2 font-mono text-[10px] text-ink-56"
              >
                {r.ok ? (
                  <CheckCircleFilled className="text-[10px] text-success" />
                ) : (
                  <ExclamationCircleFilled className="text-[10px] text-[#b5651d]" />
                )}
                {r.id}
                <span className="ml-auto tabular-nums">
                  {r.ok ? "$24k" : "$9k"}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
