import { getData } from "@/lib/map";
import yaml from "js-yaml";

import { marked } from "marked";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ page?: string[] }>;
};

async function getPage(slug: string) {
  const data = await getData();
  let content = data[slug];
  if (!content) notFound();

  const match = content.match(/```yaml\s*([\s\S]*?)```/);
  let config: { title?: string; description?: string } = {};

  if (match) {
    config = yaml.load(match[1]) as { title?: string; description?: string };
    content = content.replace(match[0], "").trim();
  }

  return { config, content };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;

  const slug = page?.join("/") || process.env.ROOT_FALLBACK!;

  const { config, content } = await getPage(slug);

  return {
    title: config?.title ?? slug,
    description: config?.description ?? content.slice(0, 150),
  };
}

export default async function Home({ params }: PageProps) {
  const { page } = await params;

  const slug = page?.join("/") || process.env.ROOT_FALLBACK!;
  const { content } = await getPage(slug);

  const html = marked(content);

  return (
    <div
      className="prose leading-snug"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
