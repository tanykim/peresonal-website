export type ProjectType = "vis" | "product" | "eng" | "analytics" | "research";
export type DataType = "personal" | "sports" | "social" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  types: ProjectType[];
  data?: DataType[];
  url?: string;
  isPrivate?: boolean;
}
