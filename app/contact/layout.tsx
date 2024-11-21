import ModuleHero from "../_components/Hero";
import ModuleSheet from "../_components/Sheet";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <ModuleHero title="Contact" sub="お問い合わせ" />
      <ModuleSheet>{children}</ModuleSheet>
    </>
  );
}
