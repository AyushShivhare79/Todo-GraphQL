const queries = {
  book: () => [
    {
      name: "John Doe",
    },
  ],
  user: () => [
    {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
      password: "12345678",
    },
  ],
};

const mutations = {};

export const resolvers = { queries, mutations };
