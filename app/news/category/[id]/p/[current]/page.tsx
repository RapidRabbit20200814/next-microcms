import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import ModuleNewsList from "@/app/_components/NewsList";
import ModulePagination from "@/app/_components/Pagination";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const current = parseInt(resolvedParams.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(resolvedParams.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <ModuleNewsList news={news} />
      <ModulePagination totalCount={totalCount} current={current} />
    </>
  );
}
