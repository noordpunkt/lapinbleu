"use client";

export function PrintButton({ label = "Print / PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-xs text-neutral-600 bg-white/90 px-3 py-2 rounded border border-neutral-200 hover:bg-white cursor-pointer"
    >
      {label}
    </button>
  );
}
