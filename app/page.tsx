import styles from "./page.module.css";
import Image from "next/image";

import ModuleButtonLink from "@/app/_components/ButtonLink";
import ModuleNewsLink from "@/app/_components/NewsLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: 1,
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: 2,
      title: "当社のリーダーが業界リーダーTOP10に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: 3,
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const name = "世界";
  const sliceData = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <ModuleNewsLink news={sliceData} />
        <div className={styles.newsLink}>
          <ModuleButtonLink href="/news">もっとみる</ModuleButtonLink>
        </div>
      </section>
    </>
  );
}