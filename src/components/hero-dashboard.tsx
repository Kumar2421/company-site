"use client";

import { useState } from "react";
import {
  SearchOutlined,
  BellOutlined,
  SyncOutlined,
  InboxOutlined,
  EllipsisOutlined,
  PlusOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ExportOutlined,
  TableOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

export function HeroDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Sidebar Menu Items
  const menuItems = [
    { label: "Dashboard", badge: null },
    { label: "Contacts", badge: "46" },
    { label: "Inbox", badge: "23" },
    { label: "Deals", badge: "77" },
    { label: "Companies", badge: "18" },
    { label: "Workflow Automation", badge: null },
  ];

  const collections = [
    "Products",
    "My deals flow",
    "Support",
    "Sales",
    "Operations",
    "Partner team",
    "Quality",
  ];

  // Stats Grid (8 items)
  const stats = [
    { label: "Email Sent", value: "100", change: 10, isUp: true, prev: "90" },
    { label: "Email Delivered", value: "50", change: 10, isUp: false, prev: "60" },
    { label: "Email Opened", value: "80", change: 2, isUp: true, prev: "78" },
    { label: "Email Replied", value: "24", change: 4, isUp: false, prev: "20" },
    { label: "Total Recipients", value: "32", change: 1, isUp: true, prev: "31" },
    { label: "Deals Win Rate", value: "83%", change: "10%", isUp: true, prev: "73.0%" },
    { label: "Tickets Solved", value: "46", change: 3, isUp: true, prev: "43" },
    { label: "New Contacts", value: "455", change: 5, isUp: true, prev: "450" },
  ];

  // Funnel Data
  const funnelData = [
    { percent: "100%", count: 7, label: "# Email" },
    { percent: "57%", count: 4, label: "# Email" },
    { percent: "29%", count: 2, label: "# Email" },
    { percent: "29%", count: 2, label: "# Email" },
    { percent: "0%", count: 0, label: "# Email" },
  ];

  // Contacts Sidebar
  const contacts = [
    { name: "kishor", time: "1 day", avatar: "JB", color: "bg-blue-500" },
    { name: "mohan", time: "2 days", avatar: "TS", color: "bg-purple-500" },
    { name: "anbu", time: "3 days", avatar: "JB", color: "bg-green-500" },
    { name: "santhosh", time: "3 days", avatar: "JW", color: "bg-red-500" },
    { name: "vijay", time: "3 days", avatar: "DS", color: "bg-amber-500" },
  ];

  // Deals Table
  const deals = [
    {
      name: "Nile Site Revamp",
      owner: "Mike Banner",
      amount: "$8,750",
      date: "May 03, 2025 3:35 AM GMT+7",
      stage: "Proposal",
      stageColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FFE4E6]",
    },
    {
      name: "Beta Launch Site",
      owner: "Jordan Smith",
      amount: "$12,300",
      date: "Nov 02, 2024 6:42 AM GMT+7",
      stage: "Demo Scheduled",
      stageColor: "bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]",
    },
    {
      name: "Summit Digital Site",
      owner: "Denial Justin",
      amount: "$15,500",
      date: "Jun 29, 2025 9:09 PM GMT+7",
      stage: "Proof of Concept",
      stageColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#EDE9FE]",
    },
    {
      name: "Vanguard Access Page",
      owner: "Waker Den",
      amount: "$11,900",
      date: "Aug 28, 2024 9:47 PM GMT+7",
      stage: "Budget Review",
      stageColor: "bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]",
    },
    {
      name: "Optima Route Landing",
      owner: "Shop Smith",
      amount: "$17,200",
      date: "Feb 22, 2024 7:34 PM GMT+7",
      stage: "Contract Sent",
      stageColor: "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]",
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink-08 bg-white text-ink shadow-2xl flex max-h-[920px]">
      
      {/* 1. Left Sidebar Navigation */}
      <aside className="w-[220px] bg-[#FAF9F6] border-r border-ink-08 flex flex-col justify-between shrink-0 select-none p-4">
        <div>
          {/* User Profile */}
          <div className="flex items-center gap-2 px-1 py-2 hover:bg-ink-08/40 rounded-lg cursor-pointer transition-colors duration-150">
            <span className="grid size-7 place-items-center rounded-full bg-amber-400 text-[11px] font-bold text-amber-900">
              HP
            </span>
            <span className="text-[13px] font-semibold text-ink truncate">Tamil arasan </span>
            <span className="text-[9px] text-ink-56 ml-auto">▼</span>
          </div>

          {/* Menu */}
          <nav className="mt-4">
            <ul className="space-y-[2px]">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] transition-all duration-150 ${
                      activeTab === item.label
                        ? "bg-[#EBECE8] font-medium text-ink"
                        : "text-ink-60 hover:bg-[#F2F1EC]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-mono bg-[#E0DFD8] text-ink-60 px-1.5 py-[1px] rounded">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
              <li className="text-ink-56 text-[12px] px-2.5 py-1">··· More</li>
            </ul>
          </nav>

          {/* Collections */}
          <div className="mt-6">
            <div className="flex items-center justify-between px-2.5 py-1 text-[11px] font-bold tracking-wider text-ink-56 uppercase">
              <span>Collections</span>
              <span className="cursor-pointer">···</span>
            </div>
            <ul className="mt-2 space-y-[2px]">
              {collections.map((col) => (
                <li key={col}>
                  <a
                    href="#"
                    className="block px-2.5 py-1.5 rounded-lg text-[13px] text-ink-60 hover:bg-[#F2F1EC] transition-all"
                  >
                    {col}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom items */}
        <div className="space-y-3.5 pt-4 border-t border-ink-08/60">
          {/* Sample data status card */}
          <div className="bg-[#EBECE8]/70 border border-ink-08 rounded-xl p-3">
            <span className="block text-[11px] font-bold text-ink">
              Adding sample data
            </span>
            <span className="block text-[10px] text-ink-56 mt-0.5">
              28 of 50 created
            </span>
            <div className="h-1.5 w-full bg-[#E0DFD8] rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-brand rounded-full w-[56%]" />
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-[12px] font-semibold border border-ink-08 bg-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#FAF9F6] active:scale-95 transition-all">
              <PlusOutlined className="text-[10px]" /> Invite
            </button>
            <div className="flex gap-2">
              <SettingOutlined className="text-ink-56 hover:text-ink cursor-pointer text-[14px]" />
              <QuestionCircleOutlined className="text-ink-56 hover:text-ink cursor-pointer text-[14px]" />
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Dashboard Panel */}
      <main className="flex-1 bg-white flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header bar */}
        <div className="h-14 border-b border-ink-08 px-6 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-[16px] font-bold tracking-tight">Dashboard</h1>
            <div className="flex items-center gap-1.5 border border-ink-08 bg-[#FAF9F6] px-2.5 py-1 rounded-lg text-[12px] text-ink-56 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand/20 transition-all w-[240px]">
              <SearchOutlined className="text-[11px]" />
              <span className="flex-1 select-none">Search...</span>
              <span className="text-[9px] font-mono bg-ink-08 border border-ink-12 px-1 rounded">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-ink-60">
            <InboxOutlined className="text-[15px] hover:text-ink cursor-pointer" />
            <SyncOutlined className="text-[13px] hover:text-ink cursor-pointer" />
            <div className="relative">
              <BellOutlined className="text-[15px] hover:text-ink cursor-pointer" />
              <span className="absolute top-[2px] right-[2px] size-1.5 rounded-full bg-danger animate-pulse" />
            </div>
          </div>
        </div>

        {/* Inner Content scrollable area */}
        <div className="p-6 space-y-6">
          
          {/* Top grid section */}
          <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
            
            {/* Left section: metrics grid & chart funnel area */}
            <div className="space-y-6">
              
              {/* Stats Grid */}
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                {stats.map((stat, i) => (
                  <div key={i} className="border border-ink-08 rounded-xl p-3.5 hover:shadow-md transition-shadow">
                    <span className="block text-[11px] font-medium text-ink-56 truncate">{stat.label}</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-[20px] font-bold tracking-tight">{stat.value}</span>
                      <span className={`inline-flex items-center gap-0.5 text-[10px] font-semibold ${stat.isUp ? "text-success" : "text-danger"}`}>
                        {stat.isUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        {stat.change}
                      </span>
                    </div>
                    <span className="block text-[10px] text-ink-56 mt-0.5">Previously: {stat.prev}</span>
                  </div>
                ))}
              </div>

              {/* Chart funnel and Sent list row */}
              <div className="grid gap-6 md:grid-cols-2">
                
                {/* Email performance funnel */}
                <div className="border border-ink-08 rounded-xl p-4 flex flex-col justify-between h-[300px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[13px] font-bold">Email performance funnel</h3>
                      <span className="block text-[10px] text-ink-56 mt-0.5">Last 30 days</span>
                    </div>
                    <EllipsisOutlined className="text-ink-56 hover:text-ink cursor-pointer" />
                  </div>
                  {/* Funnel chart mockup */}
                  <div className="flex items-end justify-between h-[180px] pt-4 px-2">
                    {funnelData.map((bar, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 gap-2">
                        <div className="text-[11px] font-bold">{bar.percent}</div>
                        <div className="text-[10px] text-ink-56">{bar.count}</div>
                        <div
                          className="w-[80%] rounded bg-gradient-to-t from-brand/10 to-brand/30 border border-brand/20 relative"
                          style={{
                            height: `${parseFloat(bar.percent) || 5}px`,
                            minHeight: "8px",
                          }}
                        >
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brand/15 rounded-b" />
                        </div>
                        <div className="text-[9px] text-ink-56 whitespace-nowrap mt-1 truncate max-w-full">
                          {bar.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emails Sent Line Chart mockup */}
                <div className="border border-ink-08 rounded-xl p-4 flex flex-col justify-between h-[300px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[13px] font-bold">Emails Sent</h3>
                      <span className="block text-[10px] text-ink-56 mt-0.5">Daily</span>
                    </div>
                    <EllipsisOutlined className="text-ink-56 hover:text-ink cursor-pointer" />
                  </div>

                  {/* SVG line chart grid */}
                  <div className="relative flex-1 mt-3.5 h-[160px]">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {["12k", "10k", "8k", "6k", "4k", "2k", "0"].map((y) => (
                        <div key={y} className="flex items-center gap-2 text-[9px] text-ink-56">
                          <span className="w-6 text-right font-mono">{y}</span>
                          <div className="flex-1 border-b border-ink-08/40 border-dashed" />
                        </div>
                      ))}
                    </div>

                    {/* Chart Plot Area */}
                    <svg className="absolute inset-0 pl-8 pb-4 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Highlighted vertical band */}
                      <rect x="42" y="0" width="10" height="100" fill="rgba(27,43,184,0.06)" />
                      {/* Line */}
                      <path
                        d="M 5,85 L 20,80 L 35,78 L 50,65 L 65,72 L 80,48 L 95,35"
                        fill="none"
                        stroke="#1b2bb8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="50" cy="65" r="3" fill="#1b2bb8" />
                    </svg>

                    {/* Floating Info card */}
                    <div className="absolute top-[35%] left-[45%] bg-white shadow-lg border border-ink-08 rounded-lg p-2 text-[9px] font-bold z-10 space-y-1">
                      <div className="flex items-center gap-1.5 text-success">
                        <span className="size-1.5 rounded-full bg-success" />
                        Growth: $10,200
                      </div>
                      <div className="flex items-center gap-1.5 text-brand">
                        <span className="size-1.5 rounded-full bg-brand" />
                        Deal avg: $10,000
                      </div>
                    </div>
                  </div>

                  {/* X axis labels */}
                  <div className="flex justify-between items-center pl-8 text-[9px] text-ink-56 font-mono border-t border-ink-08 pt-2">
                    <span>1 Mar</span>
                    <span>05</span>
                    <span>10</span>
                    <span>12</span>
                    <span>18</span>
                    <span>23</span>
                    <span>27</span>
                    <span>2 Apr</span>
                    <span>12</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right column: Contacts list & Live Activity */}
            <div className="space-y-6">
              
              {/* Contacts */}
              <div className="border border-ink-08 rounded-xl p-4 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between border-b border-ink-08 pb-2.5">
                  <h3 className="text-[13px] font-bold">Contacts</h3>
                  <a href="#" className="text-[11px] font-semibold text-brand hover:underline">See All</a>
                </div>
                <div className="mt-2.5 space-y-3 flex-1">
                  {contacts.map((contact, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`grid size-7 place-items-center rounded-full text-[10px] font-bold text-white ${contact.color}`}>
                          {contact.avatar}
                        </span>
                        <div className="min-w-0">
                          <span className="block text-[12px] font-semibold text-ink leading-none">{contact.name}</span>
                          <span className="block text-[10px] text-ink-56 mt-0.5">{contact.time} ago</span>
                        </div>
                      </div>
                      <button className="text-[10px] font-bold border border-ink-08 hover:bg-[#FAF9F6] active:scale-95 px-2.5 py-1 rounded transition-all">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity log */}
              <div className="border border-ink-08 rounded-xl p-4 flex flex-col justify-between min-h-[300px]">
                <div className="flex items-center justify-between border-b border-ink-08 pb-2.5">
                  <h3 className="text-[13px] font-bold">Activity</h3>
                  <a href="#" className="text-[11px] font-semibold text-brand hover:underline">See All</a>
                </div>
                
                <div className="mt-3.5 space-y-4 flex-1">
                  {/* Item 1 */}
                  <div className="flex items-start gap-2.5">
                    <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-[9px] font-bold text-brand shrink-0">
                      DS
                    </span>
                    <div className="min-w-0 flex-1 text-[11px] leading-relaxed">
                      <span className="font-bold text-ink">David Smith</span> - Task Marked as Started. Project Name: <span className="font-semibold text-brand">Website Design</span>.
                      <span className="block text-[9px] text-ink-56 mt-0.5">12:00 pm</span>
                      <div className="bg-[#F8F9FA] border border-ink-08 rounded p-2 mt-1.5 text-[10px] text-ink-60">
                        <span className="block font-bold">Comment:</span>
                        Reword and clarify some API help messages
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-[12px] text-success shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1 text-[11px] leading-relaxed">
                      <span className="font-bold text-ink">Design Status</span> Started.
                      <span className="block text-[9px] text-ink-56 mt-0.5">Yesterday 10:00 am</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-2.5">
                    <CheckCircleFilled className="text-[12px] text-success shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1 text-[11px] leading-relaxed">
                      <span className="font-bold text-[#059669]">Quick review design</span> moved to done.
                      <span className="block text-[9px] text-ink-56 mt-0.5">11:40 am</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Deals Table section */}
          <div className="border border-ink-08 rounded-xl p-4 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-ink-08 pb-3.5">
              <div className="flex items-center gap-3">
                <h3 className="text-[14px] font-bold">Deals</h3>
                <div className="flex items-center gap-1.5 border border-ink-08 bg-[#FAF9F6] px-2.5 py-1 rounded-lg text-[11px] text-ink-56">
                  <SearchOutlined />
                  <span>Search name, phone, email...</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-[11px] font-bold border border-ink-08 px-2.5 py-1.5 rounded-lg hover:bg-[#FAF9F6] transition-all">
                  <ExportOutlined /> Export
                </button>
                <button className="flex items-center gap-1.5 text-[11px] font-bold border border-ink-08 px-2.5 py-1.5 rounded-lg hover:bg-[#FAF9F6] transition-all">
                  <TableOutlined /> Table
                </button>
                <a href="#" className="text-[11px] font-bold text-brand hover:underline px-1.5">
                  View all Deal
                </a>
              </div>
            </div>

            {/* Table Mock layout */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px] border-collapse mt-2.5">
                <thead>
                  <tr className="border-b border-ink-08 text-[11px] text-ink-56 font-bold uppercase tracking-wider">
                    <th className="py-2.5 pr-2 w-6"><input type="checkbox" className="rounded" disabled /></th>
                    <th className="py-2.5 px-3">Deal Name</th>
                    <th className="py-2.5 px-3">Deal Owner</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Close Date (GMT+7)</th>
                    <th className="py-2.5 px-3">Deal Stage</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-08/60">
                  {deals.map((row, index) => (
                    <tr key={index} className="hover:bg-[#FAF9F6]/50 transition-colors">
                      <td className="py-3.5 pr-2"><input type="checkbox" className="rounded" disabled /></td>
                      <td className="py-3.5 px-3 font-semibold text-ink">{row.name}</td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-2">
                          <span className="grid size-5 place-items-center rounded-full bg-brand-soft text-[8px] font-bold text-brand">
                            {row.owner.split(" ").map(w => w[0]).join("")}
                          </span>
                          <span>{row.owner}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-mono font-medium">{row.amount}</td>
                      <td className="py-3.5 px-3 text-ink-56 font-mono text-[11px]">{row.date}</td>
                      <td className="py-3.5 px-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold border ${row.stageColor}`}>
                          {row.stage}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right text-ink-56">
                        <EllipsisOutlined className="hover:text-ink cursor-pointer text-[14px]" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
