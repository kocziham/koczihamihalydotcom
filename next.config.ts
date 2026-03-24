import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Remark / rehype plugins can be added here later
  options: {},
});

const nextConfig: NextConfig = {
  // Allow .mdx files to be treated as pages / imports
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
