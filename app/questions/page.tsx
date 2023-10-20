import ListElement from "@/components/ListElement";

const Questions = () => {
  return (
    <section className="ml-6 flex w-full flex-col md:w-[70%]">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="pb-2 pt-8 text-3xl">All Questions</h1>

        <div className="ml-[-.5rem] flex w-[100%] gap-2 py-4 sm:max-w-[100%]"></div>
      </div>
      <h6 className="text-md py-2">23,833,981 questions</h6>
      <div className="w-full px-4 md:w-[70%]">
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

export default Questions;
