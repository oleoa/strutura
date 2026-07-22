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
  tone = "campo",
  className,
}: {
  num: string;
  eyebrow: string;
  title?: React.ReactNode;
  align?: "left" | "center";
  tone?: "campo" | "bosque";
  className?: string;
}) {
  const bosque = tone === "bosque";
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
          "flex w-full items-baseline gap-3 border-b pb-3",
          bosque ? "border-bone/15" : "border-border",
          align === "center" && "justify-center",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "font-serif text-lg italic",
            bosque ? "text-mustard-bosque" : "text-mustard",
          )}
        >
          {num}
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.24em]",
            bosque ? "text-mustard-bosque" : "text-mustard-ink",
          )}
        >
          {eyebrow}
        </span>
      </div>
      {title && (
        <h2
          className={cn(
            "max-w-3xl text-3xl leading-[1.12] md:text-5xl",
            bosque ? "text-bone" : "text-foreground",
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
