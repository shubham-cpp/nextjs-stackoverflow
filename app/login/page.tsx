import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import Link from "next/link";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center space-y-4 py-24">
        <h2 className="font-serif text-4xl font-bold">Login page</h2>
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
    </div>
  );
};

export default Login;
