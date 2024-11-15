import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import ModuleNewsList from "@/app/_components/NewsList";
import ModuleSearchField from "@/app/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <ModuleSearchField />
      <ModuleNewsList news={news} />
    </>
  );
}
