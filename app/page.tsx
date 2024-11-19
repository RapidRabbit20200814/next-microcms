import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIST } from "@/app/_constants";
import ModuleButtonLink from "@/app/_components/ButtonLink";
import ModuleNewsList from "@/app/_components/NewsList";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIST });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <ModuleNewsList news={data.contents} />
        <div className={styles.newsList}>
          <ModuleButtonLink href="/news">もっとみる</ModuleButtonLink>
        </div>
      </section>
    </>
  );
}
