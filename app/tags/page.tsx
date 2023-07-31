import SearchBar from "@/components/SearchBar";
import TagsCard from "@/components/TagsCard";

const Tags = () => {
  return (
    <section className="max-w-[100svw] ml-6 md:max-w-[80svw]">
      <h1 className="text-3xl pb-2 pt-8">Tags</h1>
      <div className="max-w-[30rem]">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </div>
      <div className="py-4 ml-[-.5rem] sm:max-w-[30rem] w-[80%]">
        <SearchBar />
      </div>
      <div className="flex flex-wrap items-center gap-4 md:w-[100%]">
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
