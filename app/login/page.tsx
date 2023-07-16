import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const Login = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-24 ">
      <h2 className="text-4xl font-bold font-serif">Login page</h2>
      <form className="flex flex-col items-center space-y-4 w-[90svw] sm:w-[40ch]">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
      </form>
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
