import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Bell,
  ChevronsUp,
  Plus,
  Search,
  Send,
  Sparkle,
  TrendUp,
} from "@/components/icons";

/**
 * Phone bezel is the downloaded PNG; everything inside the screen is real DOM
 * so it stays sharp and remains editable.
 */
export function PhoneMockup({
  children,
  className,
  priority = false,
}: {
  children?: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative aspect-[358/732] w-[358px] max-w-full", className)}>
      <div className="absolute inset-[2.6%_4%] overflow-hidden rounded-[10%/5%] bg-[#fafafa]">
        {children}
      </div>
      <Image
        src="/images/phone-frame.png"
        alt=""
        fill
        sizes="358px"
        priority={priority}
        className="pointer-events-none relative select-none object-contain"
      />
    </div>
  );
}

export function ProgressRing({
  value,
  color,
  children,
}: {
  value: number;
  color: string;
  children: ReactNode;
}) {
  const r = 20;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid size-12 shrink-0 place-items-center">
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="#EDEDED" strokeWidth="3" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value)}
        />
      </svg>
      <span className="relative text-ink">{children}</span>
    </div>
  );
}

export function GoalCard({
  name,
  amount,
  due,
  progress,
  color,
  icon,
}: {
  name: string;
  amount: string;
  due: string;
  progress: number;
  color: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-card bg-white p-3">
      <div className="min-w-0">
        <p className="text-mono-xs font-medium text-brand">{name}</p>
        <p className="text-h4 font-medium">{amount}</p>
        <p className="text-mono-xs text-ink-56">{due}</p>
      </div>
      <ProgressRing value={progress} color={color}>
        {icon}
      </ProgressRing>
    </div>
  );
}

export function AddGoalRow() {
  return (
    <div className="flex items-center justify-center gap-2 rounded-card border border-dashed border-ink/15 p-4 text-small text-ink-56">
      <span className="grid size-6 place-items-center rounded-full bg-ink-08">
        <Plus className="size-3.5" />
      </span>
      Add a new goal
    </div>
  );
}

export function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-card bg-white p-3">
      <p className="text-mono-xs text-ink-56">{label}</p>
      <p className="text-h4 font-medium">{value}</p>
    </div>
  );
}

/** Full home screen shown inside the hero phone. */
export function HomeScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-[#f7f7f7] px-4 pt-12 pb-4 text-ink">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center overflow-hidden rounded-full bg-brand-soft text-mono-xs font-medium text-brand">
            M
          </span>
          <p className="text-small">
            Hello, <span className="font-medium">Mary</span>
          </p>
        </div>
        <div className="flex items-center gap-3 text-ink">
          <Sparkle className="size-5" />
          <Bell className="size-5" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-small">Amount saved</p>
          <div className="flex gap-1">
            <span className="rounded bg-brand px-2 py-1 font-mono text-[10px] tracking-[0.06em] text-white">
              FOR GOALS
            </span>
            <span className="rounded bg-brand-soft px-2 py-1 font-mono text-[10px] tracking-[0.06em] text-brand">
              EMERGENCY
            </span>
          </div>
        </div>
        <p className="flex items-center gap-1 text-[2rem] leading-tight font-medium tracking-[-0.03em]">
          $568.67
          <ChevronsUp className="size-5 text-success" />
        </p>
      </div>

      <div className="h-px bg-ink-08" />

      <p className="text-small">Last month</p>
      <div className="grid grid-cols-2 gap-2">
        <StatTile label="Income" value="$1,152.32" />
        <StatTile label="Expense" value="$948.95" />
      </div>

      <div className="flex items-center justify-between rounded-pill bg-white px-3 py-2">
        <span className="text-small text-ink-56">Savings</span>
        <span className="flex items-center gap-1 font-mono text-mono-xs text-success">
          $203.37 <TrendUp className="size-4" />
        </span>
      </div>

      <div className="flex items-center justify-between rounded-card bg-brand px-3 py-2.5 text-white">
        <span className="text-small">Boost your savings with AI</span>
        <span className="flex items-center gap-1 text-small font-medium">
          Analyse <Sparkle className="size-4" />
        </span>
      </div>

      <p className="text-small">My goals</p>
      <GoalCard
        name="Vacation to Bali"
        amount="$2,203.60"
        due="by Nov, 2025"
        progress={0.65}
        color="#E8590C"
        icon={<PlaneGlyph />}
      />
    </div>
  );
}

function PlaneGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3 9.5 10.5M17 3l-4.5 14-2-6-6-2L17 3Z" />
    </svg>
  );
}

/** Bank list screen used in the "Connect accounts" step. */
/**
 * The systems inventory a discovery sprint produces.
 *
 * Deliberately no logo images: the inherited bank-*.png files are real
 * third-party brand marks, which must not appear next to invented system names on
 * a commercial page. Neutral monograms carry the same layout without borrowing
 * anyone's trademark.
 */
const SYSTEMS = [
  { name: "Production database", kind: "Postgres", mark: "DB" },
  { name: "Customer records", kind: "Internal CRM", mark: "CR" },
  { name: "Document store", kind: "Object storage", mark: "DS" },
  { name: "Identity provider", kind: "SSO", mark: "ID" },
  { name: "Data warehouse", kind: "Analytics", mark: "DW" },
  { name: "Ticketing", kind: "Service desk", mark: "TK" },
];

export function ConnectScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 pt-12 pb-4">
      <h3 className="text-h4 font-medium">Map your systems</h3>
      <div className="flex items-center gap-2 rounded-pill bg-[#f2f2f2] px-3 py-2 text-small text-ink-56">
        <Search className="size-4" />
        Search....
      </div>
      <ul className="flex flex-col gap-2 overflow-hidden">
        {SYSTEMS.map((system, i) => (
          <li key={`${system.name}-${i}`} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-card bg-brand-soft font-mono text-[10px] tracking-[0.06em] text-brand">
              {system.mark}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-small font-medium">
                {system.name}
              </span>
              <span className="block font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
                {system.kind}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Transaction list screen — "Build" step.
 *
 * Merchant names are generic on purpose. The originals were real companies
 * carried over from the cloned target, and naming actual brands in invented
 * financial records on a commercial site borrows their trademarks for no benefit.
 */
const TRANSACTIONS = [
  { name: "Coffee shop", category: "Food & drinks", date: "May 22", amount: "-$6.80", negative: true },
  { name: "Streaming plan", category: "Entertainment", date: "May 19", amount: "-$13.99", negative: true },
  { name: "May salary", category: "Income", date: "May 18", amount: "+$2,800.00", negative: false },
  { name: "Games store", category: "Entertainment", date: "May 11", amount: "-$7.80", negative: true },
  { name: "Supermarket", category: "Groceries", date: "May 9", amount: "-$62.40", negative: true },
  { name: "Transit pass", category: "Travel", date: "May 4", amount: "-$41.00", negative: true },
  { name: "Refund", category: "Income", date: "May 2", amount: "+$18.25", negative: false },
];

const TX_FILTERS = ["All", "Food", "Income", "Fun"];

export function TransactionsScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 pt-12 pb-4">
      <h3 className="text-h4 font-medium">Filter by category &amp; time</h3>

      <ul className="flex gap-1.5">
        {TX_FILTERS.map((filter, i) => (
          <li
            key={filter}
            className={cn(
              "rounded-pill px-3 py-1.5 font-mono text-[10px] tracking-[0.06em] uppercase",
              i === 0 ? "bg-brand text-white" : "bg-[#f2f2f2] text-ink-56",
            )}
          >
            {filter}
          </li>
        ))}
      </ul>

      <ul className="flex flex-col">
        {TRANSACTIONS.map((tx) => (
          <li
            key={tx.name}
            className="flex items-center justify-between gap-3 border-b border-ink-08 py-3 last:border-0"
          >
            <span className="min-w-0">
              <span className="block truncate text-small font-medium">
                {tx.name}
              </span>
              <span className="block font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
                {tx.category} · {tx.date}
              </span>
            </span>
            <span
              className={cn(
                "font-mono text-mono-xs",
                tx.negative ? "text-ink" : "text-success",
              )}
            >
              {tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** AI advice screen — "Personalized tips" step. */
export function AdviceScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-white px-4 pt-12 pb-4">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-full bg-brand-soft text-mono-xs font-medium text-brand">
          M
        </span>
        <span className="min-w-0">
          <span className="block text-small font-medium">Mary Smith</span>
          <span className="block font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
            Female · In college
          </span>
        </span>
      </div>

      <span className="w-fit rounded-pill bg-ink-08 px-2 py-1 font-mono text-[10px] tracking-[0.06em] text-ink-56 uppercase">
        Saving memory
      </span>

      <p className="ml-auto w-fit rounded-card rounded-br-none bg-brand px-3 py-2 text-small text-white">
        How do I start investing?
      </p>

      <div className="rounded-card bg-[#f5f5f5] p-3 text-small text-ink-60">
        <p className="mb-1 font-medium text-ink">Great question! 👋</p>
        <p>
          To start investing, begin with three simple steps: understand your
          goals, pick a timeframe, then automate a monthly amount.
        </p>
      </div>

      <p className="ml-auto w-fit rounded-card rounded-br-none bg-brand px-3 py-2 text-small text-white">
        How should I split my income?
      </p>

      <div className="mt-auto flex items-center gap-2 rounded-pill bg-[#f2f2f2] px-3 py-2">
        <Sparkle className="size-4 text-brand" />
        <span className="flex-1 text-small text-ink-56">Ask anything</span>
        <span className="grid size-7 place-items-center rounded-full bg-brand text-white">
          <Send className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

/** Floating cards used beside the phone in the statement section. */
export function GoalsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[300px] max-w-full rounded-panel bg-white/85 p-4 shadow-float backdrop-blur-sm",
        className,
      )}
    >
      <p className="mb-3 text-lead font-medium">My goals</p>
      <div className="flex flex-col gap-2">
        <GoalCard
          name="New Bike"
          amount="$549.50"
          due="by Nov, 2025"
          progress={0.75}
          color="#13BB5C"
          icon={<BikeGlyph />}
        />
        <GoalCard
          name="House"
          amount="$48,000.00"
          due="by June, 2026"
          progress={0.3}
          color="#E8590C"
          icon={<HomeGlyph />}
        />
        <AddGoalRow />
      </div>
    </div>
  );
}

function BikeGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="13.5" r="3" />
      <circle cx="15" cy="13.5" r="3" />
      <path d="M5 13.5 9 7h3l3 6.5M9 7l-1-2H6" />
    </svg>
  );
}

function HomeGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 9 10 3.5 16.5 9v7a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9Z" />
    </svg>
  );
}

