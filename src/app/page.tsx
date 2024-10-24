import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col justify-start items-center h-[100vh] w-full ">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-20  h-full lg:gap-12 sm:px-4 md:gap-8">
          <div className="w-full h-full  md:col-span-4 col-span-1 rounded-md px-4 py-0">
            <div className="flex flex-col items-center justify-center align-center">
              <Image
                src="/map.png"
                alt="Map"
                width={800}
                height={600}
                className="object-cover rounded-md"
                alt-text="Placeholder map for interactive water quality map."
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
