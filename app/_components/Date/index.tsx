import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  date: string;
};

export default function ModuleDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      <time>{date}</time>
    </span>
  );
}