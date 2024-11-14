import ModuleHero from "../_components/Hero";
import ModuleSheet from "../_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <ModuleHero title="Members" sub="メンバー" />
      <ModuleSheet>{children}</ModuleSheet>
    </>
  );
}
