import SearchBar from "@/components/SearchBar";
import TagsCard from "@/components/TagsCard";

const Tags = () => {
  return (
    <section className="ml-6 max-w-[100svw] md:max-w-[80svw]">
      <h1 className="pb-2 pt-8 text-3xl">Tags</h1>
      <div className="max-w-[30rem]">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </div>
      <div className="ml-[-.5rem] w-[80%] py-4 sm:max-w-[30rem]">
        <SearchBar />
      </div>
      <div className="flex flex-wrap items-center gap-4 md:w-full">
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
        <TagsCard />
      </div>
    </section>
  );
};

export default Tags;
