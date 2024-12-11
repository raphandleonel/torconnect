import type { VFileCompatible } from "vfile";
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: VFileCompatible) {
  const result = await remark().use(html).process(markdown);

  // Replace custom syntax `[copy-button|link]` with actual HTML
  const htmlString = result.toString().replace(
    /\[copy-button\|([^\]]+)\]/g,
    (match, link) =>
      `<button class="text-blue" data-link="${link}" onclick="navigator.clipboard.writeText('${link}').then(() => alert('Link Copied to clipboard!'))">Copy</button>`
  );

  return htmlString;
}
