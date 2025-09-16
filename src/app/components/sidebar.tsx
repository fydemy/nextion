"use client";

import { File, Folder } from "lucide-react";
import Link from "next/link";

function renderLink(slug: string, activeSlug: string) {
  const isNested = slug.includes("/");
  const parts = slug.split("/");

  const label = isNested ? parts[1] : parts[0];
  const path = slug;

  const Icon = isNested ? File : Folder;

  const isActive = activeSlug === path;

  return (
    <Link
      href={`/${path}`}
      className={`capitalize flex gap-x-2 items-center ${
        isActive ? "text-black" : "text-neutral-500"
      } ${isNested ? "ml-4" : ""}`}
      key={path}
    >
      <Icon className="size-3" strokeWidth={3} />
      {label}
    </Link>
  );
}

const Sidebar = ({
  page,
  data,
  className,
}: {
  page?: string[];
  data: Record<string, string>;
  className: string;
}) => {
  const activePage = page?.join("/") || "home";

  return (
    <aside className={className}>
      <div className="space-y-2">
        {Object.keys(data).map((slug) => renderLink(slug, activePage))}
      </div>
    </aside>
  );
};

export default Sidebar;
