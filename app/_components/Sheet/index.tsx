import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function ModuleSheet({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
