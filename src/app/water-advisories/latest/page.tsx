import MaxWidthWrapper from "@/components/Max-Width-Wrapper";

const LatestWaterAdvisoriesPage = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 h-full min-h-[100vh]  w-full ">
            <h3 className="col-span-1 w-full text-nowrap">
              Latest Water Advisories
            </h3>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default LatestWaterAdvisoriesPage;
