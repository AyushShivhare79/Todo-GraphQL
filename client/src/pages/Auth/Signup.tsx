import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof userSchema>> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="signupContainer">
        <h1>Signup</h1>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                className="inputField"
                placeholder="john@gmail.com"
                autoComplete="off"
                type="email"
                id="email"
                name="email"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                className="inputField"
                placeholder="12345678"
                autoComplete="off"
                type="password"
                id="password"
                name="password"
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>
            <button className="submitButton" type="submit">
              Signup
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
