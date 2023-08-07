import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  return <div>This is a protected route</div>;
};
export default ProfilePage;
