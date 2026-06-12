"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AccordionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Accessible accordion for consulting focus areas (grid-rows transition). */
export default function ConsultingAccordion({
  items,
}: {
  items: AccordionItem[];
}) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="border-t border-white/10">
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `consulting-panel-${i}`;
        const buttonId = `consulting-trigger-${i}`;
        return (
          <div key={item.title} className="border-b border-white/10">
            <h3>
              <button
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : i)}
                className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span className="flex items-center gap-4">
                  <item.icon
                    size={18}
                    aria-hidden="true"
                    className={
                      expanded ? "text-gold" : "text-cream/40 group-hover:text-gold/70"
                    }
                  />
                  <span
                    className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                      expanded ? "text-gold" : "text-cream/80 group-hover:text-cream"
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
                <Plus
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-cream/50 transition-transform duration-300 ${
                    expanded ? "rotate-45 text-gold" : "group-hover:text-cream"
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-9 pr-8 text-[15px] leading-relaxed text-cream/65">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
