export default function Loading() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen flex flex-col items-center justify-center select-none" role="status" aria-busy="true">
      <div className="w-8 h-8 border-2 border-accent-primary/80 border-t-transparent rounded-full animate-spin mb-4" />
      <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Loading...</span>
    </main>
  );
}
