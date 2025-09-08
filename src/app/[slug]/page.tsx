import ids from "@/lib/ids";
import { n2m } from "@/lib/notion";
import { marked } from "marked";

export const revalidate = 120;

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blocks = await n2m.pageToMarkdown(ids.parent);
  const data = n2m.toMarkdownString(blocks);
  const html = marked(data[slug]);

  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
}
