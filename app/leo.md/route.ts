import { readFile } from "node:fs/promises";
import path from "node:path";

// Serve o app/brand/leo.md como texto puro em strutura.ai/leo.md.
// force-static: lido no build; commit + deploy = URL atualizada.
export const dynamic = "force-static";

export async function GET() {
  const file = await readFile(
    path.join(process.cwd(), "app", "brand", "leo.md"),
    "utf-8"
  );
  return new Response(file, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
