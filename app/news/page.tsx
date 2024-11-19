import { getNewsList } from "@/app/_libs/microcms";
import ModuleNewsList from "@/app/_components/NewsList";
import ModulePagination from "@/app/_components/Pagination";
import ModuleSearchField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <ModuleSearchField />
      <ModuleNewsList news={news} />
      <ModulePagination totalCount={totalCount} />
    </>
  );
}
