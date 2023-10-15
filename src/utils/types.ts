export type ProjectType = "vis" | "product" | "eng" | "analytics" | "research";
export type DataType = "personal" | "sports" | "social" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  finalYear?: number;
  isOngoing?: boolean;
  types: ProjectType[];
  data?: DataType[];
  url?: string;
  youtube?: string;
  isPrivate?: boolean;
  notes?: {
    location: string;
    action: string;
    type: string;
    links: string[];
  }[];
}
