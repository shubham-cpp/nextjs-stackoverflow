import SearchBar from "@/components/SearchBar";
import TagsCard from "@/components/TagsCard";

const Tags = () => {
  return (
    <section className="ml-[20rem] pt-[2rem]">
      <h1 className="text-3xl pb-2">Tags</h1>
      <p className="max-w-[50%] py-4">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <div className="pt-4 ml-[-.5rem] w-[30rem]">
        <SearchBar />
      </div>
      <div className="pt-10"></div>
      <div className="flex flex-wrap gap-5">
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
