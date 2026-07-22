import type { ReactNode } from "react";

/* Primitivos compartilhados da página /brand: a doc viva da marca.
   Reproduzem a furniture editorial do Nature Warm (eyebrow, selo,
   assinatura, section header numerado, callout). */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1080px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.24em] text-mustard-ink ${className}`}
    >
      {children}
    </span>
  );
}

export function Selo({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted ${className}`}
    >
      {children}
    </span>
  );
}

export function Assinatura({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-[0.22em] text-mustard-ink ${className}`}
    >
      Leo Abreu · Strutura
    </span>
  );
}

export function Section({
  id,
  num,
  title,
  meta,
  sub = false,
  children,
}: {
  id: string;
  num: string;
  title: ReactNode;
  meta?: string;
  sub?: boolean;
  children: ReactNode;
}) {
  const Heading = sub ? "h3" : "h2";
  return (
    <section id={id} className={`scroll-mt-8 ${sub ? "mb-16" : "mb-20"}`}>
      <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-ink/16 pb-3">
        <span className="font-serif text-sm font-medium italic text-mustard-ink">
          {num}
        </span>
        <Heading
          className={`font-serif font-medium tracking-[-0.01em] [font-variation-settings:'opsz'_60] ${
            sub ? "text-[22px] sm:text-2xl" : "text-[26px] sm:text-3xl"
          }`}
        >
          {title}
        </Heading>
        {meta ? (
          <span className="ml-auto text-xs text-ink-muted max-sm:w-full max-sm:ml-0 sm:text-right">
            {meta}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function Subhead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3.5 mt-9 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
      {children}
    </h3>
  );
}

export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink [&_code]:rounded-[3px] [&_code]:bg-ink/[0.07] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-ink ${className}`}
    >
      {children}
    </p>
  );
}

export function Callout({
  title,
  tag,
  children,
}: {
  title?: ReactNode;
  tag?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 max-w-[740px] border-l-[3px] border-mustard bg-bone/65 px-5.5 py-4.5 text-sm leading-[1.7] text-ink-soft [&_strong]:text-ink [&_code]:rounded-[3px] [&_code]:bg-ink/[0.07] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-ink">
      {title ? (
        <span className="mb-1.5 block font-serif text-[17px] italic text-ink">
          {tag ? (
            <span className="mr-2 inline-block rounded-[2px] bg-primary px-2.5 py-0.5 align-middle font-sans text-[10px] font-semibold not-italic uppercase tracking-[0.16em] text-bone">
              {tag}
            </span>
          ) : null}
          {title}
        </span>
      ) : null}
      {children}
    </div>
  );
}

export function Card({
  label,
  title,
  children,
}: {
  label?: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-5.5">
      {label ? (
        <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </div>
      ) : null}
      {title ? (
        <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] [font-variation-settings:'opsz'_40] [&_em]:italic [&_em]:text-mustard">
          {title}
        </h4>
      ) : null}
      <div className="text-[13.5px] leading-[1.65] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink">
        {children}
      </div>
    </div>
  );
}

/* Lista com bullet mostarda: usada em specs, modos, regras */
export function DotList({
  items,
  dotClassName = "bg-mustard",
}: {
  items: ReactNode[];
  dotClassName?: string;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-4 text-[13px] leading-[1.6] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink"
        >
          <span
            aria-hidden
            className={`absolute left-0.5 top-2 size-[5px] rounded-full ${dotClassName}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
