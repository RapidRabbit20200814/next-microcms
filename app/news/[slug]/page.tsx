import { getNewsDetail } from "@/app/_libs/microcms";
import ModuleArticle from "@/app/_components/Article";
import ModuleButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <ModuleArticle data={data} />
      <div className={styles.footer}>
        <ModuleButtonLink href="/news">ニュース一覧へ</ModuleButtonLink>
      </div>
    </>
  );
}
