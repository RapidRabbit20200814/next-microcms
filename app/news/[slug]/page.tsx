import { getNewsDetail } from "@/app/_libs/microcms";
import ModuleArticle from "@/app/_components/Article";
import ModuleButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const data = await getNewsDetail(resolvedParams.slug, {
    draftKey: resolvedSearchParams.dk,
  }).catch(() => notFound());
  return (
    <>
      <ModuleArticle data={data} />
      <div className={styles.footer}>
        <ModuleButtonLink href="/news">ニュース一覧へ</ModuleButtonLink>
      </div>
    </>
  );
}
