"use client";

import type { KeyboardEvent } from "react";

/**
 * Roving arrow-key navigation for a `role="tablist"`, per WAI-ARIA.
 * Attach the returned handler to the tablist container.
 */
export function useTabKeys(count: number, setActive: (i: number) => void) {
  return (event: KeyboardEvent<HTMLElement>) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'),
    );
    const from = tabs.findIndex((tab) => tab === document.activeElement);
    if (from === -1) return;

    event.preventDefault();

    let next = from;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (from + 1) % count;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (from - 1 + count) % count;
    } else if (event.key === "Home") {
      next = 0;
    } else {
      next = count - 1;
    }

    setActive(next);
    tabs[next]?.focus();
  };
}
