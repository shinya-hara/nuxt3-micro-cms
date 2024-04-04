import type { MicroCMSImage } from "microcms-js-sdk";
import type { Category } from "./category";

export type Blog = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
};
