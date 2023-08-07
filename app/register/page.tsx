import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import Link from "next/link";
import RegisterForm from "./registerForm";

const Register = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 py-24">
      <h2 className="font-serif text-4xl font-bold">Register page</h2>

      <RegisterForm />
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
