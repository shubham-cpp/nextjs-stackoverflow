import ListElement from "@/components/ListElement";

const Questions = () => {
  return (
    <section className="flex flex-col w-full md:w-[70%] ml-6">
      <div className="max-w-[100svw] md:max-w-[80svw]">
        <h1 className="text-3xl pb-2 pt-8">All Questions</h1>

        <div className="flex gap-2 py-4 ml-[-.5rem] sm:max-w-[100%] w-[100%]"></div>
      </div>
      <h6 className="text-md py-2">23,833,981 questions</h6>
      <div className="w-full md:w-[70%] px-4">
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
