import { useMutation } from "@apollo/client";
import "./App.css";
import { signIn, signUp } from "./graphql/mutations/Auth";

function App() {
  // const { loading, data } = useQuery(Book);
  const [test, { data, loading, error }] = useMutation(signUp);

  if (loading) {
    return <div>Loading...</div>;
  }

  const createUser = async () => {
    test({
      variables: {
        email: "test2@gmail.com",
        password: "12345678",
      },
    });
  };

  return (
    <>
      <button onClick={createUser}>Create User</button>
    </>
  );
}

export default App;
