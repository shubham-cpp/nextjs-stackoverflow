import ListElement from "@/components/ListElement";

export default function Home() {
  return (
    <section className="flex flex-col md:w-[70%] w-[100%] ml-6">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="text-3xl pb-2 pt-8">Top Questions</h1>

        <div className="flex gap-2 py-4 ml-[-.5rem] sm:max-w-[100%] w-[100%]"></div>
      </div>
      <div className="w-[100%] md:w-[70%] ml-[-3rem]">
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
      </div>
    </section>
  );
}
