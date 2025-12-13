import Link from "next/link";
import type { Data } from "@/models/data";
import styles from "./list.module.css";

type Props = {
  data: Data[];
  title: string;
};

type PropsItem = {
  year: string;
  name: string;
  url?: string;
  description?: string;
};

export default function ListComponent(props: Props) {
  const { data, title } = props;

  const items = data.map((item) => <ProjectItem key={item.name} {...item} />);

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
      <span className={styles.item}>
        <span className={styles.date}>{year}</span>
        {url ? (
          <span>
            <Link href={url} target="_blank">
              {name}
            </Link>
          </span>
        ) : (
          <span>{name}</span>
        )}
        {props.description && (
          <span className={styles.description}>{props.description}</span>
        )}
      </span>
    </li>
  );
}
