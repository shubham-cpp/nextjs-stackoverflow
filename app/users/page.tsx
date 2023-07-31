import ProfileCards from "@/components/ProfileCards";
import SearchBar from "@/components/SearchBar";

const Users = () => {
  return (
    <section className="flex flex-col md:w-[70%] w-[100%] ml-6">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="text-3xl pb-2 pt-8">Users</h1>
        <div className="flex gap-2 py-4 ml-[-.5rem] sm:max-w-[100%] w-[100%]">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 md:w-[100%] ">
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
