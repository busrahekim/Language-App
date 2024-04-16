import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
}

export const users = Array(10)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

export const fetchUsers = async (search: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
