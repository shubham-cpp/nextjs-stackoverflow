import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import Link from "next/link";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-24 ">
      <h2 className="text-4xl font-bold font-serif">Login page</h2>
      <LoginForm />
      <p>OR</p>

      <GoogleGithubButtons />
      <p>
        Do not have an account?{" "}
        <Link href="/register" className="text-blue-500 ">
          Create New
        </Link>
      </p>
    </div>
  );
};

export default Login;
