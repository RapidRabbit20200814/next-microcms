import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import ModuleNewsList from "@/app/_components/NewsList";
import ModuleCategory from "@/app/_components/Category";
import ModulePagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const resolveParams = await params;
  const category = await getCategoryDetail(resolveParams.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <ModuleCategory category={category} /> の一覧
      </p>
      <ModuleNewsList news={news}></ModuleNewsList>
      <ModulePagination totalCount={totalCount} basePath={`/news/category/${category.id}`} />
    </>
  );
}
