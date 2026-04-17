"use client";

export function PrintBar() {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
      <p className="text-sm font-medium text-slate-500">Resume · Syed Nazar Abbas Kazmi</p>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
      >
        <i className="fa-solid fa-print" aria-hidden />
        Print / Save PDF
      </button>
    </div>
  );
}
