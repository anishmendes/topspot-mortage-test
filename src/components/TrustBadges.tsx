const items = [
    { title: "Clear guidance", desc: "We explain the next steps in plain English." },
    { title: "Quick response", desc: "Same-day callback where possible." },
    { title: "Secure handling", desc: "Only essential details — treated responsibly." },
  ];
  
  export default function TrustBadges() {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="font-semibold text-slate-900">{it.title}</p>
            <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    );
  }
  