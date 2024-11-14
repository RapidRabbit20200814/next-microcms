import Image from "next/image";

import styles from "./index.module.css";
import Link from "next/link";
import ModuleCategory from "@/app/_components/Category";
import ModuleDate from "@/app/_components/Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function ModuleNewsLink({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <Image className={styles.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <ModuleCategory category={article.category} />
                <ModuleDate date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
