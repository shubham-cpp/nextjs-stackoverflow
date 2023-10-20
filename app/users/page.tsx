import ProfileCards from "@/components/ProfileCards";
import SearchBar from "@/components/SearchBar";

const Users = () => {
  return (
    <section className="ml-6 flex w-full flex-col md:w-[70%]">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="pb-2 pt-8 text-3xl">Users</h1>
        <div className="ml-[-.5rem] flex w-[100%] gap-2 py-4 sm:max-w-[100%]">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 md:w-full">
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
        <ProfileCards />
      </div>
    </section>
  );
};

export default Users;
