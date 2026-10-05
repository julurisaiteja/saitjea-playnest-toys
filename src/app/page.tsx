import Image from "next/image";
import Link from "next/link";
import { brand, items, formatMoney } from "@/lib/data";
import { AddButton } from "@/components/AddButton";
import { PromoStrip } from "@/components/PromoStrip";
import { ReviewRail } from "@/components/ReviewRail";

export default function HomePage() {
  const featured = items.slice(0, 4);
  const bursts = ["POW", "BANG", "ZAP"];
  return (
    <div data-style="pop-art-kids" className="dots min-h-screen">
      <PromoStrip />
      <section className="mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-center px-5 py-16 md:px-8">
        <p className="font-display text-7xl tracking-wide text-ink md:text-9xl anim-rise">{brand.name}</p>
        <h1 className="mt-3 max-w-lg text-2xl font-bold">{brand.tagline}</h1>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/gifts" className="comic-panel bg-accent px-6 py-3 text-lg font-bold text-white">{brand.cta}</Link>
          <Link href="/shop" className="comic-panel bg-accent2 px-6 py-3 text-lg font-bold text-ink">Shop nest</Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {bursts.map((b, i) => (
            <div key={b} className={`comic-panel flex h-28 items-center justify-center bg-surface font-display text-5xl ${i===1?"-rotate-2":"rotate-1"}`}>{b}</div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <h2 className="font-display text-5xl">Nest picks</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <article key={item.id} className="comic-panel bg-surface p-3">
              <div className="relative aspect-square overflow-hidden border-2 border-ink">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="25vw" />
              </div>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="text-sm text-mute">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-bold text-accent">{formatMoney(item.price)}</span>
                <AddButton item={item} label="Add" />
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="font-display text-5xl anim-rise">Play lab</h2>
        <p className="mt-2 max-w-md font-bold">Rotate toys weekly — sensory, build, story lanes.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[{t:"Build",d:"Blocks + magnets"},{t:"Story",d:"Loom + stickers"},{t:"Move",d:"Race + kites"}].map((x,i)=>(
            <div key={x.t} className={`comic-panel bg-surface p-6 ${i===1?"-rotate-2":"rotate-1"}`}>
              <p className="font-display text-4xl">{x.t}</p>
              <p className="text-sm">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="comic-panel mx-5 mb-16 bg-accent2 p-8 text-center md:mx-auto md:max-w-4xl">
        <p className="font-display text-4xl text-ink">NESTPLAY unlocks sticker vault</p>
        <p className="mt-2 font-bold">Add Nest Building Set — demo promo at checkout.</p>
      </section>

      <ReviewRail />
    </div>
  );
}
