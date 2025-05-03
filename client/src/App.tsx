import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@apollo/client";
import "./App.css";
import { signUp } from "./graphql/mutations/Auth";

function App() {
  const [register, { data, loading, error }] = useMutation(signUp);

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default App;
