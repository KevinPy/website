import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import type { Options } from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx", "js", "jsx"],
  reactStrictMode: true,
};

/** @type {import('rehype-pretty-code').Options} */
const options: Options = {
  theme: "material-theme-darker",
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [["rehype-pretty-code", options]],
  },
});

export default withMDX(nextConfig);
