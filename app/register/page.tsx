import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-24 ">
      <h2 className="text-4xl font-bold font-serif">Register page</h2>

      <form className="flex flex-col items-center space-y-4 w-[90svw] sm:w-[40ch]">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fullName">Full Name</Label>
          <Input type="text" id="fullName" placeholder="Full Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </form>
      <p>OR</p>
      <GoogleGithubButtons />

      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 ">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
