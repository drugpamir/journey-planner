export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
} | null;

export const UserByDefault: User = {
  id: "user",
  email: "user@otus.ru",
  name: "user",
};
