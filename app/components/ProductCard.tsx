import type { Product } from "../data/products";
import { fmtDzd } from "../lib/format";
import { whatsappLink } from "../lib/contact";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Density = "airy" | "compact";

export function ProductCard({
  product,
  onOpen,
  density = "airy",
}: {
  product: Product;
  onOpen: (p: Product) => void;
  density?: Density;
}) {
  const flourish =
    product.id === "bouquet-aout"
      ? "bouquet"
      : product.id === "lavande-haute"
        ? "sprig"
        : "petals";

  const priceStr = fmtDzd(product.price);
  const message = `Bonjour Somy Candles, je suis intéressé(e) par la bougie « ${product.name} » (${priceStr}). Est-elle disponible ?`;
  const waHref = whatsappLink(message);

  const pad = density === "compact" ? "py-[0.9rem] px-3" : "py-[1.3rem] px-[1.1rem]";

  return (
    <article
      onClick={() => onOpen(product)}
      className="soma-card group relative bg-paper-2 cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[3px]"
    >
      <div className="relative overflow-hidden">
        <PhotoPlaceholder
          tone={product.photoTone}
          label={product.placeholderLabel}
          ratio="4 / 5"
          src={product.photo || null}
          flourish={flourish}
          className="transition duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04] group-hover:saturate-[1.05] group-hover:brightness-[1.02]"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 bg-ink text-paper font-mono text-[0.6rem] tracking-[0.18em] px-[0.6rem] py-[0.35rem]">
            {product.badge.toUpperCase()}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-[1.2rem] opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
          <span className="bg-paper text-ink font-mono text-[0.65rem] tracking-[0.22em] uppercase px-[1.2rem] py-[0.7rem] translate-y-2 transition-transform duration-[400ms] group-hover:translate-y-0">
            Aperçu
          </span>
        </div>
      </div>

      <div className={pad}>
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="font-display font-normal italic text-[1.4rem] m-0 leading-[1.1]">
            {product.name}
          </h3>
          <span className="font-mono text-[0.78rem] text-ink tracking-[0.04em] whitespace-nowrap">
            {priceStr}
          </span>
        </div>
        <p className="font-mono text-[0.62rem] tracking-[0.18em] text-ink-soft mt-2 mb-0 uppercase">
          {product.subtitle}
        </p>

        <div className="flex gap-[0.3rem] mt-[0.9rem]">
          {product.swatch.map((c, i) => (
            <span
              key={i}
              className="w-[14px] h-[14px] rounded-full shadow-[inset_0_0_0_1px_rgba(40,28,22,0.08)]"
              style={{ background: c }}
            />
          ))}
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 flex items-center justify-center gap-[0.55rem] py-[0.7rem] px-[0.9rem] bg-paper text-ink border border-ink font-mono text-[0.62rem] tracking-[0.18em] uppercase no-underline transition-colors duration-200 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
