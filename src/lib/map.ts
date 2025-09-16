import { MdBlock } from "notion-to-md/build/types";

export function map(nodes: MdBlock[], parentSlug = ""): Record<string, string> {
  let pages: Record<string, string> = {};

  for (const node of nodes) {
    if (node.type === "child_page") {
      const slug = node.parent.toLowerCase().replace(/\s+/g, "-");
      const fullSlug = parentSlug ? `${parentSlug}/${slug}` : slug;

      const content = node.children
        .filter((c) => c.parent)
        .map((c) => c.parent)
        .join("\n\n");

      pages[fullSlug] = content;

      const childPages = map(node.children, fullSlug);
      Object.assign(pages, childPages);
    }
  }

  return pages;
}
