export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

export type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

export type Post = {
  slug?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  content?: string;
  category?: string;
  coverImage?: string;
  image?: string; // Retain this field for compatibility
  author?: string;
  authorImage?: string;
  authorBio?: string; // Added field for author's biography
  readTime?: string; // Added field for estimated reading time
  tags?: string[]; // Optional field for tags
  [key: string]: any; // Catch-all for additional dynamic fields
};


