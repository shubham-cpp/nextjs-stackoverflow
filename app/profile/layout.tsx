import { getServerSession } from "next-auth";
import TabBar from "./TabBar";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function ProfileRootLayout({ children }: Props) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="flex w-full flex-col p-4 md:max-w-5xl">
      <TabBar />
      <section className="flex-grow">{children}</section>
    </main>
  );
}
