import UserModel from "../../models/user.model";

const queries = {
  book: () => [
    {
      name: "John Doe",
    },
  ],
  user: () => {},
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
  signIn: async (
    _: any,
    { email, password }: { email: string; password: string }
  ) => {
    const user = await UserModel.findOne({
      email,
      password,
    }).select({ email: 1, password: 1 });

    console.log(`User: ${user}`);

    if (!user) {
      throw new Error("User not found");
    }

    return "Signed in successfully";
  },
};

export const resolvers = { queries, mutations };
