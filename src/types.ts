export type Author = {
  id: string;
  name: string;
  bio: string;
  image: string;
};

export type Comment = {
  content: string;
};

export type BookStatus =
  | "NOT_AVAILABLE"
  | "AVAILABLE"
  | "BORROWED"
  | "RESERVED_BY_OTHERS"
  | "RESERVED_BY_ME";

export type Book = {
  id: string;
  title: string;
  coverImage: string;
  authors: Author[];
  description: string;
  status: BookStatus;
  edition: string;
  releaseYear: string;
  likes?: number;
  dislikes?: number;
  comments?: Comment[];
  reservedBy?: User;
  borrowedBy?: User;
  count: number;
  history: Borrow[];
  category: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  comments?: Comment[];
  history: Borrow[];
};

export type Borrow = {
  id: string;
  user: User["id"];
  book: Book["id"];
  startDate: string;
  endDate: string;
};
