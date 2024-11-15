import { getNewsList } from "@/app/_libs/microcms";
import ModuleNewsList from "@/app/_components/NewsList";

export default async function Page() {
  const { contents: news } = await getNewsList();
  return (
    <div>
      <ModuleNewsList news={news}></ModuleNewsList>
    </div>
  );
}
