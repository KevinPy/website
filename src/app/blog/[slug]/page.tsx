import HeaderComponent from "@/components/header/header";
import styles from "./post.module.css";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <HeaderComponent />
      <article className={styles.article}>
        <p className={styles.date}>
          {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
            new Date(metadata.date)
          )}
        </p>
        <Post />
      </article>
    </>
  );
}
