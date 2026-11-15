"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SignpostItem = {
  id: string;
  href: string;
  label: string;
  quiet?: boolean;
};

export type SignpostCopy = {
  ariaLabel: string;
  open: string;
  close: string;
};

type SectionSignpostProps = {
  items: SignpostItem[];
  activeKey: string;
  copy: SignpostCopy;
};

function SignpostTree({
  items,
  activeKey,
}: {
  items: SignpostItem[];
  activeKey: string;
}) {
  const front = items.filter((item) => item.quiet);
  const tree = items.filter((item) => !item.quiet);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {front.length > 0 ? (
        <ul className="mb-3 space-y-0.5 border-b border-neutral-300 pb-3">
          {front.map((item) => {
            const active = item.id === activeKey;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-2 text-[12px] leading-snug tracking-[0.04em] md:py-1 md:text-[11px] ${
                    active
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}

      <ul className="relative min-h-0 flex-1">
        {tree.map((item) => {
          const active = item.id === activeKey;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative flex items-center gap-2 py-2 pr-1 md:py-1.5"
              >
                <span className="flex h-2 w-2 shrink-0 items-center justify-center" aria-hidden="true">
                  <span
                    className={`rounded-full bg-black ${
                      active ? "h-2 w-2" : "h-[5px] w-[5px]"
                    }`}
                  />
                </span>
                <span
                  className={`min-w-0 text-[12px] leading-snug tracking-[0.03em] md:text-[11px] ${
                    active
                      ? "font-medium text-neutral-900"
                      : "text-neutral-500 group-hover:text-neutral-800"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SectionSignpost({ items, activeKey, copy }: SectionSignpostProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("/sommaire")) return;
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <aside
      className="print:hidden fixed top-0 left-0 z-10 hidden h-screen w-[var(--signpost-width)] flex-col overflow-y-auto border-r border-neutral-300 bg-neutral-100 px-4 pt-16 pb-6 md:flex"
      aria-label={copy.ariaLabel}
    >
      <SignpostTree items={items} activeKey={activeKey} />
    </aside>
  );
}
