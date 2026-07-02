import { cn } from "@/lib/utils";

/*
 * Header editorial de seção: número (sequência real da página) + eyebrow
 * sobre uma linha fina, e o título opcional embaixo.
 */
export default function SectionHeader({
  num,
  eyebrow,
  title,
  align = "left",
  className,
}: {
  num: string;
  eyebrow: string;
  title?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full items-baseline gap-3 border-b border-border pb-3",
          align === "center" && "justify-center",
        )}
      >
        <span aria-hidden className="font-serif text-lg italic text-mustard">
          {num}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mustard-ink">
          {eyebrow}
        </span>
      </div>
      {title && (
        <h2 className="max-w-3xl text-3xl leading-[1.12] text-foreground md:text-5xl">
          {title}
        </h2>
      )}
    </div>
  );
}
