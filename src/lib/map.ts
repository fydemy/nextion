import { MdBlock } from "notion-to-md/build/types";
import { n2m } from "./notion";

function map(nodes: MdBlock[], parentSlug = ""): Record<string, string> {
  const pages: Record<string, string> = {};

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

let cachedData: Record<string, string> | null = null;

export async function getData() {
  if (!cachedData) {
    const blocks = await n2m.pageToMarkdown(process.env.WORKSPACE_ID!);
    cachedData = map(blocks);
  }
  return cachedData;
}
