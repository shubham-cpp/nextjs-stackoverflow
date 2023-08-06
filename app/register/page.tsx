import GoogleGithubButtons from "@/components/buttons/GoogleGithubButtons";
import Link from "next/link";
import RegisterForm from "./registerForm";

const Register = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center py-24 w-full">
      <h2 className="text-4xl font-bold font-serif">Register page</h2>

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
