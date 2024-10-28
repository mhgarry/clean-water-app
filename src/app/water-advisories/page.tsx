import MaxWidthWrapper from "@/components/Max-Width-Wrapper";

const CriticalWaterAdvisoriesPage = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 h-full min-h-[100vh]  w-full ">
            <h1 className="col-span-1 w-full text-nowrap">
              Critical Water Advisories
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default CriticalWaterAdvisoriesPage;
