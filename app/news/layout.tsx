import ModuleHero from "../_components/Hero";
import ModuleSheet from "../_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <ModuleHero title="News" sub="ニュース" />
      <ModuleSheet>{children}</ModuleSheet>
    </>
  );
}
