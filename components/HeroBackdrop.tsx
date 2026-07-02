import Image from "next/image";
import { HERO_IMAGE, HERO_IMAGE_MOBILE } from "@/lib/site";

/*
 * Cena de fundo do hero — "floresta-catedral à distância".
 * Componente de arte: os gradientes compostos vivem em style-props porque são
 * a própria cena (exceção isolada à regra de utilitários semânticos).
 * Camadas, de trás pra frente:
 *   L0 — luz de alvorada descentrada + névoa + base do bosque
 *   L1 — SVG inline: colunata de troncos, feixes de luz, troncos de moldura
 *   L2 — imagem final (quando HERO_IMAGE existir; substitui só o L1)
 *   L3 — poça de luz no chão + vinheta + scrim
 * O grão (L4) entra pela classe .grain-bosque na própria seção.
 */

const DISTANT_TRUNKS: {
  cx: number;
  half: number;
  opacity: number;
  tilt: number;
}[] = [
  { cx: 180, half: 9, opacity: 0.34, tilt: -1.2 },
  { cx: 320, half: 6, opacity: 0.28, tilt: 0.8 },
  { cx: 445, half: 11, opacity: 0.4, tilt: -0.6 },
  { cx: 615, half: 8, opacity: 0.3, tilt: 1.4 },
  { cx: 760, half: 13, opacity: 0.42, tilt: -1.5 },
  { cx: 880, half: 7, opacity: 0.29, tilt: 0.5 },
  { cx: 1030, half: 10, opacity: 0.38, tilt: 1.1 },
  { cx: 1180, half: 12, opacity: 0.36, tilt: -0.9 },
];

const FOREGROUND_TRUNKS: { cx: number; half: number }[] = [
  { cx: 40, half: 36 },
  { cx: 150, half: 22 },
  { cx: 1372, half: 44 },
];

function trunkPath(cx: number, half: number, yTop: number, yBottom: number) {
  const topHalf = half * 0.85;
  return `M ${cx - half},${yBottom} L ${cx + half},${yBottom} L ${cx + topHalf},${yTop} L ${cx - topHalf},${yTop} Z`;
}

export default function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* L0 — o ar */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(90% 55% at 62% -12%, rgba(228,210,168,0.30) 0%, rgba(228,210,168,0.10) 34%, rgba(228,210,168,0) 62%)",
            "radial-gradient(120% 34% at 60% 58%, rgba(228,210,168,0.09) 0%, rgba(228,210,168,0) 70%)",
            "linear-gradient(174deg, #26382b 0%, #1d2c23 48%, #14201a 100%)",
          ].join(", "),
        }}
      />

      {/* L1 — colunata + feixes de luz (sai de cena quando a imagem chega) */}
      {!HERO_IMAGE && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="hero-canopy-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.16" stopColor="#fff" stopOpacity="0" />
              <stop offset="0.36" stopColor="#fff" stopOpacity="1" />
            </linearGradient>
            <mask id="hero-canopy-mask">
              <rect width="1440" height="900" fill="url(#hero-canopy-fade)" />
            </mask>
            <linearGradient id="hero-beam" x1="0.6" y1="0" x2="0.4" y2="1">
              <stop offset="0" stopColor="#e4d2a8" stopOpacity="0.16" />
              <stop offset="0.45" stopColor="#e4d2a8" stopOpacity="0.06" />
              <stop offset="0.75" stopColor="#e4d2a8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* colunata distante — a "nave" fica no vão 445–615 */}
          <g mask="url(#hero-canopy-mask)" fill="#14201a">
            {DISTANT_TRUNKS.map((t) => (
              <path
                key={t.cx}
                d={trunkPath(t.cx, t.half, 120, 900)}
                opacity={t.opacity}
                transform={`rotate(${t.tilt} ${t.cx} 500)`}
              />
            ))}
          </g>

          {/* feixes de luz do dossel, ~15° da vertical */}
          <polygon
            points="870,-40 940,-40 640,940 540,940"
            fill="url(#hero-beam)"
          />
          <polygon
            points="985,-40 1025,-40 745,940 685,940"
            fill="url(#hero-beam)"
            opacity="0.55"
            className="hidden md:block"
          />

          {/* troncos de primeiro plano — moldura, na frente da luz */}
          <g fill="#14201a" opacity="0.92">
            {FOREGROUND_TRUNKS.map((t) => (
              <path key={t.cx} d={trunkPath(t.cx, t.half, -20, 920)} />
            ))}
          </g>
        </svg>
      )}

      {/* L2 — imagem final (herda scrim, vinheta e grão do sistema).
          Variante retrato no celular; imagem padrão em md+. */}
      {HERO_IMAGE_MOBILE && (
        <Image
          src={HERO_IMAGE_MOBILE}
          alt=""
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
      )}
      {HERO_IMAGE && (
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          quality={72}
          sizes="100vw"
          className={`object-cover object-center${
            HERO_IMAGE_MOBILE ? " hidden md:block" : ""
          }`}
        />
      )}

      {/* L3 — poça de luz + vinheta + scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(50% 16% at 54% 98%, rgba(228,210,168,0.08) 0%, transparent 70%)",
            "radial-gradient(70% 68% at 28% 55%, rgba(20,32,26,0.50) 0%, rgba(20,32,26,0.22) 50%, transparent 75%)",
            "radial-gradient(125% 105% at 50% 42%, transparent 52%, rgba(20,32,26,0.42) 100%)",
            "linear-gradient(180deg, rgba(20,32,26,0.30) 0%, transparent 26%, transparent 72%, rgba(20,32,26,0.55) 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
