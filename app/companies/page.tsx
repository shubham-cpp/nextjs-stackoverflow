import ListElement from "@/components/ListElement";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

const Companies = () => {
  return (
    <section className="ml-6 flex w-full flex-col md:w-[70%]">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="pb-2 pt-8 text-3xl">Companies</h1>
        <p className="text-gray-400">
          Learn about what it&apos;s like to work at companies
        </p>
        <div className="ml-[-.5rem] flex w-full gap-2 py-4 sm:max-w-full">
          <SearchBar />
          {/* <SearchBar /> */}
          <Button>Search</Button>
        </div>
      </div>
      <h6 className="text-md py-2">97 Companies</h6>
      <div className="w-full px-2">
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
