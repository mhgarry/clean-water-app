import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import MapToggle from "@/components/Map-Toggle";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full ">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-20 h-full lg:gap-12  md:gap-8">
          {/* Parent container for MapToggle */}
          <div className="w-full h-full md:col-span-4 col-span-1 rounded-md space-y-2">
            {/* Align MapToggle to the start */}
            <div className="col-span-1 flex justify-start">
              <MapToggle />
            </div>
            {/* Center the Image */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/map.png"
                alt="Map"
                width={800}
                height={600}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
