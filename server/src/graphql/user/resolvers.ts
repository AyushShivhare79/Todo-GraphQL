import UserModel from "../../models/user.model";

const queries = {
  book: () => [
    {
      name: "John Doe",
    },
  ],
  user: () => [
    {
      id: "1",
      email: "john@gmail.com",
      password: "12345678",
    },
  ],
};

const mutations = {
  createUser: async (
    _: any,
    { email, password }: { email: string; password: string }
  ) => {
    const response = await UserModel.create({
      email,
      password,
    });

    return "Created user successfully";
  },
};

export const resolvers = { queries, mutations };
