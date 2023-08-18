import ListElement from "@/components/ListElement";

export default function Home() {
  return (
    <section className="ml-6 flex w-full flex-col md:w-[70%]">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="pb-2 pt-8 text-3xl">Top Questions</h1>

        <div className="ml-[-.5rem] flex w-full gap-2 py-4 sm:max-w-[100%]"></div>
      </div>
      <div className="w-full px-2 md:w-[70%]">
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
