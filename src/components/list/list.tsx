import { Data } from "@/models/data";
import styles from "./list.module.css";
import Link from "next/link";

type Props = {
  data: Data[];
  title: string;
};

type PropsItem = {
  year: string;
  name: string;
  url?: string;
};

export default function ListComponent(props: Props) {
  const { data, title } = props;

  const items = data.map((item, i) => <ProjectItem key={i} {...item} />);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>{items}</ul>
    </section>
  );
}

function ProjectItem(props: PropsItem) {
  const { year, name, url } = props;
  return (
    <li>
      <span className={styles.date}>{year}</span>
      {url ? (
        <Link href={url} target="_blank">
          <span>{name}</span>
        </Link>
      ) : (
        <span>{name}</span>
      )}
    </li>
  );
}
