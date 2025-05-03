import { z } from "zod";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const AuthResolvers = {
  Query: {
    book: () => [
      {
        name: "John Doe",
      },
    ],
  },

  Mutation: {
    signUp: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const { success } = userSchema.safeParse({ email, password });

      if (!success) {
        throw new Error("Invalid email or password");
      }

      const existingUser = await UserModel.findOne({
        email,
      });

      if (existingUser) {
        throw new Error("User already exists");
      }
      console.log(`email: ${email}, password: ${password}`);

      const hashedPassword = await bcrypt.hash(password, 10);

      const createUser = await UserModel.create({
        email,
        password: hashedPassword,
      });

      return "Created user successfully";
    },

    signIn: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const { success } = userSchema.safeParse({ email, password });

      if (!success) {
        throw new Error("Invalid email or password");
      }
      const user = await UserModel.findOne({
        email,
      }).select({ email: 1, password: 1 });

      if (!user) {
        throw new Error("User not found");
      }

      const hashedPassword = await bcrypt.compare(password, user.password);

      if (!hashedPassword) {
        throw new Error("Invalid password");
      }

      return "Signed in successfully";
    },
  },
};
