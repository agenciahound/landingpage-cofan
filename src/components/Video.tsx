export default function Video() {
  return (
    <section className="py-24 bg-cofan-light">
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-black max-w-5xl mx-auto">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Ilr3aTZNWzg"
            title="Não conte com o Plano Safra"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
