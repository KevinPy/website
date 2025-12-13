import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "@/models/metadata";
import type { Post } from "@/models/post";

export function getPosts(): Array<Post> {
  return getMDXData(path.join(process.cwd(), "src", "content"));
}

function getMDXData(dir: string): Array<Post> {
  const files = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  return files.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function readMDXFile(filePath: string): Post {
  const rawContent = fs.readFileSync(filePath, "utf-8");

  // Regex pour capturer export const metadata = { ... }
  const metadataRegex = /export\s+const\s+metadata\s+=\s+\{([\s\S]*?)\};/;
  const match = metadataRegex.exec(rawContent);

  if (!match) {
    throw new Error("No metadata export found in MDX file");
  }

  const metadataBlock = match[1];
  const content = rawContent.replace(metadataRegex, "").trim();
  const metadata: Partial<Metadata> = {};

  // Parser les propriétés de l'objet metadata
  const lines = metadataBlock.trim().split("\n");
  lines.forEach((line) => {
    const propertyMatch = line.match(/^\s*(\w+):\s*"([^"]+)"\s*,?$/);
    if (propertyMatch) {
      const [, key, value] = propertyMatch;
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return {
    metadata: metadata as Metadata,
    content,
  };
}
