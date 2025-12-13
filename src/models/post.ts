import type { Metadata } from "./metadata";

export type Post = {
  metadata: Metadata;
  content: string;
  slug?: string;
};
