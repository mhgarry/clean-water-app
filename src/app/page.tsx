import MaxWidthWrapper from "@/components/Max-Width-Wrapper";
import MapToggle from "@/components/Map-Toggle";
import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col justify-start items-start h-[100vh] w-full ">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 xl:gap-20 h-full lg:gap-12  md:gap-8">
          {/* Parent container for MapToggle */}
          <div className="w-full h-full md:col-span-4 col-span-1 rounded-md space-y-4">
            <h2 className="text-primary font-bold text-3xl">
              Water Safety Map
            </h2>
            {/* Align MapToggle to the start */}

            {/* Center the Image */}

            <div className="flex flex-col items-center justify-center space">
              <Image
                src="/map.png"
                alt="Map"
                width={800}
                height={600}
                className="object-cover rounded-md border-solid border-border shadow-xl"
              />
            </div>
            <div className="grid grid-cols-2">
              {" "}
              <div className="col-span-1 col-start-1">
                <p className="text-xl font-bold text-primary">Map Key</p>
                <MapToggle />
              </div>
              <div className="col-span-1 col-start-2">
                <p className="text-xl font-bold text-primary">
                  Clean drinking water is a human right not a privilege.
                </p>
                <p className="text-lg text-foreground">
                  This map aims to provide a quick and accessible way to check
                  the status of drinking water data by area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
