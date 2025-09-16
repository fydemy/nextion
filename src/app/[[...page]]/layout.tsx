import Link from "next/link";
import { getData } from "../../lib/map";
import { Github } from "lucide-react";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import Image from "next/image";

export const revalidate = 60;

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ page?: string[] }>;
};

export default async function Layout({ children, params }: LayoutProps) {
  const data = await getData();
  const { page } = await params;

  return (
    <>
      <header className="w-full fixed h-24 flex items-center backdrop-blur-sm">
        <nav className="flex justify-between items-center w-full max-w-4xl mx-auto px-6">
          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="logo"
              src="/logo.svg"
              className="w-28"
            />
          </Link>
          <div className="flex gap-x-4">
            <Link
              href="https://fydemy.com"
              className="flex justify-center items-center bg-black text-white size-6"
            >
              <Github className="size-4 fill-white" />
            </Link>
            <Toggle page={page} data={data} />
          </div>
        </nav>
      </header>
      <main className="py-36 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 px-6">
        <Sidebar
          page={page}
          data={data}
          className="h-fit sticky top-36 hidden sm:block"
        />
        <section className="sm:col-span-2">{children}</section>
      </main>
    </>
  );
}
