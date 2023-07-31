import ListElement from "@/components/ListElement";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const Companies = () => {
  return (
    <section className="flex flex-col md:w-[70%] w-[100%] ml-6">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="text-3xl pb-2 pt-8">Companies</h1>
        <p className="text-gray-400">
          {"Learn about what it's like to work at companies"}
        </p>
        <div className="flex gap-2 py-4 ml-[-.5rem] sm:max-w-[100%] w-[100%]">
          <SearchBar />
          <SearchBar />
          <Button>Search</Button>
        </div>
      </div>
      <h6 className="text-md py-2">97 Companies</h6>
      <div className="w-[100%] ml-[-3rem]">
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
      </div>
    </section>
  );
};

export default Companies;
