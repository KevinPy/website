import { Metadata } from "@/models/metadata";
import { Post } from "@/models/post";
import fs from "fs";
import path from "path";

export function getPosts(): Array<Post> {
  return getMDXData(path.join(process.cwd(), "src", "content"));
}

function getMDXData(dir: string): Array<Post> {
  let files = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  return files.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function readMDXFile(filePath: string): Post {
  let rawContent = fs.readFileSync(filePath, "utf-8");

  // Regex pour capturer export const metadata = { ... }
  let metadataRegex = /export\s+const\s+metadata\s+=\s+\{([\s\S]*?)\};/;
  let match = metadataRegex.exec(rawContent);

  if (!match) {
    throw new Error("No metadata export found in MDX file");
  }

  let metadataBlock = match[1];
  let content = rawContent.replace(metadataRegex, "").trim();
  let metadata: Partial<Metadata> = {};

  // Parser les propriétés de l'objet metadata
  let lines = metadataBlock.trim().split("\n");
  lines.forEach((line) => {
    let propertyMatch = line.match(/^\s*(\w+):\s*"([^"]+)"\s*,?$/);
    if (propertyMatch) {
      let [, key, value] = propertyMatch;
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  return {
    metadata: metadata as Metadata,
    content,
  };
}