const BARS = [
  { h: 40, fill: "#E4E4E4" },
  { h: 62, fill: "#E4E4E4" },
  { h: 78, fill: "#C2185B" },
  { h: 92, fill: "#E4E4E4" },
  { h: 52, fill: "#0F7A57" },
  { h: 84, fill: "#E4E4E4" },
];

export function ExpensesCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-[300px] max-w-full items-end justify-between gap-4 rounded-panel bg-white/85 p-4 shadow-float backdrop-blur-sm",
        className,
      )}
    >
      <div>
        <p className="text-lead font-medium">Expenses</p>
        <p className="mt-6 text-h3 font-medium">$523.64</p>
        <p className="font-mono text-mono-xs tracking-[0.06em] text-brand uppercase">
          Weekly transactions
        </p>
      </div>
      <div
        className="flex h-24 items-end gap-1.5"
        role="img"
        aria-label="Weekly expenses, six days charted, highest on day four"
      >
        {BARS.map((bar, i) => (
          <span
            key={i}
            className="w-3 rounded-sm"
            style={{ height: `${bar.h}%`, background: bar.fill }}
          />
        ))}
      </div>
    </div>
  );
}

export function AskCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[280px] max-w-full rounded-panel bg-white/85 p-4 shadow-float backdrop-blur-sm",
        className,
      )}
    >
      <span className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-brand via-[#2f9bd6] to-success-bright p-[2px]">
        <span className="grid size-full place-items-center rounded-full bg-white text-brand">
          <Sparkle className="size-6" />
        </span>
      </span>
      <div className="mt-6 flex items-center gap-2 rounded-pill bg-[#f2f2f2] px-3 py-2">
        <Sparkle className="size-4 text-brand" />
        <span className="flex-1 text-small text-ink-56">Ask anything</span>
        <span className="grid size-7 place-items-center rounded-full bg-brand text-white">
          <Send className="size-3.5" />
        </span>
      </div>
    </div>
  );
}
