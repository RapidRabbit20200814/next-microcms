import ModuleHero from "../_components/Hero";
import ModuleSheet from "../_components/Sheet";

type Props = {
  children: React.ReactNode;
};

// news以下すべてのページでISRを有効にする
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <ModuleHero title="News" sub="ニュース" />
      <ModuleSheet>{children}</ModuleSheet>
    </>
  );
}
