import Link from "next/link";
import type { Post } from "@/models/post";
import { getPosts } from "@/utils/blog";
import styles from "./blog.module.css";

export default function BlogListComponent() {
  const posts: Post[] = getPosts();

  if (posts.length === 0) {
    return;
  }

  return (
    <>
      <h1 className={styles.title}>Blog</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <PostItem key={post.slug} {...post} />
        ))}
      </ul>
    </>
  );
}

function PostItem(props: Post) {
  const { metadata, slug } = props;

  return (
    <li>
      <span className={styles.item}>
        <span className={styles.date}>{metadata.date}</span>
        <span>
          <Link href={`/blog/${slug}`}>{metadata.title}</Link>
        </span>
      </span>
    </li>
  );
}
