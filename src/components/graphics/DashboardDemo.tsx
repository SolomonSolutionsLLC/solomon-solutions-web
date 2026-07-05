"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, ClipboardList, FileText, ShieldCheck } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { useDemoCycle } from "@/lib/useDemoCycle";

const BLUE = "#3B5998";
const CYCLE_MS = 3600;

const tabs = [
  {
    key: "intake",
    label: "Intake",
    icon: ClipboardList,
    rows: [
      { title: "New care request", meta: "Submitted 9:14 AM", chip: "Review" },
      { title: "Grief support — M.T.", meta: "Assigned to Pastor Dan", chip: "Active" },
      { title: "Premarital — J. & K.", meta: "Awaiting forms", chip: "Waiting" },
    ],
  },
  {
    key: "schedule",
    label: "Schedule",
    icon: CalendarDays,
    rows: [
      { title: "Session — Tuesday 2:00", meta: "Room B · Care team", chip: "Confirmed" },
      { title: "Follow-up — Thursday 10:30", meta: "Video call", chip: "Pending" },
      { title: "Supervision review", meta: "Friday 1:00", chip: "Weekly" },
    ],
  },
  {
    key: "notes",
    label: "Notes",
    icon: FileText,
    rows: [
      { title: "Session 4 summary", meta: "Signed · Encrypted", chip: "Sealed" },
      { title: "Care plan update", meta: "Draft — 2 reviewers", chip: "Draft" },
      { title: "Supervisor comment", meta: "Resolved this morning", chip: "Done" },
    ],
  },
];

/**
 * HopeStack demo: a compact care-team workspace cycling Intake → Schedule →
 * Notes. Cycle lifecycle handled by useDemoCycle; decorative for assistive
 * tech, described by the aria-label.
 */
export default function DashboardDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const tab = useDemoCycle(ref, tabs.length, CYCLE_MS);
  const active = tabs[tab];

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Animated preview of the HopeStack care-team workspace: intake, scheduling, and counseling notes"
      className="relative mx-auto w-full max-w-[420px] select-none"
    >
      <div aria-hidden="true">
      <div
        className="absolute -inset-8 rounded-full opacity-60 blur-2xl"
        style={{ background: `radial-gradient(closest-side, ${BLUE}22, transparent)` }}
      />

      {/* Browser frame */}
      <div className="relative overflow-hidden rounded-xl border border-charcoal/12 bg-white shadow-2xl shadow-charcoal/20">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-charcoal/8 bg-[#f4f2ec] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-charcoal/15" />
          <span className="h-2 w-2 rounded-full bg-charcoal/15" />
          <span className="h-2 w-2 rounded-full bg-charcoal/15" />
          <span className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-charcoal/45">
            app.hopestack.tech
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[92px] shrink-0 border-r border-charcoal/8 bg-[#fafaf7] p-3">
            <div
              className="mb-4 font-[family-name:var(--font-display)] text-[13px] font-bold"
              style={{ color: BLUE }}
            >
              HopeStack
            </div>
            {tabs.map((t, i) => (
              <div
                key={t.key}
                className="mb-1 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] font-medium transition-colors duration-300"
                style={
                  i === tab
                    ? { backgroundColor: `${BLUE}14`, color: BLUE }
                    : { color: "#6b6b7b" }
                }
              >
                <t.icon size={11} aria-hidden="true" />
                {t.label}
              </div>
            ))}
            <div className="mt-6 flex items-center gap-1.5 px-2 text-[9px] font-medium text-charcoal/40">
              <ShieldCheck size={11} aria-hidden="true" style={{ color: BLUE }} />
              HIPAA-aligned
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[240px] flex-1 p-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                  {active.label}
                </p>
                {active.rows.map((row, i) => (
                  <motion.div
                    key={row.title}
                    className="mb-2 flex items-center justify-between rounded-lg border border-charcoal/8 bg-white px-3 py-2.5"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.08 * i }}
                  >
                    <div>
                      <p className="text-[12px] font-semibold text-slate-text">
                        {row.title}
                      </p>
                      <p className="text-[10px] text-charcoal/45">{row.meta}</p>
                    </div>
                    <span
                      className="rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em]"
                      style={{ backgroundColor: `${BLUE}14`, color: BLUE }}
                    >
                      {row.chip}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
