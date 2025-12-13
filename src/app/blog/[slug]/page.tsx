import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderComponent from "@/components/header/header";
import styles from "./post.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { metadata } = await import(`@/content/${slug}.mdx`);
    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch (_error) {
    return {
      title: "Post not found",
      description: "This blog post does not exist",
    };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);

    return (
      <>
        <HeaderComponent />
        <article className={styles.article}>
          <p className={styles.date}>
            {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
              new Date(metadata.date),
            )}
          </p>
          <Post />
        </article>
      </>
    );
  } catch (_error) {
    notFound();
  }
}
