import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="flex w-full flex-col p-4 md:max-w-5xl">
      This is a protected route
    </main>
  );
};
export default ProfilePage;
